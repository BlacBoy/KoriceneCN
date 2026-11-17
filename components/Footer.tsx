import Link from "next/link";
import { site, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold">{site.name}</p>
          <p className="text-sm text-ink/70">&copy; {new Date().getFullYear()} {site.short}. All rights reserved.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm font-medium">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-coral">{n.label}</a>)}
          <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-coral">TikTok</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-coral">Instagram</a>
          <a href={`mailto:${site.email}`} className="hover:text-coral">{site.email}</a>
          <Link href="/privacy" className="hover:text-coral">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
