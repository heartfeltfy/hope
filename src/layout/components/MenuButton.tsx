import { cn } from "@/utils/cn";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      className={cn(
        "block",
        "z-50",
        "cursor-pointer",
        "p-2",
        "rounded-full",
        "hover:bg-zinc-100",
        "dark:hover:bg-gray-800",
        "transition-all duration-300"
      )}
      onClick={onClick}
    >
      <svg
        className={cn(
          "w-6 h-6",
          "transition-transform duration-300",
          isOpen && "rotate-180"
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
