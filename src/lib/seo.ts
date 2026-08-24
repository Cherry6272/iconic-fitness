import { siteConfig } from './config';

export const getGymSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "GymOrFitnessCenter",
    "name": siteConfig.brand.name,
    "description": siteConfig.brand.description,
    "url": "https://iconicfitness.com",
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": siteConfig.contact.city,
      "addressCountry": siteConfig.contact.country
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "06:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$$",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
  };
};

export const getFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const getArticleSchema = (article: typeof siteConfig.blogPosts[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.brand.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://iconicfitness.com/logo.png"
      }
    },
    "datePublished": article.date
  };
};
