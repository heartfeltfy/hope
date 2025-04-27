import { cn } from "@/utils/cn";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuButton = ({ isOpen, onClick, className }: MenuButtonProps) => {
  return (
    <button
      className={cn(
        "block z-50 cursor-pointer p-2 rounded-md",
        "text-slate-600 hover:text-indigo-600",
        "hover:bg-indigo-50/60",
        "transition-all duration-300",
        className
      )}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? "关闭菜单" : "打开菜单"}
    >
      <svg
        className={cn(
          "w-6 h-6 transition-transform duration-300",
          isOpen && "rotate-90"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );
};

export default MenuButton;
