import { useThemeColor } from "@/contexts/ThemeColorContext";

interface LogoHorizontalProps {
  className?: string;
}

const colorHexValues: Record<string, string> = {
  black: "#000000",
  green: "#6BBF2A",
  orange: "#FF8000",
  fuchsia: "#FF00FF",
  purple: "#9933FF",
  cobalt: "#1A8CFF",
  yellow: "#FFD500",
};

const LogoHorizontal = ({ className }: LogoHorizontalProps) => {
  const { currentColor } = useThemeColor();
  const flagColor = colorHexValues[currentColor];

  return (
    <svg 
      viewBox="0 0 2400 260" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Base gradient - color fading to transparent at bottom */}
        <linearGradient id="paint_base_h" x1="451.387" y1="80" x2="451.387" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor={flagColor}/>
          <stop offset="0.5" stopColor={flagColor} stopOpacity="0.5"/>
          <stop offset="1" stopColor={flagColor} stopOpacity="0"/>
        </linearGradient>
        
        {/* Wave highlight gradient */}
        <linearGradient id="paint_wave_h" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="40%" stopColor="white" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
          <stop offset="60%" stopColor="white" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        
        {/* Mask for fading wave at bottom */}
        <linearGradient id="wave_fade_mask_h" x1="0" y1="80" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.7" stopColor="white" stopOpacity="0.3"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        
        <mask id="wave_mask_h">
          <rect x="300" y="40" width="300" height="200" fill="url(#wave_fade_mask_h)"/>
        </mask>
        
        <clipPath id="flag-clip-h">
          <path d="M354.328 240.992C354.984 241.012 355.642 241.024 356.303 241.024H354.328V240.992Z"/>
          <path d="M516.479 177.948C516.479 212.784 513.61 241.024 548.446 241.024H505.966V155.923H377.329L384.723 126.68L377.329 99.01L447.068 89.46L446.904 89.671L516.479 79.333V177.948Z"/>
        </clipPath>
      </defs>
      
      {/* Flag base with vertical fade - for C letter */}
      <path d="M354.328 240.992C354.984 241.012 355.642 241.024 356.303 241.024H354.328V240.992Z" fill="url(#paint_base_h)"/>
      <path d="M516.479 177.948C516.479 212.784 513.61 241.024 548.446 241.024H505.966V155.923H377.329L384.723 126.68L377.329 99.01L447.068 89.46L446.904 89.671L516.479 79.333V177.948Z" fill="url(#paint_base_h)"/>
      
      {/* Animated wave overlay with fade mask */}
      <g clipPath="url(#flag-clip-h)" mask="url(#wave_mask_h)">
        <rect x="300" y="40" width="300" height="200" fill="url(#paint_wave_h)" className="animate-flag-wave"/>
      </g>
      
      {/* CAMP letters - moved to start from x=0 */}
      {/* C */}
      <path d="M276.81 79.318L84.1025 118.166V156.923H276.81V239.423H277.051V241.025H63.0771C28.2415 241.024 0.000203943 212.784 0 177.948V100.956C6.45505e-05 70.925 21.1738 45.058 50.6123 39.123L276.81 -6.475V79.318Z" fill="currentColor"/>
      {/* A */}
      <path d="M538.951 -0.355C572.988 -0.355 600.58 27.237 600.58 61.274V241.025H548.445C513.61 241.024 516.479 212.784 516.479 177.948V79.333L446.904 89.671L447.068 89.46L377.329 99.01L384.723 126.68L377.329 155.923H505.967V241.025H356.304C355.973 241.025 355.643 241.021 355.313 241.016L354.328 240.992C320.406 239.949 293.227 212.123 293.227 177.948V89.878C293.227 58.623 316.117 32.081 347.032 27.486L529.893 0.314C532.891 -0.132 535.919 -0.355 538.951 -0.355Z" fill="currentColor"/>
      {/* M */}
      <path d="M907.478 -0.767C939.577 -0.766 965.597 25.256 965.598 57.355V241.025H881.496V111.011L793.604 180.499L705.712 111.013V241.021H621.61V57.355C621.611 25.255 647.633 -0.767 679.732 -0.767C692.815 -0.767 705.516 3.647 715.779 11.761L793.604 73.289L871.429 11.76C881.692 3.646 894.394 -0.768 907.478 -0.767Z" fill="currentColor"/>
      {/* P */}
      <path d="M1192.01 9.745C1226.85 9.745 1255.09 37.986 1255.09 72.821V128.134C1255.09 158.905 1232.88 185.186 1202.54 190.324L1065.86 213.476V241.025H981.759V195.712C981.759 164.941 1003.96 138.661 1034.3 133.522L1170.99 110.369V93.847H981.757V9.745H1192.01Z" fill="currentColor"/>
      
      {/* AMP letters - shifted right after CAMP */}
      {/* A (second) */}
      <path fillRule="evenodd" clipRule="evenodd" d="M1538.702 0.0167121C1573.498 -0.785318 1602.048 27.3838 1601.693 62.1866L1600.591 180.588L1600.611 242.155H1518.521V201.11H1375.022L1374.861 242.477L1292.771 241.835L1293.934 79.2218C1294.178 47.7376 1318.135 21.4986 1349.469 18.4151L1534.394 0.216907L1535.937 0.077259L1537.46 0.0372199L1538.702 0.0167121ZM1375.884 98.3214L1375.663 139.542H1518.941L1519.382 79.6505L1375.884 98.3214Z" fill="currentColor"/>
      {/* M (second) */}
      <path d="M1907.478 0.338001C1939.577 0.339296 1965.598 26.3609 1965.598 58.4601V242.13H1881.496V112.116L1793.604 181.605L1705.712 112.118V242.126H1621.61V58.4601C1621.611 26.3603 1647.633 0.338133 1679.732 0.338001C1692.815 0.338018 1705.516 4.75242 1715.779 12.8663L1793.604 74.3946L1871.429 12.8653C1881.692 4.75114 1894.394 0.337577 1907.478 0.338001Z" fill="currentColor"/>
      {/* P (second) */}
      <path d="M2192.01 10.8497C2226.85 10.8499 2255.09 39.0902 2255.09 73.9259V129.238C2255.09 160.009 2232.88 186.29 2202.54 191.429L2065.86 214.58V242.129H1981.759V196.817C1981.759 166.046 2003.96 139.765 2034.3 134.626L2170.99 111.474V94.9513H1981.757V10.8497H2192.01Z" fill="currentColor"/>
    </svg>
  );
};

export default LogoHorizontal;
