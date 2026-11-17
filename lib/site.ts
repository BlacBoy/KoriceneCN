// Single place to edit copy, links and placeholder data. Everything here is TEMPORARY.
export const site = {
  name: "Koricene Creator Network",
  short: "Koricene",
  url: "https://koricenecn.com",
  email: "hello@koricenecn.com",
  tiktok: "https://www.tiktok.com/@koricenecn", // TODO: real handle
  instagram: "https://www.instagram.com/koricenecn", // TODO
  tagline: "We turn TikTok creators into brands.",
  description:
    "Koricene is a TikTok creator network. We manage creator accounts, sharpen content and branding, and give you a clear blueprint for growth.",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#creators", label: "Creators" },
  { href: "#faq", label: "FAQ" },
];

export const stats = [
  { value: "120+", label: "creators signed" },        // TODO: real numbers
  { value: "45M", label: "monthly views managed" },
  { value: "8", label: "niches covered" },
  { value: "24h", label: "reply time on applications" },
];

export const services = [
  { title: "Content elevation", body: "Hooks, edits, pacing and posting rhythm reviewed by people who edit for TikTok every day." },
  { title: "Account management", body: "We run the day-to-day: scheduling, comments, analytics and platform compliance." },
  { title: "Branding", body: "Handle, bio, visual style and a voice your audience recognises in one second." },
  { title: "Growth blueprint", body: "A written plan with weekly targets, content pillars and tested formats for your niche." },
  { title: "LIVE support", body: "Go-live schedules, co-host matching and gifting guidance for creators ready for LIVE." },
  { title: "Brand deals", body: "We bring campaigns that fit your audience and handle the briefs and payment follow-up." },
];

export const steps = [
  { title: "Apply", body: "Share your handle and niche. Takes two minutes." },
  { title: "Audit", body: "We review your account and send back what to fix first." },
  { title: "Onboard", body: "Sign the agreement, grant access, and meet your account lead." },
  { title: "Grow", body: "Weekly content plans, edits and reports. We adjust as the data comes in." },
];

// Placeholder creators; swap with real people + images in /public/creators
export const creators = [
  { name: "Creator One", handle: "@creator.one", niche: "Comedy", views: "2.4M", from: "#FF4B6E", to: "#FFD43B" },
  { name: "Creator Two", handle: "@creator.two", niche: "Fashion", views: "1.1M", from: "#3355FF", to: "#7AE0FF" },
  { name: "Creator Three", handle: "@creator.three", niche: "Food", views: "860K", from: "#16133D", to: "#3355FF" },
  { name: "Creator Four", handle: "@creator.four", niche: "Sports", views: "3.2M", from: "#FFD43B", to: "#FF4B6E" },
];

export const faqs = [
  { q: "Who can join Koricene?", a: "Creators of any size who post consistently and want structured support. Placeholder: set your real minimum here." },
  { q: "What does it cost?", a: "Placeholder: describe your revenue-share or fee model clearly here." },
  { q: "Do you guarantee growth?", a: "Placeholder: explain what the blueprint guarantees, what it depends on, and how progress is measured." },
  { q: "Do I keep ownership of my account?", a: "Placeholder: yes, state this plainly and explain how access is granted and revoked." },
  { q: "Which countries do you work in?", a: "Placeholder: Nigeria-first, open to creators across Africa and beyond." },
];
