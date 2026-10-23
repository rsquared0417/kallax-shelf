import { CardLayout } from "../components/card/CardLayout";
import perfume_products from "../../src/dummy/data/perfume_products.json";

export function PerfumesPage() {
  return (
    <div>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-stone-400">
            CATEGORY / 02
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Perfumes
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-stone-500">
            A dedicated space for your fragrances, from signature scents to
            bottles worth keeping.
          </p>
        </div>

        <span className="w-fit rounded-full border border-stone-200 bg-white px-3 py-2 text-xs text-stone-500">
          Catalog coming next
        </span>
      </div>

      <section className="mt-10 rounded-3xl border border-dashed border-stone-300 bg-white/60 px-6 py-16 text-center sm:px-10">
        <h2 className="text-xl font-semibold tracking-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {perfume_products.map((product) =>
            CardLayout({ ...product, colorway: "" }),
          )}
        </h2>
      </section>
    </div>
  );
}
