import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The /api/support-chat route reads the RAG docs from public/rag/ at runtime
  // with fs. Make sure those files are traced into the serverless bundle.
  outputFileTracingIncludes: {
    "/api/support-chat": ["./public/rag/**/*"],
  },
};

export default nextConfig;
