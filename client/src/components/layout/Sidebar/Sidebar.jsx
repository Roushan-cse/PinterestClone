import {
  PiBell,
  PiChatsCircle,
  PiCompassFill,
  PiGear,
  PiHouseFill,
  PiPinterestLogoFill,
  PiPlusBold,
} from "react-icons/pi";

import SidebarItem from "./SidebarItem";

const topItems = [
  {
    icon: <PiPinterestLogoFill size={28} />,
    tooltip: "Pinterest",
    to: "/",
    variant: "logo",
  },
];

const navigationItems = [
  {
    icon: <PiHouseFill size={24} />,
    tooltip: "Home",
    to: "/",
  },
  {
    icon: <PiCompassFill size={24} />,
    tooltip: "Explore",
    to: "/explore",
  },
  {
    icon: <PiPlusBold size={24} />,
    tooltip: "Create",
    to: "/create",
  },
  {
    icon: <PiBell size={24} />,
    tooltip: "Notifications",
    to: "/notifications",
  },
  {
    icon: <PiChatsCircle size={24} />,
    tooltip: "Messages",
    to: "/messages",
  },
];

const bottomItems = [
  {
    icon: <PiGear size={24} />,
    tooltip: "Settings",
    to: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed z-50 left-0 top-0 flex h-screen w-(--sidebar-width) flex-col items-center border-r border-gray-200 bg-white py-4">
      {/* Logo */}
      {topItems.map((item) => (
        <SidebarItem key={item.to} {...item} />
      ))}

      {/* Navigation */}
      <div className="mt-8 flex flex-col gap-4">
        {navigationItems.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-auto">
        {bottomItems.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;