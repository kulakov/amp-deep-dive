import { useState, useCallback } from "react";

interface SillyWordProps {
  children: string;
}

const SillyWord = ({ children }: SillyWordProps) => {
  const [phase, setPhase] = useState<"idle" | "shake" | "bounce" | "return" | "silly">("idle");

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
      setPhase("return");
    }, 1400);
    
    // Phase 4: Settle in silly state
    setTimeout(() => {
      setPhase("silly");
    }, 2000);
  }, [phase]);

  const getAnimationClass = () => {
    switch (phase) {
      case "shake":
        return "animate-silly-shake";
      case "bounce":
        return "animate-silly-bounce-away";
      case "return":
        return "animate-silly-return font-silly text-[1.3em]";
      case "silly":
        return "font-silly text-[1.3em]";
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
