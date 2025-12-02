import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ColorTheme = "green" | "orange" | "fuchsia" | "purple" | "cobalt" | "yellow";

interface ThemeColorContextType {
  currentColor: ColorTheme;
  hasSelected: boolean;
  setColor: (color: ColorTheme) => void;
  clearSelection: () => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

const colorValues: Record<ColorTheme, { highlight: string; highlightForeground: string }> = {
  green: { highlight: "90 80% 45%", highlightForeground: "0 0% 100%" },
  orange: { highlight: "30 100% 50%", highlightForeground: "0 0% 100%" },
  fuchsia: { highlight: "300 100% 50%", highlightForeground: "0 0% 100%" },
  purple: { highlight: "270 100% 60%", highlightForeground: "0 0% 100%" },
  cobalt: { highlight: "210 100% 55%", highlightForeground: "0 0% 100%" },
  yellow: { highlight: "50 100% 50%", highlightForeground: "0 0% 0%" },
};

export const ThemeColorProvider = ({ children }: { children: ReactNode }) => {
  const [currentColor, setCurrentColor] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem("theme-color");
    return (saved as ColorTheme) || "green";
  });
  const [hasSelected, setHasSelected] = useState(() => {
    return localStorage.getItem("theme-color") !== null;
  });

  const setColor = (color: ColorTheme) => {
    setCurrentColor(color);
    setHasSelected(true);
    localStorage.setItem("theme-color", color);
  };

  const clearSelection = () => {
    setHasSelected(false);
    localStorage.removeItem("theme-color");
  };

  useEffect(() => {
    const root = document.documentElement;
    const colors = colorValues[currentColor];
    root.style.setProperty("--highlight", colors.highlight);
    root.style.setProperty("--highlight-foreground", colors.highlightForeground);
  }, [currentColor]);

  return (
    <ThemeColorContext.Provider value={{ currentColor, hasSelected, setColor, clearSelection }}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error("useThemeColor must be used within ThemeColorProvider");
  }
  return context;
};
