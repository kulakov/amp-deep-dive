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
      <div className="max-w-3xl mx-auto space-y-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] bg-accent text-accent-foreground px-3 py-1.5 inline-block">
              Что здесь происходит
            </span>
            <blockquote className="text-2xl md:text-4xl font-display italic max-w-3xl">
              «Никогда не видел в одном месте столько нормальных людей»
              <footer className="text-base md:text-lg mt-4 not-italic font-mono text-muted-foreground">
                — Даня Рубинштейн
              </footer>
            </blockquote>
          </div>

          {/* Photo Grid - Scattered polaroid style */}
          <div ref={galleryRef} className="relative h-[650px] md:h-[750px] my-8">
            {[
              { img: campWorkshop, rotate: "-6deg", top: "2%", left: "0%", size: "w-28 md:w-40", z: 1 },
              { img: campHug, rotate: "4deg", top: "8%", left: "28%", size: "w-40 md:w-56", z: 3 },
              { img: campHandsUp, rotate: "-3deg", top: "0%", right: "2%", size: "w-44 md:w-64", z: 2 },
              { img: campAtmosphere, rotate: "8deg", top: "5%", left: "58%", size: "w-24 md:w-32", z: 1 },
              { img: campConnection, rotate: "7deg", top: "35%", left: "2%", size: "w-32 md:w-44", z: 4 },
              { img: campEnergy, rotate: "-5deg", top: "32%", left: "32%", size: "w-36 md:w-48", z: 5 },
              { img: campConversation, rotate: "2deg", top: "38%", right: "5%", size: "w-40 md:w-52", z: 3 },
              { img: campTalk, rotate: "-8deg", top: "62%", left: "8%", size: "w-36 md:w-48", z: 2 },
              { img: campSocializing, rotate: "5deg", top: "65%", left: "45%", size: "w-28 md:w-36", z: 4 },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`absolute ${item.size} bg-white p-2 shadow-xl transition-all duration-500 cursor-pointer ${
                  visiblePhotos.includes(i) 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                } hover:scale-150 hover:z-50 hover:shadow-2xl`}
                style={{ 
                  transform: `rotate(${item.rotate})${visiblePhotos.includes(i) ? "" : " translateY(2rem)"}`,
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  zIndex: item.z,
                  transitionDelay: visiblePhotos.includes(i) ? "0ms" : `${i * 100}ms`,
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.img} 
                    alt="" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="h-6 md:h-8" />
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl max-w-3xl font-body leading-relaxed">
            Мы собираем в одном месте людей, которым точно захочется искренне и глубоко пообщаться. 
            Искать таких сложно. Вы можете делать это сами, но на это вечно не хватает времени. 
            А еще не понятно где их брать. Поэтому их надо собрать их в кучу. Вот мы и собрали.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display">Что это такое</h3>
            <div className="space-y-4 text-lg font-body leading-relaxed">
              <p>
                AmpCamp — это место, где <strong>CTO</strong> может обнаружить, 
                что его <strong>тревога про будущее</strong> точно такая же, 
                как у <strong>учителя литературы</strong>, хотя внешне их жизни не похожи.
              </p>
              <p>
                Три дня, когда твоя должность в LinkedIn не имеет значения, потому что все говорят о том, 
                что их на самом деле волнует.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display">Мы НЕ конференция</h3>
            <p className="text-lg text-muted-foreground font-body">
              и у нас аллергия на банальность и неряшливое мышление.
            </p>
          </div>
        </div>

        {/* Comparison Table - Editorial */}
        <div className="border border-foreground">
          <div className="grid grid-cols-2">
            <div className="p-6 border-r border-b border-foreground bg-muted">
              <span className="font-mono text-xs uppercase tracking-wider">Другие ивенты</span>
            </div>
            <div className="p-6 border-b border-foreground bg-primary text-primary-foreground">
              <span className="font-mono text-xs uppercase tracking-wider">AmpCamp</span>
            </div>
          </div>
          {[
            ["Рассказываешь о достижениях", "Признаешься в сомнениях"],
            ["Произвести впечатление", "Снимаешь маску"],
            ["Показываешь, какой ты крутой", "Открываешь, кто ты по-настоящему"],
            ["Демонстрируешь, чем ты полезен", "Кто ты вне работы"],
            ["Нетворкинг для бизнеса", "Споры про анархизм и темное просвещение"],
          ].map(([left, right], i) => (
            <div key={i} className="grid grid-cols-2">
              <div className={`p-6 border-r border-foreground ${i < 4 ? 'border-b' : ''} text-muted-foreground`}>
                {left}
              </div>
              <div className={`p-6 font-medium ${i < 4 ? 'border-b border-foreground' : ''}`}>
                {right}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <p className="text-xl md:text-2xl font-display max-w-3xl">
            Да, у нас есть программа. В ней много всего очень разного и интересного. 
            Каждый раз она совершенно другая, у нее нет другой рамки кроме «это будет интересно».
          </p>

          <div className="space-y-8">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em]">
              Например, были такие активности:
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-base font-body">
              {[
                { tag: "интеллектуальные", items: "дискуссия про теорему Гёделя; семинар про то, что такое ответственность; дискуссия про психологию морали; доклад про гравюры Дюрера" },
                { tag: "телесные", items: "йога-зарядка, мастер-класс по джиу-джитсу, турнир по водному поло, рейв в бассейне" },
                { tag: "эмоциональные", items: "мастер-класс по комплиментам, ASMR-сессия, рассказ про школу приемных родителей, семинар по написанию завещаний, cuddle-party" },
                { tag: "творческие", items: "мастер-класс по stop motion анимации, фотография на консервную банку, музыкальный джем, пение хасидских нигунов" },
                { tag: "игры и баловство", items: "комедийная импровизация, турнир по «шляпе», стратегическая игра в ООН, сеанс аукционной магии, художественный LARP" },
              ].map((cat) => (
                <div key={cat.tag}>
                  <span className="font-mono text-xs uppercase tracking-wider bg-accent text-accent-foreground px-2 py-1 inline-block mb-3">
                    #{cat.tag}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{cat.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-4 border-foreground pl-8 py-4">
          <h4 className="text-2xl font-display mb-6">Это подходит не всем.</h4>
          <div className="space-y-4 text-lg font-body text-muted-foreground">
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
