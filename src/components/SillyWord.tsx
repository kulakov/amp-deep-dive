import { useState, useCallback } from "react";

interface SillyWordProps {
  children: string;
}

const SILLY_FONTS = [
  "font-silly-1 text-[1.3em]",   // Caveat
  "font-silly-2 text-[1.1em]",   // Pacifico
  "font-silly-3 text-[1.1em]",   // Lobster
  "font-silly-4 text-[1em]",     // Comfortaa
  "font-silly-5 text-[0.85em]",  // Rubik Mono One
  "font-silly-6 text-[0.5em]",   // Press Start 2P (very wide)
  "font-silly-7 text-[1.15em]",  // Pangolin
  "font-silly-8 text-[1.3em]",   // Marck Script
  "font-silly-9 text-[1em]",     // Russo One
  "font-silly-10 text-[1.3em]",  // Bad Script
];

const SillyWord = ({ children }: SillyWordProps) => {
  const [phase, setPhase] = useState<"idle" | "shake" | "bounce" | "return" | "silly">("idle");
  const [fontIndex, setFontIndex] = useState(-1); // -1 means original font

  const handleHover = useCallback(() => {
    if (phase !== "idle" && phase !== "silly") return;
    
    // Phase 1: Shake
    setPhase("shake");
    
    // Phase 2: Bounce away after shake
    setTimeout(() => {
      setPhase("bounce");
    }, 600);
    
    // Phase 3: Return with new font
    setTimeout(() => {
      setFontIndex((prev) => {
        // Cycle through fonts, then back to original (-1)
        if (prev >= SILLY_FONTS.length - 1) return -1;
        return prev + 1;
      });
      setPhase("return");
    }, 1400);
    
    // Phase 4: Settle in silly state
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
      className={`inline-block cursor-pointer transition-colors hover:text-highlight ${getAnimationClass()}`}
      onMouseEnter={handleHover}
    >
      {children}
    </span>
  );
};

export default SillyWord;
