import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "what-happens", label: "Что происходит" },
  { id: "safety", label: "Безопасность" },
  { id: "participants", label: "Кто приезжает" },
  { id: "how-to-join", label: "Как попасть" },
  { id: "worth-it", label: "Стоит ли" },
  { id: "faq", label: "FAQ" },
];

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we should be sticky (past hero section)
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight - 100);

      // Find active section
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Placeholder when nav is sticky */}
      {isSticky && <div style={{ height: navHeight }} />}
      <nav
        ref={navRef}
        className={`w-full bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? "bg-highlight text-highlight-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default StickyNav;