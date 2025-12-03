import { useThemeColor } from "@/contexts/ThemeColorContext";
import { useIsMobile } from "@/hooks/use-mobile";

type ColorTheme = "green" | "orange" | "fuchsia" | "purple" | "cobalt" | "yellow";

interface ColorWordProps {
  children: React.ReactNode;
  color: ColorTheme;
}

const ColorWord = ({ children, color }: ColorWordProps) => {
  const { setColor } = useThemeColor();
  const isMobile = useIsMobile();

  const handleInteraction = () => {
    setColor(color);
  };

  return (
    <span
      onMouseEnter={!isMobile ? handleInteraction : undefined}
      onClick={isMobile ? handleInteraction : undefined}
      className="cursor-pointer transition-all duration-200 hover:underline hover:decoration-2 hover:underline-offset-4"
    >
      {children}
    </span>
  );
};

export default ColorWord;
