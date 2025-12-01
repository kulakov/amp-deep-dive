import campHandsUp from "@/assets/camp-hands-up.jpg";
import doodleFriends from "@/assets/doodle-friends.png";
import doodleBook from "@/assets/doodle-book.png";
import doodleHouse from "@/assets/doodle-house.png";
import doodleChat from "@/assets/doodle-chat.png";
import doodleHeart from "@/assets/doodle-heart.png";

const WorthIt = () => {
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
          <div className="grid md:grid-cols-2 gap-8 items-baseline">
            <div>
              <p className="text-2xl font-bold mb-3">800 евро</p>
              <p className="text-muted-foreground text-sm">
                <span className="underline decoration-highlight decoration-2 underline-offset-4">это реально дорого</span>. Можно купить курс, съездить в отпуск или просто отложить. 
                Мы знаем, что цена отсекает людей с интересными историями, но без денег. 
                Кэмп делается без прибыли, и мы не знаем, как его сделать дешевле.
              </p>
            </div>
            <div className="bg-highlight/10 p-6">
              <p className="text-2xl font-bold mb-3">800 евро</p>
              <p className="text-sm">
                <span className="underline decoration-highlight decoration-2 underline-offset-4">это капец как дешево</span>. Почти в три раза дешевле аналогичных коммерческих мероприятий, 
                потому что организаторы работают бесплатно. И вы получите офигеть как много за эти деньги.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold">Кстати.</span> Мы не обещаем вам супер-лакшери условий. 
            Будет комфортно. Будет интересно. Мы будем друг о друге заботиться. Но нет, это не пятизвездочный сервис. 
            Это вообще не сервис. Это волонтерский лагерь.
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

      {/* Community benefits - with photo background */}
      <div className="relative -mx-6 md:-mx-0 my-16">
        {/* Background photo */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={campHandsUp} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Что дает сообщество
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Сообщество — это все кто когда-то был на кэмпе.
          </p>
          
          {/* Scattered cards */}
          <div className="relative h-[700px] md:h-[550px]">
            {benefits.map((benefit, i) => {
              const positions = [
                { top: "0%", left: "0%" },
                { top: "5%", left: "38%" },
                { top: "0%", left: "70%" },
                { top: "50%", left: "5%" },
                { top: "55%", left: "55%" },
              ];
              return (
                <div 
                  key={i}
                  className="absolute w-[280px] md:w-[300px] bg-background shadow-xl cursor-pointer transition-all duration-300 group"
                  style={{ 
                    transform: `rotate(${benefit.rotate}deg)`,
                    top: positions[i].top,
                    left: positions[i].left,
                    zIndex: i + 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1.1)';
                    e.currentTarget.style.zIndex = '100';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${benefit.rotate}deg)`;
                    e.currentTarget.style.zIndex = String(i + 1);
                  }}
                >
                  <div className="h-28 overflow-hidden bg-white">
                    <img 
                      src={benefit.img} 
                      alt={benefit.title}
                      className="w-full h-full object-cover"
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

      <div className="max-w-3xl mx-auto space-y-16">
        {/* Warning - code block style */}
        <div className="bg-callout border border-callout-border p-6 font-mono text-sm space-y-3">
          <h4 className="font-bold text-foreground">Последнее предупреждение</h4>
          <div className="space-y-2 text-callout-foreground">
            <p>
              Не все получают то, что ожидают. Кто-то едет за связями и злится, что люди говорят о чувствах. 
              Кто-то ждет решения проблем и обнаруживает, что мы не умеем их решать.
            </p>
            <p className="font-medium text-foreground">
              Мы не знаем, что вам нужно. Знаем только, как создать место, где можно перестать притворяться. 
              Дальше — ваша ответственность.
            </p>
          </div>
        </div>

        {/* How to join - CTA */}
        <div className="bg-highlight text-highlight-foreground p-10 md:p-16 space-y-8 -mx-6 md:mx-0">
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Как попасть
          </h2>
          <div className="space-y-6 text-lg">
            <div className="flex gap-4 items-start">
              <input type="checkbox" checked disabled className="mt-2 w-6 h-6 accent-highlight-foreground" />
              <p><span className="font-bold line-through opacity-60">Найти номинатора.</span> Если вы это читаете — у вас уже есть такой друг.</p>
            </div>
            <div className="flex gap-4 items-start">
              <input type="checkbox" disabled className="mt-2 w-6 h-6 accent-highlight-foreground" />
              <p><span className="font-bold">Решиться на интервью.</span> Час искреннего разговора о том, что вас интересует</p>
            </div>
            <div className="flex gap-4 items-start">
              <input type="checkbox" disabled className="mt-2 w-6 h-6 accent-highlight-foreground" />
              <p><span className="font-bold">Получить решение.</span> Мы помучаемся неделю или две, потом напишем</p>
            </div>
          </div>
          <div className="pt-8 border-t border-highlight-foreground/30 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-bold text-xl">Ближайший дедлайн</p>
              <p className="text-base mt-2 opacity-90">
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
