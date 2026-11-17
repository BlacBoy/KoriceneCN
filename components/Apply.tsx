"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Apply() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const field = "mt-1 w-full rounded-xl border-2 border-ink/15 bg-white px-4 py-3 focus:border-cobalt";

  return (
    <section id="apply" className="bg-ink py-20 text-paper md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Ready to grow your TikTok?</h2>
          <p className="mt-4 max-w-md text-paper/75">
            Tell us about your account. We reply within one working day with next steps.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-paper p-6 text-ink sm:p-8">
          <label className="block font-medium">Full name
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block font-medium">TikTok handle
            <input name="handle" required placeholder="@yourhandle" className={field} />
          </label>
          <label className="block font-medium">Email
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className="block font-medium">Followers
            <select name="followers" required defaultValue="" className={field}>
              <option value="" disabled>Choose a range</option>
              <option>Under 1K</option>
              <option>1K to 10K</option>
              <option>10K to 100K</option>
              <option>100K+</option>
            </select>
          </label>
          <label className="block font-medium">What do you want help with?
            <textarea name="message" rows={4} className={field} />
          </label>
          {/* Honeypot: bots fill this, people never see it */}
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <button disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
            {status === "sending" ? "Sending application" : "Send application"}
          </button>

          <p role="status" aria-live="polite" className="min-h-6 text-sm">
            {status === "sent" && "Application received. We will email you within one working day."}
            {status === "error" && <span className="text-coral">{error} Try again or email us.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
