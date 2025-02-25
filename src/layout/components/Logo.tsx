import { cn } from "@/utils/cn";

function Logo() {
  return (
    <div className={cn("flex items-center space-x-2 cursor-pointer")}>
      <h1 className={cn("text-xl sm:text-2xl font-bold", "tracking-wider")}>
        HOPE
      </h1>
    </div>
  );
}

export default Logo;
