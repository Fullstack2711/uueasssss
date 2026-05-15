import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, as = "div", y = 24 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
      }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`}
    >
      {children}
    </Tag>
  );
}
