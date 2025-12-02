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
      viewBox="0 0 2231 248" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Base gradient - color fading to transparent at bottom */}
        <linearGradient id="paint_base_h" x1="1400" y1="85" x2="1400" y2="248" gradientUnits="userSpaceOnUse">
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
        <linearGradient id="wave_fade_mask_h" x1="0" y1="85" x2="0" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.7" stopColor="white" stopOpacity="0.3"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        
        <mask id="wave_mask_h">
          <rect x="1269" y="85" width="310" height="180" fill="url(#wave_fade_mask_h)"/>
        </mask>
        
        <clipPath id="flag-clip-h">
          <path d="M1330.16 247.467C1296.24 246.423 1269.06 218.598 1269.06 184.423V96.3525C1269.06 65.0974 1291.95 38.555 1322.86 33.9609L1505.73 6.78807C1508.72 6.34248 1511.75 6.11914 1514.78 6.11914C1548.82 6.11938 1576.41 33.7114 1576.41 67.7481V247.499H1524.28C1489.44 247.499 1492.31 219.259 1492.31 184.423V85.8076L1422.74 96.1455L1422.9 95.9346L1353.16 105.484L1360.56 133.154L1353.16 162.398H1481.8V247.499H1332.14C1331.81 247.499 1331.48 247.496 1331.15 247.49L1330.16 247.467Z"/>
        </clipPath>
      </defs>
      
      {/* C */}
      <path d="M1252.64 85.792L1059.93 124.641V163.398H1252.64V245.897H1252.88V247.499H1038.91C1004.07 247.499 975.832 219.259 975.832 184.423V107.431C975.832 77.3999 997.006 51.5323 1026.44 45.5977L1252.64 0V85.792Z" fill="currentColor"/>
      
      {/* A with flag effect */}
      <path d="M1514.78 6.11914C1548.82 6.11938 1576.41 33.7114 1576.41 67.7481V247.499H1524.28C1489.44 247.499 1492.31 219.259 1492.31 184.423V85.8076L1422.74 96.1455L1422.9 95.9346L1353.16 105.484L1360.56 133.154L1353.16 162.398H1481.8V247.499H1332.14C1331.81 247.499 1331.48 247.496 1331.15 247.49L1330.16 247.467C1296.24 246.423 1269.06 218.598 1269.06 184.423V96.3525C1269.06 65.0974 1291.95 38.555 1322.86 33.9609L1505.73 6.78807C1508.72 6.34248 1511.75 6.11914 1514.78 6.11914Z" fill="currentColor"/>
      
      {/* Flag overlay on A */}
      <path d="M1330.16 247.467C1296.24 246.423 1269.06 218.598 1269.06 184.423V96.3525C1269.06 65.0974 1291.95 38.555 1322.86 33.9609L1505.73 6.78807C1508.72 6.34248 1511.75 6.11914 1514.78 6.11914C1548.82 6.11938 1576.41 33.7114 1576.41 67.7481V247.499H1524.28C1489.44 247.499 1492.31 219.259 1492.31 184.423V85.8076L1422.74 96.1455L1422.9 95.9346L1353.16 105.484L1360.56 133.154L1353.16 162.398H1481.8V247.499H1332.14C1331.81 247.499 1331.48 247.496 1331.15 247.49L1330.16 247.467Z" fill="url(#paint_base_h)"/>
      
      {/* Animated wave overlay */}
      <g clipPath="url(#flag-clip-h)" mask="url(#wave_mask_h)">
        <rect x="1269" y="85" width="310" height="180" fill="url(#paint_wave_h)" className="animate-flag-wave"/>
      </g>
      
      {/* M */}
      <path d="M1883.31 5.70703C1915.41 5.70831 1941.43 31.7301 1941.43 63.8291V247.499H1857.33V117.485L1769.44 186.974L1681.54 117.487V247.495H1597.44V63.8291C1597.44 31.7295 1623.47 5.70715 1655.56 5.70703C1668.65 5.70706 1681.35 10.1216 1691.61 18.2353L1769.44 79.7637L1847.26 18.2344C1857.52 10.1202 1870.23 5.7066 1883.31 5.70703Z" fill="currentColor"/>
      
      {/* P */}
      <path d="M2167.84 16.2197C2202.68 16.2199 2230.92 44.4602 2230.92 79.2959V134.608C2230.92 165.38 2208.72 191.66 2178.38 196.799L2041.69 219.95V247.499H1957.59V202.187C1957.59 171.416 1979.8 145.135 2010.13 139.996L2146.82 116.844V100.321H1957.59V16.2197H2167.84Z" fill="currentColor"/>
      
      {/* A */}
      <path fillRule="evenodd" clipRule="evenodd" d="M245.932 5.38945C280.727 4.58742 309.277 32.7566 308.923 67.5594L307.82 185.961L307.841 247.528H225.75V206.483H82.252L82.0908 247.849L0 247.208L1.16309 84.5945C1.40723 53.1103 25.3643 26.8713 56.6982 23.7879L241.623 5.58964L243.166 5.45L244.689 5.40996L245.932 5.38945ZM83.1133 103.694L82.8926 144.915H226.171L226.611 85.0232L83.1133 103.694Z" fill="currentColor"/>
      
      {/* M */}
      <path d="M614.707 5.71074C646.806 5.71203 672.827 31.7336 672.827 63.8328V247.503H588.726V117.489L500.833 186.977L412.941 117.491V247.499H328.84V63.8328C328.84 31.733 354.862 5.71087 386.962 5.71074C400.045 5.71076 412.746 10.1252 423.009 18.2391L500.834 79.7674L578.658 18.2381C588.922 10.1239 601.623 5.71031 614.707 5.71074Z" fill="currentColor"/>
      
      {/* P */}
      <path d="M899.24 16.2225C934.076 16.2226 962.316 44.4629 962.316 79.2986V134.611C962.316 165.382 940.112 191.663 909.773 196.802L773.09 219.953V247.502H688.988V202.189C688.989 171.418 711.193 145.138 741.531 139.999L878.215 116.846V100.324H688.986V16.2225H899.24Z" fill="currentColor"/>
    </svg>
  );
};

export default LogoHorizontal;
