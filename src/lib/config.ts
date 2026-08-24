export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  forWho: string;
  duration: string;
  intensity: string;
  image: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  recommended?: boolean;
  features: string[];
  cta: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  achievement: string;
  duration: string;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const siteConfig = {
  brand: {
    name: "ICONIC FITNESS",
    tagline: "TRAIN DIFFERENT. LIVE STRONGER.",
    subtagline: "BUILT FOR PERFORMANCE. DESIGNED FOR TRANSFORMATION.",
    description: "ICONIC FITNESS is a world-class luxury gym, athletic strength & conditioning facility, and high-performance transformation destination.",
    yearEstablished: "2016",
  },
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "+919876543210",
    whatsapp: "+91 98765 43210",
    whatsappClean: "919876543210",
    email: "join@iconicfitness.com",
    address: "Plot 42, Executive Fitness Boulevard, Cyber Hills, Phase 1",
    city: "Metropolis",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.467362828691!2d78.3842345!3d17.4373456!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE0LjQiTiA3OMKwMjMnMDMuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
    hours: {
      weekdays: "05:00 AM – 11:00 PM",
      saturday: "06:00 AM – 10:00 PM",
      sunday: "07:00 AM – 08:00 PM",
    }
  },
  socials: {
    instagram: "https://instagram.com/iconicfitness",
    facebook: "https://facebook.com/iconicfitness",
    youtube: "https://youtube.com/iconicfitness",
    twitter: "https://x.com/iconicfitness",
  },
  stats: [
    { value: "10+", label: "Years of High-Performance Training", suffix: "" },
    { value: "12,000", label: "Square Feet Architectural Facility", suffix: " sq.ft." },
    { value: "85+", label: "Custom Olympic & Custom Hammer Strength Rigs", suffix: "" },
    { value: "1,500+", label: "Member Transformations Documented", suffix: "" },
  ],
  principles: [
    { num: "01", title: "PERFORMANCE FIRST", desc: "Every piece of equipment, biomechanical arc, and dumbbell is hand-selected for optimal neural drive and body composition optimization." },
    { num: "02", title: "UNCOMPROMISING DISCIPLINE", desc: "We eliminate distractions. No crowds, no broken machines, no standard gym tropes—only focused atmospheric training." },
    { num: "03", title: "ELITE COMMUNITY", desc: "Train alongside committed individuals, executive athletes, and competitive coaches who elevate your standard daily." },
    { num: "04", title: "MEASURABLE TRANSFORMATION", desc: "We track body composition, force output, and functional strength markers with precision science." }
  ],
  programs: [
    {
      id: "strength",
      slug: "strength-conditioning",
      title: "STRENGTH & CONDITIONING",
      subtitle: "Build raw athletic output & dense muscle architecture",
      shortDesc: "Periodized resistance training utilizing Eleiko steel, heavy Dumbbell arrays, and power racks engineered for maximum power production.",
      fullDesc: "Our flagship Strength & Conditioning protocol merges powerlifting fundamentals with functional hypertrophy principles. Designed for athletes and high performers seeking real physical dominance.",
      benefits: ["Maximal Strength Output", "Bone Density & Kinetic Stability", "Neuromuscular Efficiency", "Body Fat Reduction"],
      forWho: "Beginners to advanced lifters committed to structured progressive overload.",
      duration: "12 - 16 Weeks Phase",
      intensity: "High / Elite",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "hypertrophy",
      slug: "muscle-hypertrophy",
      title: "MUSCLE & HYPERTROPHY",
      subtitle: "Biomechanical precision for physique sculpture",
      shortDesc: "Targeted resistance work on specialized biomechanical pin-loaded and plate-loaded machines for optimal stimulus and isolation.",
      fullDesc: "Focus on tension, mechanics, and volume drive. Designed to maximize muscle cross-sectional area with minimal joint strain using elite custom machinery.",
      benefits: ["Lean Muscle Sculpting", "Symmetrical Aesthetics", "Targeted Hypertrophy", "Metabolic Acceleration"],
      forWho: "Individuals seeking aesthetic lean physique development and muscular hypertrophy.",
      duration: "8 - 12 Weeks Cycle",
      intensity: "Moderate to High",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "personal-training",
      slug: "personal-training",
      title: "1-ON-1 ELITE COACHING",
      subtitle: "Bespoke biomechanics, nutrition & performance protocol",
      shortDesc: "Direct 1-on-1 mentorship with senior Master Trainers incorporating custom biomechanical profiling, bloodwork reviews, and nutrition design.",
      fullDesc: "The ultimate personal coaching experience. Tailored specifically around your anatomical structure, lifestyle schedule, and ambition level.",
      benefits: ["Dedicated Master Coach", "Customized Nutrition & Macro Blueprint", "Biomechanical Assessment", "Weekly Biomarker Audits"],
      forWho: "Executives, athletes, and individuals demanding rapid, error-free physical transformation.",
      duration: "Ongoing / 3-Month Commitment",
      intensity: "Tailored to Capacity",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "fat-loss",
      slug: "metabolic-fat-loss",
      title: "METABOLIC FAT LOSS",
      subtitle: "High-yield energy system conditioning & physique lean-out",
      shortDesc: "High-intensity aerobic conditioning, Wattbike interval sprints, and metabolic circuits that elevate post-exercise oxygen consumption (EPOC).",
      fullDesc: "Strip body fat while preserving lean muscle mass. Combines metabolic resistance training with targeted energy systems conditioning.",
      benefits: ["Rapid Adipose Tissue Loss", "Cardiovascular Endurance", "High EPOC Caloric Burn", "Insulin Sensitivity Improvement"],
      forWho: "Anyone aiming to cut fat, improve stamina, and achieve a chiseled aesthetic.",
      duration: "8 Weeks Intensive",
      intensity: "High Intensity",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "functional",
      slug: "functional-athleticism",
      title: "FUNCTIONAL ATHLETICISM",
      subtitle: "Mobility, power transfer, agility and core fortitude",
      shortDesc: "Multi-planar movement patterns using kettlebells, sled pushes, gymnastics rings, and plyometric boxes for real-world kinetic vigor.",
      fullDesc: "Move better, react faster, and remain injury-resilient. Build athletic coordination, core stability, and functional stamina.",
      benefits: ["Joint Mobility & Longevity", "Explosive Agility", "Core Stability", "Injury Prevention"],
      forWho: "Sports participants, recreational athletes, and those seeking functional daily strength.",
      duration: "Continuous",
      intensity: "Dynamic",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
    }
  ] as Program[],
  trainers: [
    {
      id: "marcus-rowell",
      name: "MARCUS ROWELL",
      role: "Founder & Head of Human Performance",
      specialty: "Biomechanical Strength & Physique Architecture",
      experience: "14+ Years Coaching",
      bio: "Former collegiate athlete turned strength specialist. Marcus established Iconic Fitness to create a standard of training free from commercial fluff.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
      certifications: ["CSCS (NSCA)", "BioSignature Practitioner", "FMS Level 2"]
    },
    {
      id: "elena-vance",
      name: "ELENA VANCE",
      role: "Senior Performance Coach",
      specialty: "Metabolic Conditioning & Hypertrophy",
      experience: "9 Years Experience",
      bio: "Specializing in athletic physique refinement and high-intensity metabolic conditioning. Elena coaches with relentless precision and tactical rigor.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop",
      certifications: ["NASM-CPT", "Precision Nutrition Level 2", "EXOS Performance Specialist"]
    },
    {
      id: "david-kael",
      name: "DAVID KAEL",
      role: "Head of Functional Strength",
      specialty: "Powerlifting & Kinetic Longevity",
      experience: "11 Years Experience",
      bio: "David focuses on heavy compound lifting mechanics, joint integrity, and building unbreakable spinal and core strength.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
      certifications: ["USAW Level 2 Coach", "Starting Strength Coach", "FRC Movement Specialist"]
    },
    {
      id: "sarah-chen",
      name: "SARAH CHEN",
      role: "Physique & Nutrition Strategist",
      specialty: "Female Body Recomposition & Metabolism",
      experience: "7 Years Experience",
      bio: "Sarah combines evidence-based nutrition science with progressive resistance training to sculpt athletic, high-energy physiques.",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1000&auto=format&fit=crop",
      certifications: ["ISSN Sports Nutritionist", "ACE Master Trainer", "Kinstretch Certified"]
    }
  ] as Trainer[],
  memberships: [
    {
      id: "essential",
      name: "ESSENTIAL ACCESS",
      tagline: "Unrestricted access to the primary training floor & recovery suite.",
      price: "₹4,999",
      period: "per month",
      recommended: false,
      features: [
        "Full 24/7 Facility Access",
        "Eleiko & Hammer Strength Platforms",
        "Architectural Locker & Sauna Suite",
        "Initial Biomechanical Movement Screen",
        "Access to Iconic Athlete Mobile App",
        "Complimentary Guest Pass (1/mo)"
      ],
      cta: "ENQUIRE FOR ESSENTIAL"
    },
    {
      id: "performance",
      name: "PERFORMANCE ATHLETE",
      tagline: "Structured programming + full facility access + recovery science.",
      price: "₹8,499",
      period: "per month",
      recommended: true,
      features: [
        "All Essential Access Privileges",
        "Monthly Customized Training Blueprint",
        "Bi-weekly Body Composition Analysis (InBody 770)",
        "Infrared Sauna & Cold Plunge Unlimited Access",
        "Group Athletic Performance Labs",
        "Priority Locker Reservation",
        "Complimentary Guest Passes (3/mo)"
      ],
      cta: "JOIN AS PERFORMANCE ATHLETE"
    },
    {
      id: "elite",
      name: "ELITE 1-ON-1 COACHING",
      tagline: "Dedicated Master Trainer mentorship with complete custom nutrition.",
      price: "₹18,999",
      period: "per month",
      recommended: false,
      features: [
        "All Performance Tier Privileges",
        "12 Direct 1-on-1 Personal Coaching Sessions",
        "Bespoke Macro & Nutrition Protocol",
        "Weekly Biomarker & Strength Audits",
        "Direct WhatsApp Access to Master Coach",
        "Personalized Supplement Protocol",
        "VIP Locker & Towel Service"
      ],
      cta: "APPLY FOR ELITE COACHING"
    }
  ] as MembershipTier[],
  testimonials: [
    {
      id: "1",
      quote: "THE BIGGEST CHANGE WASN'T JUST MY PHYSIQUE. IT WAS MY DAILY DISCIPLINE AND MENTAL CAPACITY.",
      author: "Vikram Malhotra",
      role: "Managing Director, Tech Ventures",
      achievement: "Dropped 14% Body Fat & Doubled Deadlift",
      duration: "10 Months Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "2",
      quote: "ICONIC FITNESS HAS NO EQUAL. THE ATMOSPHERE, EQUIPMENT, AND COACHING ARE AT A WORLD-CLASS LEVEL.",
      author: "Dr. Ananya Roy",
      role: "Orthopedic Surgeon",
      achievement: "Rehabilitated Knee & Gained 5kg Muscle",
      duration: "14 Months Member",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "3",
      quote: "NO BROKEN MACHINES, NO UNNECESSARY DRAMA. JUST SERIOUS ATHLETES AND WORLD-CLASS EQUIPMENT.",
      author: "Rohan Kapoor",
      role: "Founder, Capital Partners",
      achievement: "Completed First Powerlifting Meet",
      duration: "2 Years Member",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    }
  ] as Testimonial[],
  faqs: [
    {
      question: "What makes Iconic Fitness different from regular gym franchises?",
      answer: "Iconic Fitness is purposefully engineered as an uncompromised high-performance facility. We invest exclusively in biomechanically correct equipment (Eleiko, Hammer Strength, Arsenal Strength), limit total membership to avoid crowding, enforce proper gym etiquette, and staff only elite certified Master Coaches."
    },
    {
      question: "Can beginners train at Iconic Fitness?",
      answer: "Absolutely. Premium does not mean intimidating. Every new member receives an initial movement assessment and physical consultation. Our coaches guide beginners step-by-step with zero ego."
    },
    {
      question: "Do you offer guest passes or trial day visits?",
      answer: "Yes, we offer complimentary day passes by appointment so serious prospective members can experience the floor, machines, and atmosphere firsthand."
    },
    {
      question: "Are personal trainers included with basic membership?",
      answer: "Every membership includes a foundational onboarding movement screen and custom workout plan. Direct 1-on-1 personal coaching is available in our Performance & Elite Tiers or as standalone packages."
    },
    {
      question: "What are your operating hours?",
      answer: "We operate from 05:00 AM to 11:00 PM on weekdays, 06:00 AM to 10:00 PM on Saturdays, and 07:00 AM to 08:00 PM on Sundays."
    }
  ],
  blogPosts: [
    {
      id: "1",
      slug: "progressive-overload-principles",
      title: "The Biomechanics of Progressive Overload: Beyond Just Adding Weight",
      excerpt: "Why true strength progress requires neural drive optimization, mechanical tension control, and recovery periodization.",
      content: `Progressive overload is the foundation of muscle hypertrophy and force development. However, most lifters equate overload solely to adding heavier plates to the barbell.

In elite training science, mechanical tension, time-under-tension (TUT), range of motion (ROM), and exercise execution quality are far more important drivers of growth.

1. Range of Motion Integrity
Executing a squat with full hip hinge depth and controlled eccentric tempo creates twice the effective tension of a heavy half-rep.

2. Mechanical Tension Control
Intentionally driving tension into the target muscle fibers without relying on momentum ensures maximum hypertrophy stimulus.

3. Periodization Strategy
Systematically cycling volume, intensity, and deload weeks prevents central nervous system fatigue while sustaining linear gains.`,
      category: "STRENGTH TRAINING",
      author: "Marcus Rowell",
      date: "August 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      tags: ["Strength", "Hypertrophy", "Biomechanics"]
    },
    {
      id: "2",
      slug: "nutrition-for-executive-performance",
      title: "Fueling the High-Performance Executive: Nutrient Timing & Energy Systems",
      excerpt: "How to maintain peak mental focus and athletic physique while navigating demanding 60+ hour work weeks.",
      content: `High-performing executives face chronic cognitive fatigue, erratic schedules, and elevated cortisol levels. Optimizing body composition requires aligning nutrition with energy demands.

1. Protein Distribution Strategy
Consuming 30-40g of leucine-rich protein every 4 hours maintains muscle protein synthesis (MPS) and stabilizes blood glucose.

2. Strategic Carbohydrate Timing
Positioning complex carbohydrates around training sessions fuels high-intensity performance without causing mid-day energy crashes.

3. Hydration & Electrolytes
Sodium, magnesium, and potassium balance directly impact muscular contraction, mental clarity, and blood pressure control.`,
      category: "NUTRITION & ENERGY",
      author: "Sarah Chen",
      date: "August 10, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
      tags: ["Nutrition", "Executive Health", "Fat Loss"]
    },
    {
      id: "3",
      slug: "cold-plunge-infrared-sauna-recovery",
      title: "Contrast Therapy Science: Cold Plunge & Infrared Sauna for Recovery",
      excerpt: "Unpacking vascular dilation, mitochondrial biogenesis, and inflammation reduction through contrast temperature protocols.",
      content: `Recovery is where adaptations occur. Utilizing thermal stress—combining infrared sauna heat shock proteins with cold plunge vasoconstriction—accelerates muscle tissue repair.

1. Infrared Sauna & Heat Shock Proteins
Sauna sessions elevated to 80°C enhance blood flow, stimulate growth hormone secretion, and flush metabolic waste.

2. Cold Water Immersion (CWI)
Plunging into 10°C water for 3-5 minutes reduces acute muscle soreness, lowers heart rate variability (HRV) stress, and sharpens mental alertness.

3. Protocol Application
Perform 15-20 minutes of sauna followed immediately by 3 minutes of cold plunge for 3 full cycles post-workout.`,
      category: "RECOVERY SCIENCE",
      author: "David Kael",
      date: "August 02, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      tags: ["Recovery", "Sauna", "Cold Plunge"]
    }
  ] as BlogPost[]
};
