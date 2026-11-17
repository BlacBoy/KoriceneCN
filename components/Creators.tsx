import { creators } from "@/lib/site";

export default function Creators() {
  return (
    <section id="creators" className="container-x py-20 md:py-28">
      <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">Creators we work with.</h2>
      <p className="mt-4 text-ink/70">Placeholder profiles. Replace with real creators and their permission.</p>
      <ul className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {creators.map((c) => (
          <li key={c.handle}>
            <div
              className="flex aspect-[3/4] items-end rounded-3xl p-4 text-white"
              style={{ background: `linear-gradient(160deg, ${c.from}, ${c.to})` }}
              role="img"
              aria-label={`Placeholder photo for ${c.name}`}
            >
              <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold">{c.niche}</span>
            </div>
            <p className="mt-3 font-display text-lg font-bold">{c.name}</p>
            <p className="text-sm text-ink/70">{c.handle} · {c.views} views</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
