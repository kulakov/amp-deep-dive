import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Контакты
          </span>
          
          <a 
            href="mailto:hello@amp.camp"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-display hover:text-accent transition-colors group"
          >
            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            hello@amp.camp
          </a>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 max-w-2xl">
          <p className="text-lg font-body leading-relaxed opacity-80">
            Мы существуем с 22 года и до сих пор удивляемся, что это работает. 
            Возможно, в мире действительно не хватает мест, где взрослые люди могут признаться, что они растеряны.
          </p>
        </div>

        <div className="pt-8 font-mono text-xs opacity-50 tracking-wide">
          <p>
            * От трех до пяти людей потратили сорок часов на обсуждение этой страницы. 
            Это потому что нам нравится говорить о сложных вещах с приятными людьми.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
