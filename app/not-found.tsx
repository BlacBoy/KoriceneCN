export default function NotFound() {
  return (
    <main className="container-x py-32">
      <h1 className="text-5xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-ink/75">That link does not go anywhere. Head back to the homepage.</p>
      <a href="/" className="btn btn-primary mt-8">Go home</a>
    </main>
  );
}
