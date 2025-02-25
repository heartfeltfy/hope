import { cn } from "@/utils/cn";
import GithubIcon from "./GithubIcon";

interface DesktopNavProps {
  navList: string[];
}

function DesktopNav({ navList }: DesktopNavProps) {
  return (
    <div className="hidden sm:flex items-center space-x-4">
      {navList.map((item) => (
        <div
          key={item}
          className={cn(
            "text-sm uppercase tracking-widest",
            "cursor-pointer",
            "text-gray-600",
            "hover:text-black transition-colors duration-200",
            "hover:bg-zinc-100",
            "p-2",
            "rounded-lg"
          )}
        >
          {item}
        </div>
      ))}
      <GithubIcon />
    </div>
  );
}

export default DesktopNav;
