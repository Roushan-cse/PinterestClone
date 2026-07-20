import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, tooltip, to, variant = "default" }) => {
  return (
    <div className="group relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
            flex h-12 w-12 items-center justify-center
            transition-all duration-200
            z-20

            ${
              variant === "logo"
                ? "rounded-full text-red-600 hover:bg-gray-100"
                : isActive
                ? "rounded-2xl border-4 border-black bg-gray-100"
                : "rounded-2xl text-black hover:bg-gray-100"
            }
          `
        }
      >
        {icon}
      </NavLink>

      <div
        className="
          z-20
          pointer-events-none
          absolute
          left-full
          top-1/2
          ml-3
          -translate-y-1/2
          whitespace-nowrap
          rounded-xl
          bg-black
          px-3
          py-2
          text-sm
          font-medium
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-200
          group-hover:opacity-100
          group-hover:translate-x-1
        "
      >
        {tooltip}
      </div>
    </div>
  );
};

export default SidebarItem;