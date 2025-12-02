import { useEffect, useRef, useState } from "react";
import doodleFriends from "@/assets/doodle-friends-new.png";
import doodleBook from "@/assets/doodle-book-new.png";
import doodleHouse from "@/assets/doodle-map.png";
import doodleChat from "@/assets/doodle-chat-new.png";
import doodleHeart from "@/assets/doodle-heart-new.png";

const WorthIt = () => {
  const [checkVisible, setCheckVisible] = useState(false);
  const howToJoinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setCheckVisible(true), 500);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (howToJoinRef.current) {
      observer.observe(howToJoinRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Друзей",
      description: <><span className="underline decoration-highlight decoration-2 underline-offset-4">Дружба</span> — драгоценная редкость, которую сложно найти во взрослом возрасте. Не факт, что каждый найдет друзей с первого раза. Вряд ли вы один раз увиделись — и всё, друзья по гроб жизни. Но очень, очень многие из нас стали друзьями.</>,
      img: doodleFriends,
      rotate: -3
    },
    {
      title: "Пипл-бук",
      description: <><span className="underline decoration-highlight decoration-2 underline-offset-4">база всех участников</span> с их интересами, увлечениями и контактами. Хотите найти человека, который любит монгольский рок, работает арт-директором компьютерной игры и занимается LARP?</>,
      img: doodleBook,
      rotate: 2
    },
    {
      title: "Вписки",
      description: <>можете договориться остановиться у участника почти в любом крупном европейском городе, но готовьтесь к <span className="underline decoration-highlight decoration-2 underline-offset-4">разговорам до утра</span>.</>,
      img: doodleHouse,
      rotate: -2
    },
    {
      title: "Чат(ы) и вообще разные формы общения",
      description: <>место, где можно говорить без непрошенных советов и мотивационных речей. Кроме чатов у нас есть другие онлайн форматы: <span className="underline decoration-highlight decoration-2 underline-offset-4">дискуссии</span>, <span className="underline decoration-highlight decoration-2 underline-offset-4">мастер-майнды</span> и всякое, что мы переодически делаем, потому что кто-то упоролся.</>,
      img: doodleChat,
      rotate: 4
    },
    {
      title: "Понимание",
      description: <>что вы не единственный, кто ценит <span className="underline decoration-highlight decoration-2 underline-offset-4">искреннее общение</span> больше светского</>,
      img: doodleHeart,
      rotate: -1
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Стоит ли ехать
          </span>
        </div>

        {/* Money */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Про деньги:</h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-2xl font-bold">800 евро</p>
              <p className="text-muted-foreground text-sm">
                <span className="underline decoration-highlight decoration-2 underline-offset-4">это реально дорого</span>. Можно купить курс, съездить в отпуск или просто отложить. 
                Мы знаем, что цена отсекает людей с интересными историями, но без денег. 
                Кэмп делается без прибыли, и мы не знаем, как его сделать дешевле.
              </p>
            </div>
            <div className="bg-highlight/10 py-6 -mx-6 px-6 md:mx-0 md:px-6 space-y-3">
              <p className="text-2xl font-bold">800 евро</p>
              <p className="text-sm">
                <span className="underline decoration-highlight decoration-2 underline-offset-4">это капец как дешево</span>. Почти в три раза дешевле аналогичных коммерческих мероприятий, 
                потому что организаторы работают бесплатно. И вы получите офигеть как много за эти деньги.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold">Кстати.</span> Мы не обещаем вам супер-лакшери условий. 
            Будет комфортно. Будет интересно. Мы будем друг о друге заботиться. Но нет, это не пятизвездочный сервис.{" "}
            <span className="underline decoration-highlight decoration-2 underline-offset-4">Это вообще не сервис. Это волонтерский лагерь.</span>
          </p>
        </div>

        {/* Quote */}
        <div className="border-l-2 border-highlight pl-6">
          <p className="text-lg font-display italic leading-relaxed">
            «Звезд непривычное количество, как в Ташкенте в горах. Избушка с диджеями, задушевно топчется. 
            В двадцати шагах костер, вокруг люди с гитарами, задушевно поется. И не надо выбирать! 
            Наговорились про страх, сон, смерть, стейк, секс и синхронистичность.»
          </p>
          <footer className="mt-4 font-mono text-sm text-muted-foreground">— Саша Гартман</footer>
        </div>
      </div>

      {/* Community benefits */}
      <div id="community" className="bg-background my-8 md:my-16 -mx-6 md:mx-0">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-16 space-y-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Что дает сообщество
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Сообщество — это все кто когда-то был на кэмпе.
          </p>
          
          {/* Mobile horizontal scroll */}
          <div className="md:hidden overflow-x-auto overflow-y-visible -mx-6 px-6 -mb-4">
            <div className="flex gap-4 pb-8" style={{ width: 'max-content' }}>
              {benefits.map((benefit, i) => (
                <div 
                  key={i}
                  className="w-[260px] flex-shrink-0 bg-background shadow-xl"
                >
                  <div className="aspect-[2/1] overflow-hidden bg-white">
                    <img 
                      src={benefit.img} 
                      alt={benefit.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop scattered cards */}
          <div className="hidden md:block relative h-[550px]">
            {benefits.map((benefit, i) => {
              const positions = [
                { top: "0%", left: "0%", z: 3 },
                { top: "5%", left: "38%", z: 4 },
                { top: "0%", left: "70%", z: 5 },
                { top: "55%", left: "18%", z: 1 },
                { top: "55%", left: "65%", z: 2 },
              ];
              return (
                <div 
                  key={i}
                  className="absolute w-[300px] bg-background shadow-xl cursor-pointer transition-all duration-300 group"
                  style={{ 
                    transform: `rotate(${benefit.rotate}deg)`,
                    top: positions[i].top,
                    left: positions[i].left,
                    zIndex: positions[i].z,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1.1)';
                    e.currentTarget.style.zIndex = '100';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${benefit.rotate}deg)`;
                    e.currentTarget.style.zIndex = String(positions[i].z);
                  }}
                >
                <div className="aspect-[2/1] overflow-hidden bg-white">
                    <img 
                      src={benefit.img} 
                      alt={benefit.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How to join - CTA */}
      <div ref={howToJoinRef} className="relative -mx-6 md:-mx-12 my-8 overflow-hidden">
        {/* Skewed background */}
        <div className="absolute inset-0 bg-highlight/10" style={{
          transform: 'skewY(2deg) scale(1.1)'
        }} />
        
        <div className="relative z-10 px-6 md:px-12 py-16 space-y-12 text-foreground">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl font-display italic">Как попасть</p>
            
            <div className="space-y-6">
              {[
                {
                  title: <>Найти номинатора. <span className={`text-highlight inline-block transition-all duration-500 ${checkVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>✓</span></>,
                  desc: <>Если вы это читаете — <span className="underline decoration-highlight decoration-2 underline-offset-4">у вас уже есть такой друг.</span></>
                },
                {
                  title: "Решиться на интервью.",
                  desc: "Час искреннего разговора о том, что вас интересует"
                },
                {
                  title: "Получить решение.",
                  desc: "Мы помучаемся неделю или две, потом напишем"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <span className="font-mono text-2xl font-bold text-highlight">{index + 1}</span>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-l-2 border-highlight pl-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Ближайший дедлайн</p>
              <p className="text-muted-foreground">
                дождаться когда мы объявим следующий. если вас номинировали, мы с вами свяжемся, у нас есть ваши контакты
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorthIt;
