import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute { const base=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"; return ["/","/shop","/about","/contact","/login","/register"].map(path=>({url:base+path,lastModified:new Date()})); }
