import { useThemeColor } from "@/contexts/ThemeColorContext";

type ColorTheme = "green" | "orange" | "fuchsia" | "purple" | "cobalt";

interface ColorWordProps {
  children: React.ReactNode;
  color: ColorTheme;
}

const colorStyles: Record<ColorTheme, string> = {
  green: "hover:text-[hsl(80,61%,50%)]",
  orange: "hover:text-[hsl(25,95%,53%)]",
  fuchsia: "hover:text-[hsl(322,81%,43%)]",
  purple: "hover:text-[hsl(271,76%,53%)]",
  cobalt: "hover:text-[hsl(215,100%,50%)]",
};

const ColorWord = ({ children, color }: ColorWordProps) => {
  const { setColor } = useThemeColor();

  return (
    <span
      onMouseEnter={() => setColor(color)}
      className={`cursor-pointer transition-colors duration-200 ${colorStyles[color]}`}
    >
      {children}
    </span>
  );
};

export default ColorWord;
