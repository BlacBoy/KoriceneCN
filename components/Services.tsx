import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="container-x py-20 md:py-28">
      <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">Everything behind the camera, handled.</h2>
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article key={s.title} className={i % 2 === 0 ? "border-t-4 border-coral pt-5" : "border-t-4 border-cobalt pt-5"}>
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2 max-w-sm leading-relaxed text-ink/75">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
