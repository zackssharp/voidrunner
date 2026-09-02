import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

// Knowledge base for the support assistant: every text file dropped into
// `public/rag/` is concatenated and passed to Claude as context. Good enough
// while the corpus is small; if it grows past a few thousand lines, switch to
// real retrieval (embeddings + a vector store) instead of stuffing everything
// into the prompt.

const RAG_DIR = path.join(process.cwd(), "public", "rag");
const ALLOWED_EXTENSIONS = new Set([".txt", ".md", ".markdown"]);
const MAX_CHARS = 60_000;

let cache: Promise<string> | null = null;

async function readKnowledgeBase(): Promise<string> {
  let entries: string[];
  try {
    entries = await readdir(RAG_DIR);
  } catch {
    return "";
  }

  const docs = await Promise.all(
    entries
      .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort()
      .map(async (name) => {
        const body = (await readFile(path.join(RAG_DIR, name), "utf8")).trim();
        return body ? `## ${name}\n${body}` : "";
      }),
  );

  let combined = docs.filter(Boolean).join("\n\n");
  if (combined.length > MAX_CHARS) {
    console.warn(
      `[rag] knowledge base is ${combined.length} chars; truncating to ${MAX_CHARS}. Move to real retrieval.`,
    );
    combined = `${combined.slice(0, MAX_CHARS)}\n\n[knowledge base truncated]`;
  }
  return combined;
}

/**
 * Loads and caches the support knowledge base for the lifetime of the server
 * process. Restart the dev server after editing files in `public/rag/`.
 */
export function loadKnowledgeBase(): Promise<string> {
  if (!cache) {
    cache = readKnowledgeBase();
  }
  return cache;
}
