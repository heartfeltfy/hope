import { cn } from "@/utils/cn";
import GithubIcon from "./GithubIcon";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}
type DesktopNavProps = {
  navList: NavItem[];
};

function DesktopNav({ navList }: DesktopNavProps) {
  return (
    <div className="hidden sm:flex items-center space-x-4">
      {navList.map((item) => (
        <Link
          key={item.name}
          to={item.path}
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
          {item.name}
        </Link>
      ))}
      <GithubIcon />
    </div>
  );
}

export default DesktopNav;
