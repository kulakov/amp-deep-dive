import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight">
            AMP Camp
          </h1>
          <div className="space-y-4">
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
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-all duration-300 border-2 border-primary"
          >
            Узнать больше
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
