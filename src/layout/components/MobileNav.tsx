import { cn } from "@/utils/cn";

interface MobileNavProps {
  isOpen: boolean;
  navList: string[];
}

const MobileNav = ({ isOpen, navList }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "sm:hidden",
        "absolute left-0 right-0",
        "w-full bg-white/95 backdrop-blur-sm",
        "border-t border-gray-100",
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
          "divide-y divide-gray-100",
          "text-gray-600",
          "max-w-7xl mx-auto",
          "max-h-[calc(100vh-100%)]",
          "overflow-y-auto"
        )}
      >
        {navList.map((item) => (
          <li
            key={item}
            className={cn(
              "py-4 px-8",
              "text-sm uppercase tracking-widest",
              "cursor-pointer",
              "hover:bg-zinc-100 hover:text-black transition-colors duration-300",
              "flex items-center justify-center",
              "font-medium"
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
