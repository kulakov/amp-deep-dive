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
            <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
              Что здесь происходит
            </span>
            <blockquote className="text-xl md:text-2xl font-display italic max-w-2xl">
              «Никогда не видел в одном месте столько нормальных людей»
              <footer className="text-sm md:text-base mt-3 not-italic font-mono text-muted-foreground">
                — Даня Рубинштейн
              </footer>
            </blockquote>
          </div>

          {/* Photo Grid - Scattered polaroid style */}
          <div ref={galleryRef} className="relative h-[450px] md:h-[500px]">
            {[
              { img: campWorkshop, rotate: -6, top: "0%", left: "5%", size: "w-28 md:w-36", z: 1, caption: "вдохновляемся" },
              { img: campHug, rotate: 4, top: "5%", left: "25%", size: "w-36 md:w-48", z: 3, caption: "обнимаемся" },
              { img: campHandsUp, rotate: -3, top: "2%", left: "50%", size: "w-40 md:w-52", z: 2, caption: "включаемся" },
              { img: campAtmosphere, rotate: 8, top: "8%", left: "75%", size: "w-24 md:w-32", z: 1, caption: "замечаем друг-друга" },
              { img: campConnection, rotate: 7, top: "30%", left: "0%", size: "w-32 md:w-40", z: 4, caption: "общаемся" },
              { img: campEnergy, rotate: -5, top: "28%", left: "22%", size: "w-34 md:w-44", z: 5, caption: "двигаемся" },
              { img: campConversation, rotate: 2, top: "32%", left: "48%", size: "w-36 md:w-46", z: 3, caption: "восхищаемся" },
              { img: campTalk, rotate: -8, top: "55%", left: "10%", size: "w-32 md:w-40", z: 2, caption: "знакомимся" },
              { img: campSocializing, rotate: 5, top: "58%", left: "38%", size: "w-28 md:w-36", z: 4, caption: "дружим" },
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
                  <div className="h-5 md:h-6 flex items-center justify-center">
                    <span className="text-[8px] md:text-[10px] text-gray-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {item.caption}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-lg font-body leading-relaxed">
            Мы собираем в одном месте людей, которым точно захочется искренне и глубоко пообщаться. 
            Искать таких сложно. Вы можете делать это сами, но на это вечно не хватает времени. 
            А еще не понятно где их брать. Поэтому их надо собрать их в кучу. Вот мы и собрали.
          </p>
        </div>

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

        {/* Not a conference */}
        <div className="space-y-4">
          <p className="text-xl font-display italic">Мы НЕ конференция</p>
          <p className="text-muted-foreground">и у нас аллергия на банальность и неряшливое мышление.</p>
        </div>

        {/* Comparison */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Другие ивенты</p>
              <div className="space-y-2 text-muted-foreground">
                <p>Рассказываешь о достижениях</p>
                <p>Произвести впечатление</p>
                <p>Показываешь, какой ты крутой</p>
                <p>Демонстрируешь, чем ты полезен</p>
                <p>Нетворкинг для бизнеса</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider mb-4">AmpCamp</p>
              <div className="space-y-2 font-medium">
                <p>Признаешься в сомнениях</p>
                <p>Снимаешь маску</p>
                <p>Открываешь, кто ты по-настоящему</p>
                <p>Кто ты вне работы</p>
                <p>Споры про анархизм и темное просвещение</p>
              </div>
            </div>
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

        {/* Not for everyone */}
        <div className="space-y-4 border-l-2 border-foreground pl-6">
          <p className="font-bold">Это подходит не всем.</p>
          <div className="space-y-3 text-muted-foreground text-sm">
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
