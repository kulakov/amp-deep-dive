import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-primary text-primary-foreground rounded-t-[3rem]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">КОНТАКТЫ</h2>
          
          <a 
            href="mailto:hello@amp.camp"
            className="inline-flex items-center gap-3 text-2xl font-bold hover:text-accent transition-colors group bg-primary-foreground/10 px-6 py-4 rounded-full"
          >
            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            hello@amp.camp
          </a>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <p className="text-lg leading-relaxed opacity-90">
            Мы существуем с 22 года и до сих пор удивляемся, что это работает. 
            Возможно, в мире действительно не хватает мест, где взрослые люди могут признаться, что они растеряны.
          </p>
        </div>

        <div className="pt-12 text-sm opacity-70 italic">
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
