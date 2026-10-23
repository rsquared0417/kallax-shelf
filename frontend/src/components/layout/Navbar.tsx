import { NavLink } from "react-router";

const mainNavigation = [
  { to: "/", label: "Dashboard", icon: "▦", end: true },
  { to: "/sneakers", label: "Sneakers", icon: "◈", end: false },
  { to: "/perfumes", label: "Perfumes", icon: "◇", end: false },
  { to: "/search", label: "Search", icon: "◇", end: false },
  { to: "/wishlist", label: "Wishlist", icon: "◇", end: false },
];

const otherNavigation = [
  { to: "/settings", label: "Settings", icon: "⚙️", end: false },
  { to: "/releases", label: "News & Releases", icon: "◈", end: false },
];

export function Navbar() {
  return (
    <>
      {mainNavigation.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            [
              "flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors",
              isActive
                ? "bg-stone-900 font-medium text-white"
                : "text-stone-600 hover:bg-stone-100 hover:text-stone-950",
            ].join(" ")
          }
        >
          <span className="grid h-6 w-6 place-items-center text-lg">
            {item.icon}
          </span>

          {item.label}
        </NavLink>
      ))}
      
    </>
  );
}
