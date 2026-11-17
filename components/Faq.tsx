import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Questions creators ask.</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                {f.q}
                <span className="text-2xl text-coral transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
