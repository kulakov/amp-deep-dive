const WorthIt = () => {
  const benefits = [
    {
      title: "Друзей",
      description: "Дружба — драгоценная редкость, которую сложно найти во взрослом возрасте. Не факт, что каждый найдет друзей с первого раза. Вряд ли вы один раз увиделись — и всё, друзья по гроб жизни. Но очень, очень многие из нас стали друзьями."
    },
    {
      title: "Пипл-бук",
      description: "база всех участников с их интересами, увлечениями и контактами. Хотите найти человека, который любит монгольский рок, работает арт-директором компьютерной игры и занимается LARP?"
    },
    {
      title: "Вписки",
      description: "можете договориться остановиться у участника почти в любом крупном европейском городе, но готовьтесь к разговорам до утра."
    },
    {
      title: "Чат(ы) и вообще разные формы общения",
      description: "место, где можно говорить непрошенных без советов и мотивационных речей. Кроме чатов у нас есть другие онлайн форматы: дискуссии, мастер-майнды и всякое, что мы переодически делаем, потому что кто-то упоролся."
    },
    {
      title: "Понимание",
      description: "что вы не единственный, кто ценит искреннее общение больше светского"
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
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-2xl font-bold mb-3">800 евро</p>
              <p className="text-muted-foreground text-sm">
                это реально дорого. Можно купить курс, съездить в отпуск или просто отложить. 
                Мы знаем, что цена отсекает людей с интересными историями, но без денег. 
                Кэмп делается без прибыли, и мы не знаем, как его сделать дешевле.
              </p>
            </div>
            <div className="bg-highlight/10 p-6">
              <p className="text-2xl font-bold mb-3">800 евро</p>
              <p className="text-sm">
                это капец как дешево. Почти в три раза дешевле аналогичных коммерческих мероприятий, 
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

        {/* Community benefits */}
        <div className="space-y-8">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Что дает сообщество:</h3>
          <p className="text-muted-foreground text-sm">
            Сообщество — это все кто когда-то был на кэмпе.
          </p>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-b border-border pb-4">
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning - code block style */}
        <div className="bg-muted p-6 font-mono text-sm space-y-3">
          <h4 className="font-bold">Последнее предупреждение</h4>
          <div className="space-y-2 text-muted-foreground">
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

        {/* How to join */}
        <div className="bg-highlight text-highlight-foreground p-8 space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Как попасть:</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-bold text-xl">1.</span>
              <p><span className="font-bold">Найти номинатора.</span> Если вы это читаете — у вас уже есть такой друг.</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-xl">2.</span>
              <p><span className="font-bold">Решиться на интервью.</span> Час искреннего разговора о том, что вас интересует</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-xl">3.</span>
              <p><span className="font-bold">Получить решение.</span> Мы помучаемся неделю или две, потом напишем</p>
            </div>
          </div>
          <div className="pt-6 border-t border-highlight-foreground/20">
            <p className="font-bold">Ближайший дедлайн</p>
            <p className="text-sm mt-1">
              дождаться когда мы объявим следующий. если вас номинировали, мы с вами свяжемся, у нас есть ваши контакты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorthIt;
