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
    <section className="py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto space-y-20">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Стоит ли мне туда ехать?</h2>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold">Про деньги</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 border-2 border-primary">
              <p className="text-lg">
                <span className="text-3xl font-black block mb-4">800 евро</span>
                это реально дорого. Можно купить курс, съездить в отпуск или просто отложить. 
                Мы знаем, что цена отсекает людей с интересными историями, но без денег. 
                Кэмп делается без прибыли, и мы не знаем, как его сделать дешевле.
              </p>
            </div>
            <div className="p-8 bg-highlight text-highlight-foreground border-2 border-highlight">
              <p className="text-lg">
                <span className="text-3xl font-black block mb-4">800 евро</span>
                это капец как дешево. Почти в три раза дешевле аналогичных коммерческих мероприятий, 
                потому что организаторы работают бесплатно. И вы получите офигеть как много за эти деньги.
              </p>
            </div>
          </div>

          <div className="p-6 bg-muted border-l-4 border-primary">
            <p className="text-lg">
              <span className="font-bold">Кстати.</span> Мы не обещаем вам супер-лакшери условий. 
              Будет комфортно. Будет интересно. Мы будем друг о друге заботиться. Но нет, это не пятизвездочный сервис. 
              Это вообще не сервис. Это волонтерский лагерь.
            </p>
          </div>
        </div>

        <div className="p-8 bg-primary text-primary-foreground">
          <h4 className="text-2xl font-bold mb-4">История про кэмп с юртами:</h4>
          <p className="text-lg leading-relaxed italic">
            «Звезд непривычное количество, как в Ташкенте в горах. Избушка с диджеями, задушевно топчется. 
            В двадцати шагах костер, вокруг люди с гитарами, задушевно поется. И не надо выбирать! 
            Наговорились про страх, сон, смерть, стейк, секс и синхронистичность. Почему я не устала, не понимаю. 
            Возможно, я вовсе не от того устаю, надо проверить гипотезы.»
          </p>
          <footer className="mt-4 text-base">— Саша Гартман</footer>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold">Что дает сообщество (реально):</h3>
          <p className="text-lg text-muted-foreground">
            Сообщество — это все кто когда-то был на кэмпе.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 border-2 border-primary hover:bg-muted transition-colors">
                <h4 className="text-2xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 border-2 border-destructive bg-destructive/5">
          <h4 className="text-2xl font-bold mb-4">⚠️ Последнее предупреждение</h4>
          <div className="space-y-3 text-lg">
            <p>
              Не все получают то, что ожидают. Кто-то едет за связями и злится, что люди говорят о чувствах. 
              Кто-то ждет решения проблем и обнаруживает, что мы не умеем их решать.
            </p>
            <p className="font-bold">
              Мы не знаем, что вам нужно. Знаем только, как создать место, где можно перестать притворяться. 
              Дальше — ваша ответственность.
            </p>
          </div>
        </div>

        <div className="space-y-8 bg-highlight text-highlight-foreground p-12 border-4 border-primary">
          <h3 className="text-2xl md:text-3xl font-display font-bold">Как попасть (если мы не смогли вас отговорить)</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black shrink-0">1.</span>
              <p className="pt-1">
                <span className="font-bold">Найти номинатора.</span> Если вы это читаете — у вас уже есть такой друг. 
                (Ставим галочку)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black shrink-0">2.</span>
              <p className="pt-1">
                <span className="font-bold">Решиться на интервью.</span> Час искреннего разговора о том, что вас интересует
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black shrink-0">3.</span>
              <p className="pt-1">
                <span className="font-bold">Получить решение.</span> Мы помучаемся неделю или две, потом напишем
              </p>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-primary">
            <p className="text-xl font-bold">Ближайший дедлайн</p>
            <p className="text-lg mt-2">
              дождаться когда мы объявим следующий. если вас номинировали, мы с вами свяжемся, у нас есть ваши контакты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorthIt;
