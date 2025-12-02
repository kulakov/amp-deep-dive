import { useThemeColor } from "@/contexts/ThemeColorContext";

interface LogoProps {
  className?: string;
}

const colorHexValues: Record<string, string> = {
  green: "#6BBF2A",
  orange: "#FF8000",
  fuchsia: "#FF00FF",
  purple: "#9933FF",
  cobalt: "#1A8CFF",
  yellow: "#FFD500",
};

const Logo = ({ className }: LogoProps) => {
  const { currentColor } = useThemeColor();
  const flagColor = colorHexValues[currentColor];

  return (
    <svg 
      viewBox="0 0 1256 502" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
      {/* Base gradient - color fading to transparent at bottom */}
        <linearGradient id="paint_base" x1="451.387" y1="339" x2="451.387" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor={flagColor}/>
          <stop offset="0.5" stopColor={flagColor} stopOpacity="0.5"/>
          <stop offset="1" stopColor={flagColor} stopOpacity="0"/>
        </linearGradient>
        
        {/* Wave highlight gradient */}
        <linearGradient id="paint_wave" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="40%" stopColor="white" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
          <stop offset="60%" stopColor="white" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        
        {/* Mask for fading wave at bottom */}
        <linearGradient id="wave_fade_mask" x1="0" y1="339" x2="0" y2="501" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.7" stopColor="white" stopOpacity="0.3"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        
        <mask id="wave_mask">
          <rect x="300" y="300" width="300" height="250" fill="url(#wave_fade_mask)"/>
        </mask>
        
        <clipPath id="flag-clip">
          <path d="M354.328 500.992C354.984 501.012 355.642 501.024 356.303 501.024H354.328V500.992Z"/>
          <path d="M516.479 437.948C516.479 472.784 513.61 501.024 548.446 501.024H505.966V415.923H377.329L384.723 386.68L377.329 359.01L447.068 349.46L446.904 349.671L516.479 339.333V437.948Z"/>
        </clipPath>
      </defs>
      
      {/* Flag base with vertical fade */}
      <path d="M354.328 500.992C354.984 501.012 355.642 501.024 356.303 501.024H354.328V500.992Z" fill="url(#paint_base)"/>
      <path d="M516.479 437.948C516.479 472.784 513.61 501.024 548.446 501.024H505.966V415.923H377.329L384.723 386.68L377.329 359.01L447.068 349.46L446.904 349.671L516.479 339.333V437.948Z" fill="url(#paint_base)"/>
      
      {/* Animated wave overlay with fade mask */}
      <g clipPath="url(#flag-clip)" mask="url(#wave_mask)">
        <rect x="300" y="300" width="300" height="250" fill="url(#paint_wave)" className="animate-flag-wave"/>
      </g>
      
      <path d="M276.81 339.318L84.1025 378.166V416.923H276.81V499.423H277.051V501.025H63.0771C28.2415 501.024 0.000203943 472.784 0 437.948V360.956C6.45505e-05 330.925 21.1738 305.058 50.6123 299.123L276.81 253.525V339.318Z" fill="currentColor"/>
      <path d="M538.951 259.645C572.988 259.645 600.58 287.237 600.58 321.274V501.025H548.445C513.61 501.024 516.479 472.784 516.479 437.948V339.333L446.904 349.671L447.068 349.46L377.329 359.01L384.723 386.68L377.329 415.923H505.967V501.025H356.304C355.973 501.025 355.643 501.021 355.313 501.016L354.328 500.992C320.406 499.949 293.227 472.123 293.227 437.948V349.878C293.227 318.623 316.117 292.081 347.032 287.486L529.893 260.314C532.891 259.868 535.919 259.645 538.951 259.645Z" fill="currentColor"/>
      <path d="M907.478 259.233C939.577 259.234 965.597 285.256 965.598 317.355V501.025H881.496V371.011L793.604 440.499L705.712 371.013V501.021H621.61V317.355C621.611 285.255 647.633 259.233 679.732 259.233C692.815 259.233 705.516 263.647 715.779 271.761L793.604 333.289L871.429 271.76C881.692 263.646 894.394 259.232 907.478 259.233Z" fill="currentColor"/>
      <path d="M1192.01 269.745C1226.85 269.745 1255.09 297.986 1255.09 332.821V388.134C1255.09 418.905 1232.88 445.186 1202.54 450.324L1065.86 473.476V501.025H981.759V455.712C981.759 424.941 1003.96 398.661 1034.3 393.522L1170.99 370.369V353.847H981.757V269.745H1192.01Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M538.702 0.0167121C573.498 -0.785318 602.048 27.3838 601.693 62.1866L600.591 180.588L600.611 242.155H518.521V201.11H375.022L374.861 242.477L292.771 241.835L293.934 79.2218C294.178 47.7376 318.135 21.4986 349.469 18.4151L534.394 0.216907L535.937 0.077259L537.46 0.0372199L538.702 0.0167121ZM375.884 98.3214L375.663 139.542H518.941L519.382 79.6505L375.884 98.3214Z" fill="currentColor"/>
      <path d="M907.478 0.338001C939.577 0.339296 965.598 26.3609 965.598 58.4601V242.13H881.496V112.116L793.604 181.605L705.712 112.118V242.126H621.61V58.4601C621.611 26.3603 647.633 0.338133 679.732 0.338001C692.815 0.338018 705.516 4.75242 715.779 12.8663L793.604 74.3946L871.429 12.8653C881.692 4.75114 894.394 0.337577 907.478 0.338001Z" fill="currentColor"/>
      <path d="M1192.01 10.8497C1226.85 10.8499 1255.09 39.0902 1255.09 73.9259V129.238C1255.09 160.009 1232.88 186.29 1202.54 191.429L1065.86 214.58V242.129H981.759V196.817C981.759 166.046 1003.96 139.765 1034.3 134.626L1170.99 111.474V94.9513H981.757V10.8497H1192.01Z" fill="currentColor"/>
    </svg>
  );
};

export default Logo;
