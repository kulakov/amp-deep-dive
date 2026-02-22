import { Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Контакты
          </span>
        </div>
        
        <a href="mailto:hello@amp.camp" className="inline-flex items-center gap-3 text-xl md:text-2xl font-mono hover:bg-highlight hover:text-highlight-foreground px-2 -mx-2 py-1 transition-colors">
          <Mail className="w-6 h-6" />
          hello@amp.camp
        </a>

        <div className="space-y-6 text-sm opacity-70">
          <p>
            Мы существуем с 2022 года и до сих пор удивляемся, что это работает. Возможно, в мире действительно не хватает мест, где взрослые люди могут признаться, что они растеряны.
          </p>
          <p className="font-mono text-xs">* От трех до пяти людей потратили сорок часов на обсуждение этой страницы. Это потому что нам нравится говорить о сложных вещах с приятными людьми.  Как и всё в этом сообществе, этот сайт — волонтёрский проект. Поэтому, конечно, была жаркая дискуссия, и с большинством утверждений кто-нибудь не согласен. 


        </p>
        </div>
      </div>
    </footer>;
};
export default Footer;