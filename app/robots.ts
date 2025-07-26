export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://ragfront-three.vercel.app",
    sitemap: "https://ragfront-three.vercel.app/sitemap.xml",
  };
}
