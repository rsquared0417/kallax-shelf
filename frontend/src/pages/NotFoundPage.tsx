import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center">
      <p className="text-[10px] font-semibold tracking-[0.2em] text-stone-400">
        ERROR / 404
      </p>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        Page not found.
      </h1>

      <p className="mt-3 max-w-md text-sm leading-6 text-stone-500">
        That page doesn't exist in your Collector workspace.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
      >
        Return to dashboard
      </Link>
    </div>
  );
}
