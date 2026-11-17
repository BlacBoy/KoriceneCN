import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">From application to growth plan in four steps.</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-paper p-6">
              <span className="font-display text-5xl font-extrabold text-coral">{i + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
