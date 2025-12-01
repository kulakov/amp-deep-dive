import campConversation from "@/assets/camp-conversation-1.jpg";

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
    <section className="py-32 px-6 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img src={campConversation} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="max-w-3xl mx-auto space-y-20 text-white">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Как мне попасть на кэмп?</h2>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold">Как проходит отбор</h3>
          <blockquote className="text-xl italic border-l-4 border-highlight pl-6 text-white/70">
            Интервью само по себе прикольное. Меня именно интервью вдохновило ехать
            <footer className="mt-2 not-italic">© Оля Силина</footer>
          </blockquote>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-highlight text-highlight-foreground flex items-center justify-center text-3xl font-black">
                    {index + 1}
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <h4 className="text-2xl font-bold">{step.title}</h4>
                  <p className="text-lg text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold">Зачем интервью</h3>
          <div className="space-y-6 text-lg text-white/80">
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

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold">Что происходит на интервью</h3>
          <div className="space-y-6 text-lg text-white/80">
            <p>
              Мы предлагаем вам ситуацию, и смотрим на то, как вы рассуждаете, какие аргументы вам кажутся важными. 
              Мы пытаемся вытащить наружу то, что делает вас интересным, увлечься вами.
            </p>
            <p>
              Честно сказать, мы просто хотим понять что вокруг вас будет происходить на кэмпе. И понравится ли это вам, и нам.
            </p>
            <p>
              Например, мы не пытаемся найти селебрити, или самых харизматичных людей. Интервью — не оценка того, 
              хороший вы или плохой, а попытка почувствовать как вы впишетесь.
            </p>
            <div className="p-6 bg-white/10 border-l-4 border-highlight">
              <p className="font-bold mb-2 text-white">Темы которые мы предлагали раньше:</p>
              <p className="italic">
                представьте, что пришел к вам волшебник и говорит: "Я могу сделать так, чтобы ты не умирал. 
                Что вы про это думаете? Согласились ли бы вы? А другие люди согласятся или нет, как вы думаете?"
              </p>
              <p className="text-sm mt-4 text-white/60">
                (Это просто пример, такого вопроса не будет на собеседовании)
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 border-2 border-red-400 bg-red-500/20">
          <h4 className="text-2xl font-bold mb-4">⚠️ Про стресс интервью</h4>
          <div className="space-y-3 text-lg text-white/80">
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
