import GithubIcon from "./GithubIcon";
import { cn } from "@/utils/cn";
import { useState, useEffect, useCallback, memo } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

// 提取导航链接为常量
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Posts", path: "/posts" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 使用useCallback优化事件处理函数
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // 窗口大小变化监听
  useEffect(() => {
    const handleResize = () => {
      // 当窗口宽度大于 lg 断点 (1024px) 时关闭菜单
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // 初始检查
    handleResize();

    // 清理监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 添加滚动监听，用于改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // 初始检查
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-md backdrop-blur-sm border-slate-200/80"
          : "bg-gradient-to-r from-white via-slate-50 to-white"
      )}
    >
      <nav
        className={cn(
          "flex justify-between items-center",
          "h-16 px-4 md:px-6 py-4",
          "max-w-6xl mx-auto",
          "transition-all duration-300"
        )}
        aria-label="Main navigation"
      >
        <Logo />
        <DesktopNav navList={NAV_LINKS} />
        <div className="flex sm:hidden items-center space-x-1">
          <GithubIcon />
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>
      <MobileNav isOpen={isMenuOpen} navList={NAV_LINKS} />
    </header>
  );
}

export default memo(Header);
