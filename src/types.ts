export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  imageEmoji: string;
  previewType: "wheel" | "thermometer" | "maze" | "jar" | "cards" | "behavior" | "expressions";
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  messages: {
    sender: "therapist" | "parent";
    text: string;
    time: string;
  }[];
}

export interface KitOption {
  id: "basic" | "complete" | "complete-discount";
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  installments?: string;
  savings?: number;
  popular?: boolean;
  ctaText: string;
  features: string[];
  bonusesIncluded?: string[];
}
