import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
import formatGoogleGame from "@/assets/format-google-game.jpg";
import formatFuckupNight from "@/assets/format-fuckup-night.jpg";
import formatKotovCircles from "@/assets/format-kotov-circles.jpg";
import formatDontKnow from "@/assets/format-dont-know.jpg";

const galleryPhotos = [
  { img: campWorkshop, caption: "вдохновляемся" },
  { img: campHug, caption: "обнимаемся" },
  { img: campHandsUp, caption: "включаемся" },
  { img: campAtmosphere, caption: "замечаем друг друга" },
  { img: campConnection, caption: "общаемся" },
  { img: campEnergy, caption: "двигаемся" },
  { img: campConversation, caption: "восхищаемся" },
  { img: campTalk, caption: "знакомимся" },
  { img: campSocializing, caption: "дружим" },
];

const WhatHappens = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryPhotos.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goNext, goPrev]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        galleryPhotos.forEach((_, index) => {
          setTimeout(() => {
            setVisiblePhotos(prev => [...prev, index]);
          }, index * 120);
        });
        observer.disconnect();
      }
    }, {
      threshold: 0.15
    });
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const desktopPositions = [
    { rotate: -6, top: "0%", left: "2%", size: "w-44", z: 1 },
    { rotate: 4, top: "5%", left: "18%", size: "w-48", z: 3 },
    { rotate: -3, top: "0%", left: "38%", size: "w-52", z: 2 },
    { rotate: 8, top: "3%", left: "58%", size: "w-40", z: 1 },
    { rotate: -4, top: "8%", left: "78%", size: "w-36", z: 2 },
    { rotate: 7, top: "32%", left: "0%", size: "w-44", z: 4 },
    { rotate: -5, top: "28%", left: "20%", size: "w-44", z: 5 },
    { rotate: 2, top: "35%", left: "42%", size: "w-40", z: 3 },
    { rotate: -8, top: "30%", left: "65%", size: "w-44", z: 4 },
  ];

  return (
    <section className="py-24 px-6 border-b border-callout-border bg-background relative z-10">
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
            А еще непонятно, где их брать. Поэтому их надо собрать их в кучу. Вот мы и собрали.
          </p>
        </div>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {galleryPhotos.map((item, i) => (
            <div 
              key={i} 
              className="w-32 flex-shrink-0 bg-white p-2 shadow-lg cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="aspect-square overflow-hidden">
                <img src={item.img} alt={item.caption} loading="lazy" className="w-full h-full object-cover" />
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
        {galleryPhotos.map((item, i) => {
          const pos = desktopPositions[i];
          const isVisible = visiblePhotos.includes(i);
          return (
            <div 
              key={i} 
              className={`absolute ${pos.size} bg-white p-2 shadow-xl cursor-pointer transition-all duration-300 ease-out group
                ${isVisible ? "opacity-100" : "opacity-0 translate-y-8"}`}
              style={{
                transform: `rotate(${pos.rotate}deg)`,
                top: pos.top,
                left: pos.left,
                zIndex: pos.z
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.5)`;
                e.currentTarget.style.zIndex = '100';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = `rotate(${pos.rotate}deg)`;
                e.currentTarget.style.zIndex = String(pos.z);
              }}
              onClick={() => openLightbox(i)}
            >
              <div className="aspect-square overflow-hidden">
                <img src={item.img} alt={item.caption} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X size={20} />
            </button>

            <img
              src={galleryPhotos[lightboxIndex].img}
              alt={galleryPhotos[lightboxIndex].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight size={48} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm">
            {lightboxIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}

      {/* Text content below gallery */}
      <div className="max-w-3xl mx-auto space-y-20">
        {/* What is it */}
        <div className="space-y-6">
          <p className="text-lg font-body leading-relaxed">
            AmpCamp — это место, где <strong>технический директор</strong> может обнаружить, 
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
          <div className="absolute inset-0 -z-10 overflow-hidden bg-highlight/10" style={{ transform: 'skewY(-2deg)' }} />
          
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-xl font-display italic">Мы НЕ конференция</p>
              <p className="text-muted-foreground">и у нас аллергия на банальность и неряшливое мышление</p>
            </div>

            {/* Comparison */}
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 pr-4">ДРУГИЕ КЛАССНЫЕ МЕРОПРИЯТИЯ</th>
                  <th className="text-left font-mono text-xs uppercase tracking-wider py-3"><span className="underline decoration-highlight decoration-2 underline-offset-4">AmpCamp</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">рассказываешь о достижениях</td>
                  <td className="font-medium py-3">признаешься в сомнениях</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">производишь впечатление</td>
                  <td className="font-medium py-3">снимаешь маску</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">показываешь, какой ты крутой</td>
                  <td className="font-medium py-3">открываешь, кто ты по-настоящему</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">демонстрируешь, чем ты полезен</td>
                  <td className="font-medium py-3">дурачишься и умничаешь</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <td className="text-muted-foreground py-3 pr-4">нетворкинг для бизнеса</td>
                  <td className="font-medium py-3">споры про анархию и темное просвещение</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Program */}
        <div className="space-y-8">
          <p className="text-xl font-display italic">
            Да, у нас есть программа. В ней много всего очень разного и интересного. 
            Каждый раз она совершенно другая, у нее нет другой рамки кроме «<span className="underline decoration-highlight decoration-2 underline-offset-4">это будет интересно</span>».
          </p>

          <div className="space-y-6">
            <p className="font-mono text-sm uppercase tracking-[0.2em]">
              Например, были такие активности:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { tag: "интеллектуальные", items: "дискуссия про теорему Гёделя, семинар про то, что такое ответственность, дискуссия про психологию морали, доклад про гравюры Дюрера" },
                { tag: "телесные", items: "йога-зарядка, мастер-класс по джиу-джитсу, турнир по водному поло, рейв в бассейне" },
                { tag: "эмоциональные", items: "мастер-класс по комплиментам, ASMR-сессия, рассказ про школу приемных родителей, семинар по написанию завещаний, cuddle-party" },
                { tag: "творческие", items: "мастер-класс по stop motion анимации, фотография на консервную банку, музыкальный джем, пение хасидских нигунов" },
                { tag: "игры и баловство", items: "комедийная импровизация, турнир по «шляпе», стратегическая игра в ООН, сеанс аукционной магии, художественный LARP" }
              ].map(cat => (
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
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12 py-8">
          {/* Pink skewed background */}
          <div className="absolute inset-x-0 -inset-y-4 bg-highlight/10 -z-10" style={{ transform: 'skewY(2deg)' }} />
          
          <div className="text-foreground">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] mb-8">Наши форматы:</h2>
            
            {/* Mobile horizontal scroll */}
            <div className="md:hidden overflow-x-auto overflow-y-visible -mx-6 px-6 -mb-4">
              <div className="flex gap-4 pb-8" style={{ width: 'max-content' }}>
                {[
                  { name: "Google game", desc: "Я буду называть тебе запрос, как в Google, про тебя — например, «ты и детские страхи», или «ты и закатное небо», а ты рассказываешь столько, сколько хочешь.", img: formatGoogleGame },
                  { name: "Я не знаю про тебя…", desc: "Я смотрю на тебя и перечисляю, что я о тебе не знаю: какая у тебя была любимая конфета в детстве, какую коленку ты разбивал чаще, что ты ел за завтраком, и понравилось ли тебе… Это способ показать тебе, что я вижу в тебе человека.", img: formatDontKnow },
                  { name: "Круги Котова", desc: "Это когда каждый участник получает напарника и вопрос, потом следующий вопрос и следующая пара. И так 10 вопросов с 10 разными людьми.", img: formatKotovCircles },
                  { name: "Fuck-up night", desc: "Тут просто все по очереди рассказывают о ситуации, когда они облажались.", img: formatFuckupNight }
                ].map((card, i) => (
                  <div key={i} className="w-[260px] flex-shrink-0 bg-background text-foreground shadow-xl">
                    <div className="h-32 overflow-hidden">
                      <img src={card.img} alt={card.name} loading="lazy" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="p-4">
                      <p className="font-bold text-sm mb-2">«{card.name}»</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop scattered cards */}
            <div className="hidden md:block relative h-[500px]">
              {[
                { name: "Google game", desc: "Я буду называть тебе запрос, как в Google, про тебя — например, «ты и детские страхи», или «ты и закатное небо», а ты рассказываешь столько, сколько хочешь.", rotate: -4, top: "0%", left: "0%", width: "w-72", z: 4, img: formatGoogleGame },
                { name: "Я не знаю про тебя…", desc: "Я смотрю на тебя и перечисляю, что я о тебе не знаю: какая у тебя была любимая конфета в детстве, какую коленку ты разбивал чаще, что ты ел за завтраком, и понравилось ли тебе… Это способ показать тебе, что я вижу в тебе человека.", rotate: 3, top: "0%", left: "38%", z: 3, width: "w-80", img: formatDontKnow },
                { name: "Круги Котова", desc: "Это когда каждый участник получает напарника и вопрос, потом следующий вопрос и следующая пара. И так 10 вопросов с 10 разными людьми.", rotate: -5, top: "45%", left: "15%", z: 2, width: "w-72", img: formatKotovCircles },
                { name: "Fuck-up night", desc: "Тут просто все по очереди рассказывают о ситуации, когда они облажались.", rotate: 4, top: "40%", left: "55%", z: 1, width: "w-64", img: formatFuckupNight }
              ].map((card) => (
                <div 
                  key={card.name}
                  className={`absolute ${card.width} bg-background text-foreground shadow-2xl cursor-pointer transition-all duration-300`}
                  style={{
                    transform: `rotate(${card.rotate}deg)`,
                    top: card.top,
                    left: card.left,
                    zIndex: card.z
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = `rotate(0deg) scale(1.08)`;
                    e.currentTarget.style.zIndex = '50';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = `rotate(${card.rotate}deg)`;
                    e.currentTarget.style.zIndex = String(card.z);
                  }}
                >
                  <div className="h-36 overflow-hidden">
                    <img src={card.img} alt={card.name} loading="lazy" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <p className="font-bold text-base mb-2">«{card.name}»</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display italic">
              Не кемпинг а сообщество
            </h2>
          </div>

          {/* Mobile carousel for "Что дает сообщество" */}
          <div className="md:hidden overflow-x-auto overflow-y-visible -mx-6 px-6 -mb-4">
            <div className="flex gap-4 pb-8" style={{ width: 'max-content' }}>
              {[
                { img: campWorkshop, title: "Знакомства", desc: "Одни пишут, что нашли на кемпинге будущих партнеров по бизнесу, другие — супруга." },
                { img: campHug, title: "Путешествия", desc: "Путешествуя по миру, люди заезжают друг к другу в гости. Эмигрируя, сразу находят своих." },
                { img: campHandsUp, title: "Взаимопомощь", desc: "Сообщество — это люди, которые готовы помогать друг другу." },
                { img: campConnection, title: "Теплота", desc: "Возможность разделить свои сомнения и переживания с теми, кто поймет." },
                { img: campEnergy, title: "Энергия", desc: "Когда вокруг тебя люди, которым не все равно — это вдохновляет." }
              ].map((card, i) => (
                <div key={i} className="w-64 flex-shrink-0 bg-white shadow-lg overflow-hidden">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img src={card.img} alt={card.title} loading="lazy" className="w-full h-full object-contain object-top" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop grid - clean minimal design */}
          <div className="hidden md:block">
            {/* Top row - 3 columns */}
            <div className="grid grid-cols-3 gap-x-12 gap-y-10 mb-10">
              {[
                { img: campWorkshop, title: "Знакомства", desc: "Одни пишут, что нашли на кемпинге будущих партнеров по бизнесу, другие — супруга." },
                { img: campHug, title: "Путешествия", desc: "Путешествуя по миру, люди заезжают друг к другу в гости. Эмигрируя, сразу находят своих." },
                { img: campHandsUp, title: "Взаимопомощь", desc: "Сообщество — это люди, которые готовы помогать друг другу." }
              ].map((card, i) => (
                <div key={i} className="space-y-4">
                  <div className="overflow-hidden">
                    <img src={card.img} alt={card.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom row - 2 columns centered */}
            <div className="grid grid-cols-3 gap-x-12">
              {[
                { img: campConnection, title: "Теплота", desc: "Возможность разделить свои сомнения и переживания с теми, кто поймет." },
                { img: campEnergy, title: "Энергия", desc: "Когда вокруг тебя люди, которым не все равно — это вдохновляет." }
              ].map((card, i) => (
                <div key={i} className="space-y-4">
                  <div className="overflow-hidden">
                    <img src={card.img} alt={card.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Relationships */}
        <div className="space-y-6">
          <p className="text-lg font-body leading-relaxed">
            Примерно <strong>пятнадцать пар</strong> познакомились на кемпинге, часть уже поженились. 
            Десятки людей нашли бизнес-партнеров, друзей или просто тех, с кем можно поговорить, когда тяжело.
          </p>
          
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={campConferenceBg} 
              alt="Конференция" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
