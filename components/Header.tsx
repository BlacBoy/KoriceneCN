import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.short} home`}>
          <Image src="/logo.svg" alt="" width={36} height={36} priority />
          <span className="font-display text-xl font-extrabold">{site.short}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="font-medium hover:text-coral">{n.label}</a>
          ))}
          <a href="#apply" className="btn btn-primary !py-2">Apply</a>
        </nav>

        {/* Mobile menu: no JS needed */}
        <details className="relative md:hidden">
          <summary className="btn btn-ghost !py-2 cursor-pointer list-none">Menu</summary>
          <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-ink/10 bg-paper p-3 shadow-xl">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="block rounded-lg px-3 py-2 font-medium hover:bg-ink/5">{n.label}</a>
            ))}
            <a href="#apply" className="btn btn-primary mt-2 w-full">Apply</a>
          </div>
        </details>
      </div>
    </header>
  );
}
