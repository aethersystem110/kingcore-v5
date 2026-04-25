// Matches basePath in next.config.ts — used for static assets in /public/
// that aren't served through next/image or next/link
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/kingcore-v5" : "";
