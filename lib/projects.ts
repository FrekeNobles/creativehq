export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  services: string[];
  image: string;
  accent: "orange" | "purple" | "yellow";
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
};

export const my_projects: Project[] = [
  {
    slug: "northline-living",
    title: "Northline Living",
    description: "A warm, conversion-focused digital home for a contemporary property brand.",
    category: "Web Design + Development",
    year: "2026",
    services: ["Strategy", "UI/UX", "Brand direction", "Development"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    accent: "orange",
    challenge: "The brand had a strong visual offering but no digital experience that communicated the quality of its spaces clearly or helped prospective clients take the next step.",
    approach: "We shaped the content around trust, visual storytelling and a clear enquiry path. The interface uses generous whitespace, editorial typography and large property imagery to make the product feel tangible before a visitor ever makes contact.",
    outcome: "A polished responsive marketing site that gives the team a clearer sales story and a flexible foundation for adding new properties and campaigns.",
    highlights: ["Responsive property presentation", "Clear enquiry journey", "Reusable content sections", "Editorial visual system"]
  },
  {
    slug: "signal-dashboard",
    title: "Signal Dashboard",
    description: "A focused operations dashboard that turns complex information into quick decisions.",
    category: "Product Design + Frontend",
    year: "2026",
    services: ["Product strategy", "Interface design", "Frontend", "Interaction"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    accent: "purple",
    challenge: "The existing workflow scattered important operational information across multiple tools, making it harder for teams to understand status and act quickly.",
    approach: "We simplified the information architecture around the questions an operator asks most often: what needs attention, what changed, and what is coming next. Data is grouped into compact cards, trends and action states.",
    outcome: "A scalable dashboard concept with a clear hierarchy that can grow with more data without becoming visually noisy.",
    highlights: ["Priority-first information hierarchy", "Responsive data cards", "Reusable component system", "Accessible interaction patterns"]
  },
  {
    slug: "mono-commerce",
    title: "Mono Commerce",
    description: "A modern storefront concept designed to make a small product catalogue feel premium.",
    category: "Brand + E-commerce",
    year: "2026",
    services: ["Brand identity", "Art direction", "Web design", "Development"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    accent: "yellow",
    challenge: "The business needed a stronger visual identity and a storefront that could communicate product value without overwhelming customers with too much information.",
    approach: "We created a restrained visual system with bold typography, product-first photography and short decision-making copy. The shopping journey stays focused from discovery through enquiry or purchase.",
    outcome: "A cohesive brand and storefront direction that gives the business a credible digital presence and a system it can reuse across campaigns.",
    highlights: ["Cohesive brand system", "Product-led layouts", "Campaign-ready sections", "Mobile-first shopping flow"]
  }
];

export function getProject(slug: string) {
  return my_projects.find((project) => project.slug === slug);
}
