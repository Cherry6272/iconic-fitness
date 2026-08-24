export const siteImages = {
  hero: {
    bg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    alt: "Iconic Fitness Main Strength Floor and Dumbbell Rack",
  },
  about: {
    hero: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
    philosophy: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    community: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
  },
  facility: {
    hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    strengthZone: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    cardioZone: "https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=1200&auto=format&fit=crop",
    functionalZone: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    freeWeights: "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1200&auto=format&fit=crop",
    recoverySuite: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
  transformations: {
    before1: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    after1: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    before2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    after2: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
  },
  gallery: [
    { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop", category: "FACILITY", title: "Eleiko Olympic Platform" },
    { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop", category: "TRAINING", title: "Heavy Dumbbell Array" },
    { url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop", category: "TRAINING", title: "Metabolic Sled Drive" },
    { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop", category: "COMMUNITY", title: "Evening Athletic Floor" },
    { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop", category: "FACILITY", title: "Infrared Recovery Sauna" },
    { url: "https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=1200&auto=format&fit=crop", category: "FACILITY", title: "Sprint & Ergometer Zone" },
    { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop", category: "RESULTS", title: "1-on-1 Biomechanical Screen" },
    { url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop", category: "TRAINING", title: "Kettlebell Conditioning" },
  ],
  fallback: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
};

// Safe Image component helper to handle loading and fallback cleanly
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = siteImages.fallback;
};
