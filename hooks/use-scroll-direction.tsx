import { useEffect, useState } from "react"

const useScrollDirection = () => {
  const [scrollInfo, setScrollInfo] = useState({
    direction: "up",
    isTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const direction = currentScrollY > lastScrollY ? "down" : "up";

      const isTop = currentScrollY === 0;

      setScrollInfo({
        direction,
        isTop
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollInfo;
}

export default useScrollDirection;