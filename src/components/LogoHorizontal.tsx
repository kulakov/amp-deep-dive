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
      viewBox="0 0 2500 260" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Base gradient - color fading to transparent at bottom */}
        <linearGradient id="paint_base_h" x1="1550" y1="80" x2="1550" y2="220" gradientUnits="userSpaceOnUse">
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
          <rect x="1400" y="40" width="300" height="200" fill="url(#wave_fade_mask_h)"/>
        </mask>
        
        <clipPath id="flag-clip-h">
          <path d="M1454.328 240.992C1454.984 241.012 1455.642 241.024 1456.303 241.024H1454.328V240.992Z"/>
          <path d="M1616.479 177.948C1616.479 212.784 1613.61 241.024 1648.446 241.024H1605.966V155.923H1477.329L1484.723 126.68L1477.329 99.01L1547.068 89.46L1546.904 89.671L1616.479 79.333V177.948Z"/>
        </clipPath>
      </defs>
      
      {/* AMP letters first (shifted left by 1px from original positions, starting at x~0) */}
      {/* A */}
      <path fillRule="evenodd" clipRule="evenodd" d="M245.702 0.0167121C280.498 -0.785318 309.048 27.3838 308.693 62.1866L307.591 180.588L307.611 242.155H225.521V201.11H82.022L81.861 242.477L-0.229 241.835L0.934 79.2218C1.178 47.7376 25.135 21.4986 56.469 18.4151L241.394 0.216907L242.937 0.077259L244.46 0.0372199L245.702 0.0167121ZM82.884 98.3214L82.663 139.542H225.941L226.382 79.6505L82.884 98.3214Z" fill="currentColor"/>
      {/* M */}
      <path d="M614.478 0.338001C646.577 0.339296 672.598 26.3609 672.598 58.4601V242.13H588.496V112.116L500.604 181.605L412.712 112.118V242.126H328.61V58.4601C328.611 26.3603 354.633 0.338133 386.732 0.338001C399.815 0.338018 412.516 4.75242 422.779 12.8663L500.604 74.3946L578.429 12.8653C588.692 4.75114 601.394 0.337577 614.478 0.338001Z" fill="currentColor"/>
      {/* P */}
      <path d="M899.01 10.8497C933.85 10.8499 962.09 39.0902 962.09 73.9259V129.238C962.09 160.009 939.88 186.29 909.54 191.429L772.86 214.58V242.129H688.759V196.817C688.759 166.046 710.96 139.765 741.3 134.626L877.99 111.474V94.9513H688.757V10.8497H899.01Z" fill="currentColor"/>
      
      {/* Flag base with vertical fade - for C letter */}
      <path d="M1454.328 240.992C1454.984 241.012 1455.642 241.024 1456.303 241.024H1454.328V240.992Z" fill="url(#paint_base_h)"/>
      <path d="M1616.479 177.948C1616.479 212.784 1613.61 241.024 1648.446 241.024H1605.966V155.923H1477.329L1484.723 126.68L1477.329 99.01L1547.068 89.46L1546.904 89.671L1616.479 79.333V177.948Z" fill="url(#paint_base_h)"/>
      
      {/* Animated wave overlay with fade mask */}
      <g clipPath="url(#flag-clip-h)" mask="url(#wave_mask_h)">
        <rect x="1400" y="40" width="300" height="200" fill="url(#paint_wave_h)" className="animate-flag-wave"/>
      </g>
      
      {/* CAMP letters (shifted right, starting after AMP at x~1100) */}
      {/* C */}
      <path d="M1376.81 79.318L1184.1 118.166V156.923H1376.81V239.423H1377.05V241.025H1163.08C1128.24 241.024 1100 212.784 1100 177.948V100.956C1100 70.925 1121.17 45.058 1150.61 39.123L1376.81 -6.475V79.318Z" fill="currentColor"/>
      {/* A */}
      <path d="M1638.95 -0.355C1672.99 -0.355 1700.58 27.237 1700.58 61.274V241.025H1648.45C1613.61 241.024 1616.48 212.784 1616.48 177.948V79.333L1546.9 89.671L1547.07 89.46L1477.33 99.01L1484.72 126.68L1477.33 155.923H1605.97V241.025H1456.3C1455.97 241.025 1455.64 241.021 1455.31 241.016L1454.33 240.992C1420.41 239.949 1393.23 212.123 1393.23 177.948V89.878C1393.23 58.623 1416.12 32.081 1447.03 27.486L1629.89 0.314C1632.89 -0.132 1635.92 -0.355 1638.95 -0.355Z" fill="currentColor"/>
      {/* M */}
      <path d="M2007.48 -0.767C2039.58 -0.766 2065.6 25.256 2065.6 57.355V241.025H1981.5V111.011L1893.6 180.499L1805.71 111.013V241.021H1721.61V57.355C1721.61 25.255 1747.63 -0.767 1779.73 -0.767C1792.82 -0.767 1805.52 3.647 1815.78 11.761L1893.6 73.289L1971.43 11.76C1981.69 3.646 1994.39 -0.768 2007.48 -0.767Z" fill="currentColor"/>
      {/* P */}
      <path d="M2292.01 9.745C2326.85 9.745 2355.09 37.986 2355.09 72.821V128.134C2355.09 158.905 2332.88 185.186 2302.54 190.324L2165.86 213.476V241.025H2081.76V195.712C2081.76 164.941 2103.96 138.661 2134.3 133.522L2270.99 110.369V93.847H2081.76V9.745H2292.01Z" fill="currentColor"/>
    </svg>
  );
};

export default LogoHorizontal;
