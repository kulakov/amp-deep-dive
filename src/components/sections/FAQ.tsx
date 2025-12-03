const FAQ = () => {
  const questions = [
    {
      q: "Точно ли вы не секта?",
      a: "Мы не знаем. У нас общие ценности, ритуалы, внутренние шутки. Но если это и секта, то очень плохо организованная."
    },
    {
      q: "А если я не впишусь?",
      a: "Случается. Будет неловко три дня, но не конец света. Но мы вам постараемся помочь, и в большинстве случаев у нас (вместе) получится."
    },
    {
      q: "Можно приехать просто посмотреть?",
      a: "Нет. Наблюдатели убивают искренность. Можно пройти отбор и приехать участвовать."
    },
    {
      q: "Гарантируете результат?",
      a: "Нет. Гарантируем только, что эти три дня запомнятся."
    }
  ];

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            FAQ
          </span>
          <p className="text-sm text-muted-foreground">(честные ответы)</p>
        </div>

        <div className="space-y-8">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-border pb-6">
              <h3 className="text-lg font-bold mb-3">{item.q}</h3>
              <p className="text-muted-foreground text-lg">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
