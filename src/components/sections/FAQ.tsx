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
    <section className="py-24 px-6 border-b border-foreground">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-primary text-primary-foreground px-3 py-1.5 inline-block">
            FAQ
          </span>
          <p className="text-lg text-muted-foreground font-body">(честные ответы)</p>
        </div>

        <div className="divide-y divide-foreground border-y border-foreground">
          {questions.map((item, index) => (
            <div key={index} className="py-8 grid md:grid-cols-2 gap-6">
              <h3 className="text-xl md:text-2xl font-display">{item.q}</h3>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
