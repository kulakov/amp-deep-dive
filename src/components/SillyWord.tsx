import { useState, useCallback, useRef, useEffect } from "react";

interface SillyWordProps {
  children: string;
  onCycleComplete?: () => void;
}

const SILLY_FONTS = [
  "font-silly-1 text-[1.4em]",   // Comforter Brush - artistic
  "font-silly-2 text-[0.85em]",  // Dela Gothic One - geometric
  "font-silly-3 text-[0.6em]",   // Press Start 2P - pixel (larger for readability)
];

const SillyWord = ({ children, onCycleComplete }: SillyWordProps) => {
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
    
    // Если уже на последнем шрифте — показываем сообщение
    if (fontIndex === SILLY_FONTS.length - 1) {
      onCycleComplete?.();
      return;
    }
    
    const isFast = fontIndex >= 0;
    
    setPhase("shake");
    
    setTimeout(() => {
      setPhase("bounce");
    }, isFast ? 400 : 700);
    
    setTimeout(() => {
      setFontIndex((prev) => prev + 1);
      setPhase("return");
    }, isFast ? 800 : 1400);
    
    setTimeout(() => {
      setPhase("silly");
    }, isFast ? 1300 : 2200);
  }, [phase, fontIndex, onCycleComplete]);

  const getAnimationClass = () => {
    const fontClass = fontIndex >= 0 ? SILLY_FONTS[fontIndex] : "";
    const speedClass = fontIndex >= 0 ? "[animation-duration:0.4s]" : "";
    
    switch (phase) {
      case "shake":
        return `animate-silly-shake ${speedClass} ${fontIndex >= 0 ? fontClass : ""}`;
      case "bounce":
        return `animate-silly-bounce-away ${speedClass} ${fontIndex >= 0 ? fontClass : ""}`;
      case "return":
        return `animate-silly-return ${speedClass} ${fontClass}`;
      case "silly":
        return fontClass;
      default:
        return "";
    }
  };

  return (
    <span
      className="inline-flex justify-center items-baseline ml-[0.25em]"
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
