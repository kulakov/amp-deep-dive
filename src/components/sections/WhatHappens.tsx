import { useEffect, useRef, useState } from "react";
import campWorkshop from "@/assets/camp-workshop.jpg";
import campHug from "@/assets/camp-hug.jpg";
import campHandsUp from "@/assets/camp-hands-up.jpg";
import campConnection from "@/assets/camp-connection.jpg";
import campEnergy from "@/assets/camp-energy.jpg";
import campSocializing from "@/assets/camp-socializing.jpg";
import campAtmosphere from "@/assets/camp-atmosphere.jpg";
import campConversation from "@/assets/camp-conversation-1.jpg";
import campTalk from "@/assets/camp-talk.jpg";
import campConferenceBg from "@/assets/camp-conference-bg.jpg";

const WhatHappens = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the photo animations
          Array.from({ length: 9 }, (_, i) => i).forEach((index) => {
            setTimeout(() => {
              setVisiblePhotos((prev) => [...prev, index]);
            }, index * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-24 px-6 border-b border-foreground bg-background relative z-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Что здесь происходит
          </span>
          <blockquote className="text-xl md:text-2xl font-display italic max-w-2xl">
            «Никогда не видел в одном месте столько нормальных людей»
            <footer className="text-sm md:text-base mt-3 not-italic font-mono text-muted-foreground">
              — Даня Рубинштейн
            </footer>
          </blockquote>
          <p className="text-lg font-body leading-relaxed">
            Мы собираем в одном месте людей, которым точно захочется искренне и глубоко пообщаться. 
            Искать таких сложно. Вы можете делать это сами, но на это вечно не хватает времени. 
            А еще не понятно где их брать. Поэтому их надо собрать их в кучу. Вот мы и собрали.
          </p>
        </div>
      </div>

      {/* Photo Grid - Mobile: horizontal scroll, Desktop: scattered */}
      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {[
            { img: campWorkshop, caption: "вдохновляемся" },
            { img: campHug, caption: "обнимаемся" },
            { img: campHandsUp, caption: "включаемся" },
            { img: campAtmosphere, caption: "замечаем друг-друга" },
            { img: campConnection, caption: "общаемся" },
            { img: campEnergy, caption: "двигаемся" },
            { img: campConversation, caption: "восхищаемся" },
            { img: campTalk, caption: "знакомимся" },
            { img: campSocializing, caption: "дружим" },
          ].map((item, i) => (
            <div key={i} className="w-32 flex-shrink-0 bg-white p-2 shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-5 flex items-center justify-center">
                <span className="text-[8px] text-gray-600 font-mono">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop scattered gallery */}
      <div ref={galleryRef} className="hidden md:block relative h-[450px] max-w-6xl mx-auto">
        {[
          { img: campWorkshop, rotate: -6, top: "0%", left: "2%", size: "w-44", z: 1, caption: "вдохновляемся" },
          { img: campHug, rotate: 4, top: "5%", left: "18%", size: "w-48", z: 3, caption: "обнимаемся" },
          { img: campHandsUp, rotate: -3, top: "0%", left: "38%", size: "w-52", z: 2, caption: "включаемся" },
          { img: campAtmosphere, rotate: 8, top: "3%", left: "58%", size: "w-40", z: 1, caption: "замечаем друг-друга" },
          { img: campConnection, rotate: -4, top: "8%", left: "78%", size: "w-36", z: 2, caption: "общаемся" },
          { img: campEnergy, rotate: 7, top: "32%", left: "0%", size: "w-44", z: 4, caption: "двигаемся" },
          { img: campConversation, rotate: -5, top: "28%", left: "20%", size: "w-44", z: 5, caption: "восхищаемся" },
          { img: campTalk, rotate: 2, top: "35%", left: "42%", size: "w-40", z: 3, caption: "знакомимся" },
          { img: campSocializing, rotate: -8, top: "30%", left: "65%", size: "w-44", z: 4, caption: "дружим" },
        ].map((item, i) => {
          const isVisible = visiblePhotos.includes(i);
          return (
            <div 
              key={i} 
              className={`absolute ${item.size} bg-white p-2 shadow-xl cursor-pointer transition-all duration-300 ease-out group
                ${isVisible ? "opacity-100" : "opacity-0 translate-y-8"}`}
              style={{ 
                transform: `rotate(${item.rotate}deg)`,
                top: item.top,
                left: item.left,
                zIndex: item.z,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.5)`;
                e.currentTarget.style.zIndex = '100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${item.rotate}deg)`;
                e.currentTarget.style.zIndex = String(item.z);
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.caption} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="h-6 flex items-center justify-center">
                <span className="text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.caption}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Text content below gallery */}
      <div className="max-w-3xl mx-auto space-y-20">
        {/* What is it */}
        <div className="space-y-6">
          <p className="text-lg font-body leading-relaxed">
            AmpCamp — это место, где <strong>CTO</strong> может обнаружить, 
            что его <strong>тревога про будущее</strong> точно такая же, 
            как у <strong>учителя литературы</strong>, хотя внешне их жизни не похожи.
          </p>
          <p className="text-lg font-body leading-relaxed">
            Три дня, когда твоя должность в LinkedIn не имеет значения, потому что все говорят о том, 
            что их на самом деле волнует.
          </p>
        </div>

        {/* Not a conference - highlighted block */}
        <div id="not-conference" className="relative -mx-6 md:-mx-12 px-6 md:px-12 py-16 my-8">
          {/* Skewed container with pale background */}
          <div 
            className="absolute inset-0 -z-10 overflow-hidden bg-highlight/10"
            style={{ transform: 'skewY(-2deg)' }}
          />
          
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-xl font-display italic">Мы НЕ конференция</p>
              <p className="text-muted-foreground">и у нас аллергия на банальность и неряшливое мышление.</p>
            </div>

            {/* Comparison */}
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 pr-4">Другие классные ивенты</th>
                  <th className="text-left font-mono text-xs uppercase tracking-wider py-3"><span className="underline decoration-highlight decoration-2 underline-offset-4">AmpCamp</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">Рассказываешь о достижениях</td>
                  <td className="font-medium py-3">Признаешься в сомнениях</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">Произвести впечатление</td>
                  <td className="font-medium py-3">Снимаешь маску</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">Показываешь, какой ты крутой</td>
                  <td className="font-medium py-3">Открываешь, кто ты по-настоящему</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">Демонстрируешь, чем ты полезен</td>
                  <td className="font-medium py-3">Кто ты вне работы</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">Нетворкинг для бизнеса</td>
                  <td className="font-medium py-3">Споры про анархизм и темное просвещение</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Program */}
        <div className="space-y-8">
          <p className="text-xl font-display italic">
            Да, у нас есть программа. В ней много всего очень разного и интересного. 
            Каждый раз она совершенно другая, у нее нет другой рамки кроме «это будет интересно».
          </p>

          <div className="space-y-6">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em]">
              Например, были такие активности:
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { tag: "интеллектуальные", items: "дискуссия про теорему Гёделя; семинар про то, что такое ответственность; дискуссия про психологию морали; доклад про гравюры Дюрера" },
                { tag: "телесные", items: "йога-зарядка, мастер-класс по джиу-джитсу, турнир по водному поло, рейв в бассейне" },
                { tag: "эмоциональные", items: "мастер-класс по комплиментам, ASMR-сессия, рассказ про школу приемных родителей, семинар по написанию завещаний, cuddle-party" },
                { tag: "творческие", items: "мастер-класс по stop motion анимации, фотография на консервную банку, музыкальный джем, пение хасидских нигунов" },
                { tag: "игры и баловство", items: "комедийная импровизация, турнир по «шляпе», стратегическая игра в ООН, сеанс аукционной магии, художественный LARP" },
              ].map((cat) => (
                <div key={cat.tag}>
                  <span className="font-mono text-xs uppercase tracking-wider bg-highlight text-highlight-foreground px-2 py-1 inline-block mb-3">
                    #{cat.tag}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formats - mobile carousel, desktop scattered */}
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12 py-8 overflow-hidden">
          {/* Pink skewed background */}
          <div 
            className="absolute inset-0 bg-highlight/10 -z-10"
            style={{ transform: 'skewY(2deg)' }}
          />
          
          <div className="text-foreground">
            <h3 className="font-mono text-sm uppercase tracking-[0.2em] mb-8">Наши форматы:</h3>
            
            {/* Mobile horizontal scroll */}
            <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {[
                  { name: "Google game", desc: "я буду называть тебе запрос, как в Google, про тебя. Например «ты и детские страхи», или «ты и закатное небо», а ты рассказываешь, столько сколько хочешь.", img: campConversation },
                  { name: "Я не знаю про тебя…", desc: "я смотрю на тебя и перечисляю, что я о тебе не знаю: какая у тебя была любимая конфета в детстве, какую коленку ты разбивал чаще, что ты ел за завтраком и понравилось ли тебе… Это способ показать тебе, что я вижу в тебе человека", img: campSocializing },
                  { name: "Круги Котова", desc: "это когда каждый участник получает напарника и вопрос, потом следующий вопрос и следующая пара. И так 10 вопросов с 10 разными людьми", img: campWorkshop },
                  { name: "Fuck-up night", desc: "тут просто все по очереди рассказывают о ситуации, когда они облажались", img: campTalk },
                ].map((card, i) => (
                  <div 
                    key={i}
                    className="w-[260px] flex-shrink-0 bg-background text-foreground shadow-xl"
                  >
                    <div className="h-24 overflow-hidden">
                      <img 
                        src={card.img} 
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm mb-2">«{card.name}»</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop scattered cards */}
            <div className="hidden md:block relative h-[500px]">
              {[
                { name: "Google game", desc: "я буду называть тебе запрос, как в Google, про тебя. Например «ты и детские страхи», или «ты и закатное небо», а ты рассказываешь, столько сколько хочешь.", rotate: -4, top: "0%", left: "0%", width: "w-72", img: campConversation },
                { name: "Я не знаю про тебя…", desc: "я смотрю на тебя и перечисляю, что я о тебе не знаю: какая у тебя была любимая конфета в детстве, какую коленку ты разбивал чаще, что ты ел за завтраком и понравилось ли тебе… Это способ показать тебе, что я вижу в тебе человека", rotate: 3, top: "5%", left: "45%", width: "w-80", img: campSocializing },
                { name: "Круги Котова", desc: "это когда каждый участник получает напарника и вопрос, потом следующий вопрос и следующая пара. И так 10 вопросов с 10 разными людьми", rotate: -2, top: "48%", left: "5%", width: "w-64", img: campWorkshop },
                { name: "Fuck-up night", desc: "тут просто все по очереди рассказывают о ситуации, когда они облажались", rotate: 5, top: "58%", left: "50%", width: "w-60", img: campTalk },
              ].map((card, i) => (
                <div 
                  key={i}
                  className={`absolute ${card.width} bg-background text-foreground shadow-xl cursor-pointer transition-all duration-300 group`}
                  style={{ 
                    transform: `rotate(${card.rotate}deg)`,
                    top: card.top,
                    left: card.left,
                    zIndex: i + 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1.3)';
                    e.currentTarget.style.zIndex = '100';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${card.rotate}deg)`;
                    e.currentTarget.style.zIndex = String(i + 1);
                  }}
                >
                  <div className="h-20 overflow-hidden">
                    <img 
                      src={card.img} 
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2">«{card.name}»</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm italic text-foreground mt-4">
              У нас еще много, все разные и классные.
            </p>
          </div>
        </div>

        {/* Not for everyone - callout style */}
        <div className="bg-callout border border-callout-border p-6 font-mono text-sm space-y-3">
          <h4 className="font-bold text-foreground">Это подходит не всем.</h4>
          <div className="space-y-2 text-callout-foreground">
            <p>
              Если вы ждете только легких разговоров и полезных контактов — вам не зайдет. 
              Здесь люди делятся переживаниями и сомнениями.
            </p>
            <p>У нас не принято продавать и питчить. Мы не пытаемся вас чему-то научить.</p>
            <p>Это пространство где вы сами будете реализовывать то, что вам интересно.</p>
            <p className="font-medium text-foreground">
              Если вы участвуете ничего не вкладывая — скорее всего не получите отдачи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
