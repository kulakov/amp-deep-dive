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

        <div className="space-y-5">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-card hover:bg-secondary/50 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{item.q}</h3>
              <p className="text-lg text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
