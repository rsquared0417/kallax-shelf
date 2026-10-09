export function Dashboard() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 p-6">
      <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900">
          Collector
        </h1>

        <p className="mt-3 text-stone-500">Your collection, organized.</p>

        <button className="mt-6 rounded-lg bg-stone-900 px-5 py-3 font-medium text-white transition hover:bg-stone-700">
          Get Started
        </button>
      </div>
    </main>
  );
}
