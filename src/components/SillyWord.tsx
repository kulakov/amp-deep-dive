import { useState, useCallback, useRef, useEffect } from "react";

interface SillyWordProps {
  children: string;
  onCycleComplete?: () => void;
}

const SILLY_FONTS = [
  "font-silly-2 text-[1.4em]",   // Comforter Brush - artistic
  "font-silly-3 text-[1.3em]",   // Bad Script - childlike
  "font-silly-4 text-[0.5em]",   // Press Start 2P - pixel
];

const SillyWord = ({ children, onCycleComplete }: SillyWordProps) => {
  const [phase, setPhase] = useState<"idle" | "shake" | "bounce" | "return" | "silly">("idle");
  const [fontIndex, setFontIndex] = useState(-1);
  const [cycleCompleted, setCycleCompleted] = useState(false);
  const [fixedWidth, setFixedWidth] = useState<number | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current && fixedWidth === null) {
      setFixedWidth(spanRef.current.offsetWidth);
    }
  }, [fixedWidth]);

  const handleHover = useCallback(() => {
    if (phase !== "idle" && phase !== "silly") return;
    
    // Если цикл завершен и пользователь наводит снова — вызываем колбэк
    if (cycleCompleted) {
      onCycleComplete?.();
      return;
    }
    
    const isFast = fontIndex >= 0;
    
    setPhase("shake");
    
    setTimeout(() => {
      setPhase("bounce");
    }, isFast ? 400 : 700);
    
    setTimeout(() => {
      setFontIndex((prev) => {
        const newIndex = prev + 1;
        // Если дошли до конца — помечаем цикл завершённым
        if (newIndex >= SILLY_FONTS.length) {
          setCycleCompleted(true);
          return prev; // Остаёмся на последнем шрифте
        }
        return newIndex;
      });
      setPhase("return");
    }, isFast ? 800 : 1400);
    
    setTimeout(() => {
      setPhase("silly");
    }, isFast ? 1300 : 2200);
  }, [phase, fontIndex, cycleCompleted, onCycleComplete]);

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
