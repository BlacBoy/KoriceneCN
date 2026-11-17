import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <main className="container-x max-w-3xl py-20">
      <h1 className="text-4xl font-extrabold">Privacy policy</h1>
      <p className="mt-6 text-ink/75">
        Placeholder page. Replace with a real policy covering what you collect (name, handle, email, follower range),
        why, how long you keep it, and how people can ask for deletion (NDPA 2023 applies for Nigerian users).
      </p>
      <a href="/" className="btn btn-ghost mt-8">Back to home</a>
    </main>
  );
}
