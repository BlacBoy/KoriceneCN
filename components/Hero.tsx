import { site } from "@/lib/site";

// Placeholder phone tiles. Replace the gradient divs with <video> or <Image> of real creator clips.
const tiles = [
  { r: "-6deg", from: "#FF4B6E", to: "#FFD43B", handle: "@creator.one", views: "2.4M", delay: "0s", cls: "left-0 top-10 z-10" },
  { r: "3deg", from: "#3355FF", to: "#7AE0FF", handle: "@creator.two", views: "1.1M", delay: ".15s", cls: "left-[32%] top-0 z-20" },
  { r: "9deg", from: "#16133D", to: "#FF4B6E", handle: "@creator.three", views: "860K", delay: ".3s", cls: "right-0 top-16 z-10" },
];

export default function Hero() {
  return (
    <section className="container-x grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
      <div>
        <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          Koricene runs your TikTok like a studio would: sharper content, managed accounts, a brand people remember,
          and a written plan for what to post next.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#apply" className="btn btn-primary">Apply to join</a>
          <a href="#services" className="btn btn-ghost">See what we do</a>
        </div>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[500px]" aria-hidden="true">
        {tiles.map((t) => (
          <div
            key={t.handle}
            style={{ ["--r" as string]: t.r, animationDelay: t.delay, background: `linear-gradient(160deg, ${t.from}, ${t.to})` }}
            className={`absolute h-[340px] w-[44%] animate-rise rounded-[28px] border-4 border-ink p-3 shadow-2xl sm:h-[420px] ${t.cls}`}
          >
            <div className="mx-auto h-1.5 w-10 rounded-full bg-white/60" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-display text-sm font-bold">{t.handle}</p>
              <p className="text-xs opacity-90">{t.views} views</p>
            </div>
          </div>
        ))}
        <span className="absolute -bottom-2 right-4 z-30 rotate-[-4deg] rounded-full bg-sun px-4 py-2 font-display text-sm font-bold">
          Placeholder clips
        </span>
      </div>
    </section>
  );
}
