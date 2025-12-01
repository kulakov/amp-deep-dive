import { ArrowDown } from "lucide-react";
import Logo from "@/components/Logo";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Playful background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-8">
          <Logo className="w-full max-w-2xl mx-auto h-auto text-foreground" />
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl font-medium text-balance max-w-3xl mx-auto">
              Место, где умные взрослые разрешают себе дурачиться
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Три дня и 65 человек, с которыми можно искренне говорить о важном
            </p>
          </div>
        </div>

        <div className="pt-12">
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-bold text-lg rounded-full hover:scale-105 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
          >
            Узнать больше
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
