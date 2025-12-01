import { useState, useCallback, useRef, useEffect } from "react";

interface SillyWordProps {
  children: string;
}

const SILLY_FONTS = [
  "font-silly-2 text-[1.4em]",   // Comforter Brush - artistic
  "font-silly-3 text-[1.3em]",   // Bad Script - childlike
  "font-silly-4 text-[0.7em]",   // Tiny5 - pixel
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
    }, 700);
    
    setTimeout(() => {
      setFontIndex((prev) => {
        if (prev >= SILLY_FONTS.length - 1) return -1;
        return prev + 1;
      });
      setPhase("return");
    }, 1400);
    
    setTimeout(() => {
      setPhase("silly");
    }, 2200);
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
