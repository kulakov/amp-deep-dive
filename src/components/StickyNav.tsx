import { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoHorizontal from "@/components/LogoHorizontal";

const sections = [
  { id: "what-happens", label: "Не конференция" },
  { id: "safety", label: "Безопасность" },
  { id: "participants", label: "Кто приезжает" },
  { id: "how-to-join", label: "Как попасть" },
  { id: "worth-it", label: "Стоит ли" },
  { id: "faq", label: "FAQ" },
];

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Cache section offsets to avoid forced reflows
  const sectionOffsetsRef = useRef<Map<string, number>>(new Map());

  // Calculate section offsets once on mount and on resize
  useEffect(() => {
    const calculateOffsets = () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          sectionOffsetsRef.current.set(section.id, element.offsetTop);
        }
      });
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets, { passive: true });
    return () => window.removeEventListener("resize", calculateOffsets);
  }, []);

  // Intersection Observer for sticky state
  useEffect(() => {
    if (!placeholderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(placeholderRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll handler using cached offsets (no reflows)
  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 150;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const offset = sectionOffsetsRef.current.get(sections[i].id);
          if (offset !== undefined && offset <= scrollPosition) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Mobile Burger */}
      <div className="fixed top-2 right-1 z-50 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              className={`p-2 hover:opacity-70 transition-all ${
                isSticky ? "text-highlight" : "text-white"
              }`}
              aria-label="Открыть меню"
            >
              <MoreVertical className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-background">
            <nav className="flex flex-col gap-2 mt-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 text-left text-sm font-mono uppercase tracking-wider transition-colors ${
                    activeSection === section.id
                      ? "bg-highlight text-highlight-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div ref={placeholderRef} className="h-12 hidden md:block">
        <nav
          ref={navRef}
          className={`w-full z-[100] transition-all duration-200 ${
            isSticky 
              ? "fixed top-0 left-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10" 
              : "absolute"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-1 py-3">
              <div 
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isSticky ? "w-28 opacity-100 mr-4" : "w-0 opacity-0 mr-0"
                }`}
              >
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`block ${isSticky ? "animate-logo-bounce-in" : ""}`}
                  aria-label="Вернуться наверх"
                >
                  <LogoHorizontal className="h-3 text-highlight" />
                </button>
              </div>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? "bg-highlight text-highlight-foreground"
                      : isSticky 
                        ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default StickyNav;