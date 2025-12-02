import { useThemeColor } from "@/contexts/ThemeColorContext";

type ColorTheme = "green" | "orange" | "fuchsia" | "purple" | "cobalt" | "yellow";

interface ColorWordProps {
  children: React.ReactNode;
  color: ColorTheme;
}

const ColorWord = ({ children, color }: ColorWordProps) => {
  const { setColor } = useThemeColor();

  return (
    <span
      onMouseEnter={() => setColor(color)}
      className="cursor-pointer transition-all duration-200 hover:underline hover:decoration-2 hover:underline-offset-4"
    >
      {children}
    </span>
  );
};

export default ColorWord;
