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
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-black">FAQ</h2>
          <p className="text-2xl text-muted-foreground">(честные ответы)</p>
        </div>

        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="border-2 border-primary p-8 hover:bg-muted transition-colors">
              <h3 className="text-2xl font-bold mb-4">{item.q}</h3>
              <p className="text-lg">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
