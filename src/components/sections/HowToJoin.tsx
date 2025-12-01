const HowToJoin = () => {
  const steps = [
    {
      title: "Номинация",
      description: "Кто-то из участников вас номинирует. Мы не рекламируем кэмп, поэтому, если вы это читаете, наверное вас кто-то номинировал."
    },
    {
      title: "Интервью",
      description: "Мы пытаемся почувствовать, каким вы будете на кэмпе и что интересного вы с собой принесете. А вы пытаетесь понять не секта ли мы."
    },
    {
      title: "Решение",
      description: "мучаемся и спорим неделю, прежде чем решить. Отбор это не формальность, тот кто вас номинировал не может повлиять на решение."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Как попасть
          </span>
          <blockquote className="text-2xl md:text-3xl font-display italic">
            «Интервью само по себе прикольное. Меня именно интервью вдохновило ехать»
            <footer className="text-base mt-4 not-italic font-mono text-muted-foreground">
              — Оля Силина
            </footer>
          </blockquote>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Как проходит отбор:</h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <span className="font-mono text-2xl font-bold text-highlight">{index + 1}</span>
                <div>
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why interview */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Зачем интервью:</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Мы боимся. Боимся пустить людей, которые не умеют слушать или превращают любой разговор 
              в презентацию своих достижений. Боимся тех, кто разрушит то хрупкое доверие, которое мы пытаемся создать.
            </p>
            <p>
              Интервью — попытка понять: сможете ли вы искренне говорить о том, что вас беспокоит и интересны ли вам 
              такие люди как мы?
            </p>
            <p>
              А еще мы хотим чтобы встретились люди, которые друг друга в чем-нибудь усилят. Мы пытаемся разглядеть 
              в вас вашу фишку. Именно по этому мы не берем всех.
            </p>
          </div>
        </div>

        {/* What happens */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Что происходит на интервью:</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Мы предлагаем вам ситуацию, и смотрим на то, как вы рассуждаете, какие аргументы вам кажутся важными. 
              Мы пытаемся вытащить наружу то, что делает вас интересным, увлечься вами.
            </p>
            <p>
              Честно сказать, мы просто хотим понять что вокруг вас будет происходить на кэмпе. И понравится ли это вам, и нам.
            </p>
          </div>
          <div className="border-l-2 border-highlight pl-6 text-sm">
            <p className="font-bold mb-2">Темы которые мы предлагали раньше:</p>
            <p className="italic text-muted-foreground">
              представьте, что пришел к вам волшебник и говорит: "Я могу сделать так, чтобы ты не умирал. 
              Что вы про это думаете? Согласились ли бы вы? А другие люди согласятся или нет, как вы думаете?"
            </p>
            <p className="text-xs mt-3 text-muted-foreground">
              (Это просто пример, такого вопроса не будет на собеседовании)
            </p>
          </div>
        </div>

        {/* Stress warning */}
        <div className="border-l-2 border-destructive pl-6 space-y-3">
          <h4 className="font-bold">Про стресс интервью</h4>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>
              Да, это волнительно. Мы стараемся создать безопасную атмосферу, но час — это мало, чтобы понять человека.
            </p>
            <p>
              Интервью не идеально. Иногда мы ошибаемся и отказываем тому, кого стоило взять. Но это лучшее из того 
              что мы придумали, чтобы кэмп был классный.
            </p>
            <p>
              Если вам кажется, что интервью прошло неудачно и вам не удалось раскрыться мы готовы еще раз 
              проинтервьюировать на следующий кэмп.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
