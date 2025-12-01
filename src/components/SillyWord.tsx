import { useState, useCallback, useRef, useEffect } from "react";

interface SillyWordProps {
  children: string;
}

const SILLY_FONTS = [
  "font-silly-1 text-[1.4em]",   // Caveat - рукописный
  "font-silly-2 text-[1.15em] italic", // Cormorant Garamond - элегантный
  "font-silly-3 text-[0.85em]", // Unbounded - геометричный
  "font-silly-4 text-[1em] italic",    // Lora - классический
  "font-silly-5 text-[1em] uppercase tracking-wide", // Oswald - узкий
  "font-silly-6 text-[1em] font-light tracking-widest", // Raleway - лёгкий
  "font-silly-7 text-[0.95em] font-black uppercase", // Montserrat - жирный
  "font-silly-8 text-[1em] font-medium", // Jost - геометричный
  "font-silly-9 text-[0.95em]", // Manrope - современный
  "font-silly-10 text-[0.9em]", // JetBrains Mono - код
];

const SillyWord = ({ children }: SillyWordProps) => {
  const [phase, setPhase] = useState<"idle" | "shake" | "bounce" | "return" | "silly">("idle");
  const [fontIndex, setFontIndex] = useState(-1);
  const [fixedWidth, setFixedWidth] = useState<number | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current && fixedWidth === null) {
      setFixedWidth(spanRef.current.offsetWidth);
    }
  }, [fixedWidth]);

  const handleHover = useCallback(() => {
    if (phase !== "idle" && phase !== "silly") return;
    
    setPhase("shake");
    
    setTimeout(() => {
      setPhase("bounce");
    }, 600);
    
    setTimeout(() => {
      setFontIndex((prev) => {
        if (prev >= SILLY_FONTS.length - 1) return -1;
        return prev + 1;
      });
      setPhase("return");
    }, 1400);
    
    setTimeout(() => {
      setPhase("silly");
    }, 2000);
  }, [phase]);

  const getAnimationClass = () => {
    const fontClass = fontIndex >= 0 ? SILLY_FONTS[fontIndex] : "";
    
    switch (phase) {
      case "shake":
        return `animate-silly-shake ${fontIndex >= 0 ? fontClass : ""}`;
      case "bounce":
        return `animate-silly-bounce-away ${fontIndex >= 0 ? fontClass : ""}`;
      case "return":
        return `animate-silly-return ${fontClass}`;
      case "silly":
        return fontClass;
      default:
        return "";
    }
  };

  return (
    <span
      className="inline-flex justify-center items-baseline"
      style={{ width: fixedWidth ? `${fixedWidth}px` : "auto" }}
    >
      <span
        ref={spanRef}
        className={`inline-block cursor-pointer transition-colors hover:text-highlight whitespace-nowrap ${getAnimationClass()}`}
        onMouseEnter={handleHover}
      >
        {children}
      </span>
    </span>
  );
};

export default SillyWord;
