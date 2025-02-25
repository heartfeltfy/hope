import { useState, useEffect } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <footer className="py-6 text-center bg-gray-50">
      <div className="container mx-auto">
        <p className="text-gray-600 mb-2">每一个今天都是成就明天的起点</p>
        <p className="text-sm text-gray-500">
          © {formatDateTime(currentTime)} 让我们一起创造美好未来
        </p>
      </div>
    </footer>
  );
}

export default Footer;
