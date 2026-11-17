import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="bg-ink text-paper">
      <dl className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-4xl font-extrabold text-sun">{s.value}</dd>
            <dd className="mt-1 text-sm text-paper/75">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
