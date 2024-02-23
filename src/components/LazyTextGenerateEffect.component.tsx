import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { cn } from "../utils/cn";

const LazyTextGenerateEffect = lazy(
  () => import("./TextGenerateEffect.component")
);

export const LazyTextAnimation = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {isVisible && (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyTextGenerateEffect words={words} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};
