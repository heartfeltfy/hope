import GithubIcon from "./GithubIcon";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

function Header() {
  const navList = ["Home", "Posts", "About"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 添加窗口大小变化监听
  useEffect(() => {
    const handleResize = () => {
      // 当窗口宽度大于 lg 断点 (1024px) 时关闭菜单
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // 清理监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-white">
      <nav
        className={cn(
          "flex justify-between items-center",
          "px-4 sm:px-4 py-4 sm:py-4",
          "z-50",
          "h-[60px]",
          "max-w-6xl mx-auto"
        )}
      >
        <Logo />
        <DesktopNav navList={navList} />
        <div className="flex sm:hidden items-center space-x-1">
          <GithubIcon />
          <MenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>
      <MobileNav isOpen={isMenuOpen} navList={navList} />
    </div>
  );
}

export default Header;
