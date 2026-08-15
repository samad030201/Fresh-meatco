import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute { return { rules:{userAgent:"*",allow:"/"}, sitemap:"/sitemap.xml" }; }
