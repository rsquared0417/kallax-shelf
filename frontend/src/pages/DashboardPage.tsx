import { Link } from "react-router";

const categories = [
  {
    number: "01",
    name: "Sneakers",
    description:
      "Keep track of your pairs, colorways, sizes, and personal details.",
    icon: "👟",
    to: "/sneakers",
    background: "bg-[#e9ede5]",
  },
  {
    number: "02",
    name: "Perfumes",
    description:
      "Organize your fragrances, bottles, concentrations, and batch codes.",
    icon: "🧴",
    to: "/perfumes",
    background: "bg-[#efe6de]",
  },
];

export function DashboardPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-stone-400">
              YOUR COLLECTION, YOUR WAY
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Keep the things
              <br />
              worth keeping.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-stone-300">
              A personal space to organize, manage, and appreciate your sneaker
              and fragrance collections.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/sneakers"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
              >
                Explore sneakers
              </Link>

              <Link
                to="/perfumes"
                className="rounded-xl border border-stone-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Explore perfumes
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-10 h-64 w-64 rounded-full border border-white/10 sm:right-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-1 h-48 w-48 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-20 h-56 w-56 rounded-full bg-white/[0.04] blur-2xl"
          />
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-7 sm:p-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-stone-400">
              BUILT AROUND YOU
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Two passions.
              <br />
              One organized space.
            </h2>

            <p className="mt-3 text-sm leading-6 text-stone-500">
              Each category will have its own product catalog, collection
              records, and details.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <Link
              to="/sneakers"
              className="flex items-center justify-between rounded-2xl bg-stone-50 p-4 transition hover:bg-stone-100"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e9ede5] text-xl">
                  👟
                </span>
                <span>
                  <span className="block text-sm font-medium">Sneakers</span>
                  <span className="mt-1 block text-xs text-stone-500">
                    Footwear catalog
                  </span>
                </span>
              </span>
              <span className="text-stone-400">↗</span>
            </Link>

            <Link
              to="/perfumes"
              className="flex items-center justify-between rounded-2xl bg-stone-50 p-4 transition hover:bg-stone-100"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#efe6de] text-xl">
                  🧴
                </span>
                <span>
                  <span className="block text-sm font-medium">Perfumes</span>
                  <span className="mt-1 block text-xs text-stone-500">
                    Fragrance catalog
                  </span>
                </span>
              </span>
              <span className="text-stone-400">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-stone-400">
              YOUR WORKSPACE
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Start exploring
            </h2>
          </div>

          <span className="text-xs text-stone-500">Initial setup</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.to}
              to={category.to}
              className="group rounded-3xl border border-stone-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-sm sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-3xl ${category.background}`}
                >
                  {category.icon}
                </span>
                <span className="text-xs font-medium tracking-wider text-stone-400">
                  {category.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {category.name}
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-stone-500">
                {category.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-stone-800">
                Open section{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-stone-300 px-5 py-6 sm:px-7">
        <p className="text-sm font-medium">What's next?</p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-500">
          We'll connect your existing JSON catalog, display products as cards,
          and add search and brand filtering. Personal collection records and
          database integration will come later.
        </p>
      </section>
    </div>
  );
}
