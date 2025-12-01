import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import SillyWord from "@/components/SillyWord";
import heroImage from "@/assets/camp-hands-up.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScoldMessage, setShowScoldMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCycleComplete = () => {
    setShowScoldMessage(true);
  };

  return (
    <section className="min-h-screen relative border-b border-foreground overflow-hidden">
      {/* Hero Image - Full Background with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img 
          src={heroImage} 
          alt="AMP Camp атмосфера" 
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Overlay with slower parallax */}
      <div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
                Кемп для взрослых
              </span>
              <Logo className="w-full max-w-xl mx-auto h-auto text-white" />
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {showScoldMessage ? (
                <h1 className="text-5xl md:text-7xl font-silly-1 leading-relaxed text-highlight animate-silly-shake">
                  Хватит баловаться, листай уже!
                </h1>
              ) : (
                <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white">
                  Место, где умные взрослые разрешают себе {" "}<SillyWord onCycleComplete={handleCycleComplete}>дурачиться</SillyWord>
                </h1>
              )}
              <p className="text-lg md:text-xl text-white/80 font-body">
                Три дня и 65 человек, с которыми можно искренне говорить о важном
              </p>
            </div>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-highlight text-highlight-foreground font-mono text-sm uppercase tracking-wider hover:bg-highlight/80 transition-colors"
          >
            Узнать больше
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
