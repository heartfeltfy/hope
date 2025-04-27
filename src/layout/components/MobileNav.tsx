import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}
interface MobileNavProps {
  isOpen: boolean;
  navList: NavItem[];
}

const MobileNav = ({ isOpen, navList }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "sm:hidden",
        "absolute left-0 right-0",
        "w-full bg-gradient-to-b from-blue-50/95 to-white/95 backdrop-blur-sm",
        "border-t border-slate-200/70",
        "shadow-lg",
        "transition-all duration-300 ease-in-out",
        "z-40",
        "top-full",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
        !isOpen && "invisible"
      )}
      style={{
        transformOrigin: "top",
      }}
    >
      <ul
        className={cn(
          "flex flex-col",
          "divide-y divide-slate-100",
          "text-slate-600",
          "max-w-7xl mx-auto",
          "max-h-[calc(100vh-100%)]",
          "overflow-y-auto"
        )}
      >
        {navList.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                "py-4 px-8",
                "text-sm uppercase tracking-wide",
                "cursor-pointer",
                "hover:bg-indigo-50/50 hover:text-indigo-600 transition-colors duration-300",
                "flex items-center justify-center",
                "font-medium",
                "w-full"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
