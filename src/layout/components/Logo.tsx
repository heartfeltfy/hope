import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={cn("flex items-center space-x-2 group")}>
      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
        H
      </div>
      <h1
        className={cn(
          "text-xl sm:text-2xl font-bold",
          "tracking-wider",
          "font-['Montserrat',_sans-serif]",
          "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
          "group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300"
        )}
      >
        HOPE
      </h1>
    </Link>
  );
}

export default Logo;
