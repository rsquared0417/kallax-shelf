import { Link, NavLink, Outlet } from "react-router";
import { Navbar } from "./Navbar";

const mainNavigation = [
  { to: "/", label: "Dashboard", icon: "▦", end: true },
  { to: "/sneakers", label: "Sneakers", icon: "◈", end: false },
  { to: "/perfumes", label: "Perfumes", icon: "◇", end: false },
  { to: "/search", label: "Search", icon: "◇", end: false },
  { to: "/wishlist", label: "Wishlist", icon: "◇", end: false },
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-stone-200 bg-white px-5 py-7 md:flex">
        <Link to="/" className="mb-12 flex items-center gap-3">
          Kallax Shelf
        </Link>
        <p className="mb-3 px-3 text-[10px] uppercasefont-semibold tracking-[0.2em] text-stone-400">
          Workspace
        </p>
        <nav className="flex flex-col gap-1">
          <Navbar />
        </nav>
        <p className="mb-3 px-3 text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400">
          System
        </p>
        <nav className="flex flex-col gap-1">
          <Navbar />
        </nav>
        <div className="mt-auto rounded-2xl bg-stone-100 p-4">
          <p className="text-xs font-semibold text-stone-800">Text</p>
        </div>
      </aside>
      <div className="min-h-screen md:pl-64">
        <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-stone-200/80 bg-white/90 px-5 backdrop-blur md:px-9">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-stone-400">
              COLLECTOR / PERSONAL SPACE
            </p>
            <p className="mt-1 text-sm font-medium text-stone-700">
              Your collection, organized.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-stone-600">Local workspace</span>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl px-5 py-8 pb-10 md:px-9 md:py-10">
          <Outlet />
        </main>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-stone-200 bg-white/95 px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden">
        {mainNavigation.slice(0, 3).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              [
                "flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[11px] transition-colors",
                isActive ? "font-semibold text-stone-950" : "text-stone-500",
              ].join(" ")
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
