import { useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";

interface SeoProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SeoProps) {
  useEffect(() => {
    const finalTitle = title 
      ? `${title} | ${siteConfig.brandName}` 
      : siteConfig.seo.defaultTitle;
    
    const finalDesc = description || siteConfig.seo.defaultDescription;
    
    // Set document title
    document.title = finalTitle;
    
    // Dynamically look up or apply meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", finalDesc);

  }, [title, description]);

  return null;
}
