import { useEffect, useRef } from "react";

export const useScrollSnap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      container.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    container.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return containerRef;
};
