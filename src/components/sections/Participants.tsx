const Participants = () => {
  const participants = [
    {
      name: "Дима",
      description: "бывший диггер и автостопщик, выучился на историка-информатика и водит архитектурные экскурсии.",
      insight: "«Занимался всем подряд, но ничего не нравилось... А потом понял, что главное хобби жизни может стать фулл-тайм работой.»"
    },
    {
      name: "Аня",
      description: "интроверт, который по зову профессии притворяется экстравертом. Пересмотрела весь true crime и теперь читает протоколы судов.",
      insight: "«Работает как медитация — пока не начинаешь подозревать, что соседка, которая 'всегда держалась особняком', это ты.»"
    },
    {
      name: "Вика",
      description: "ненавидит зиму, но уже 12 лет руководит научными экспедициями в Арктике, потому, что это будущее климата и экологии.",
      insight: "«Когда ради сохранения моржей двигаешь судоходные пути и одновременно поддерживаешь маму с БАС, осознаёшь: жизнь может быть драматичнее любого сериала»."
    },
    {
      name: "Лев",
      description: "преподаёт и любит математику как инструмент тренировки критического мышления, а ещё ведет частную практику как гештальт-терапевт.",
      insight: "«После строгих формул я был поражён отсутствием четких доказательств и допущением противоречий в терапии. При этом терапия помогла мне, и я с ее помощью помогаю другим.»"
    },
    {
      name: "Миша",
      description: "руководил Яндекс.Навигатором, сейчас делает стартап про карты для яхт. Полгода назад исполнил давнюю мечту – начал играть на арфе.",
      insight: "«Думал, что на инструментах начинают с простого. На курсе оказался один среди 80-летних бабушек - похоже, они думали так же.»"
    },
    {
      name: "Диана",
      description: "юрист, переводит с языка законов на tech-язык и обратно. Изучает духи и ведёт блог о запахах.",
      insight: "«Чтобы не потерять контакт с реальностью, заземляюсь ароматами. Это удовольствие искусственный интеллект у нас не отберёт.»"
    },
    {
      name: "Дима",
      description: "Бросил алготрейдинг ради биотеха и учит второй концерт Рахманинова, потому что пальцы, привыкшие к клавиатуре, требуют более сложных движений.",
      insight: "«Осознал, что торговать акциями и выращивать клетки одинаково — нужно терпение и готовность к неудачам.»"
    },
    {
      name: "Федя",
      description: "Прочел весь LessWrong и может час рассказывать про байесовские сети, но выбирает, что поесть, подбрасывая монетку.",
      insight: "«Выяснил, что рациональность хорошо работает для больших решений и полностью бесполезна для мелких.»"
    },
    {
      name: "Оксана",
      description: "PhD по биологии, продюсер онлайн-курсов, живет на Ко Пхангане и работает с российскими студентами в режиме +4 часа к московскому времени.",
      insight: "«Поняла, что пальмы за окном не делают дедлайны менее стрессовыми, зато помогают их переживать.»"
    }
  ];

  const stories = [
    {
      name: "История Макса",
      text: "Макс, дата-аналитик: «Когда получил приглашение, загуглил всех участников. У них TED talks, стартапы, книги. А я делаю отчеты в компании, о которой никто не слышал. Три дня думал, как вежливо отказаться.\nНа кэмпе основатель известного стартапа сказал: 'Я думал, ты какой-то гуру данных, а ты обычный парень'. Оказалось: чем успешнее человек выглядит снаружи, тем больше он уверен, что все вокруг умнее.»"
    },
    {
      name: "История Жени",
      text: "Женя, программистка: «Прячусь за работой, потому что не знаю, как быть интересной людям просто как человек. На корпоративах читаю техдокументацию в туалете. Первый день кэмпа делала вид, что у меня срочная задача.\nПодошел парень: 'Go пишешь? Что думаешь про новые генерики?' Час говорили про код, потом про книги, потом — почему нам обоим сложно с людьми. Поняла: можно быть интересной, не умея рассказывать анекдоты.»"
    }
  ];

  // Positions and colors for scattered cards
  const cardPositions = [
    { rotate: -3, top: "0%", left: "0%", hoverColor: "#FF3366" },
    { rotate: 2, top: "2%", left: "35%", hoverColor: "#00D4AA" },
    { rotate: -2, top: "0%", left: "68%", hoverColor: "#FFD000" },
    { rotate: 3, top: "28%", left: "5%", hoverColor: "#00CC88" },
    { rotate: -4, top: "30%", left: "38%", hoverColor: "#FF4466" },
    { rotate: 2, top: "27%", left: "70%", hoverColor: "#9966FF" },
    { rotate: -2, top: "56%", left: "0%", hoverColor: "#FF66AA" },
    { rotate: 4, top: "58%", left: "33%", hoverColor: "#00AAFF" },
    { rotate: -3, top: "55%", left: "66%", hoverColor: "#FFAA00" },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Кто приезжает
          </span>
          <blockquote className="text-2xl md:text-3xl font-display italic">
            «А такие как я участвуют?»
          </blockquote>
        </div>

        {/* Participants scattered gallery */}
        <div className="relative h-[1400px] md:h-[1100px]">
          {participants.map((person, i) => (
            <div 
              key={i}
              className="absolute w-[85%] md:w-[30%] bg-background border border-highlight p-6 shadow-lg cursor-pointer transition-all duration-300 group"
              style={{ 
                transform: `rotate(${cardPositions[i].rotate}deg)`,
                top: cardPositions[i].top,
                left: cardPositions[i].left,
                zIndex: i + 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                e.currentTarget.style.zIndex = '100';
                e.currentTarget.style.backgroundColor = cardPositions[i].hoverColor;
                e.currentTarget.style.borderColor = cardPositions[i].hoverColor;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${cardPositions[i].rotate}deg)`;
                e.currentTarget.style.zIndex = String(i + 1);
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.color = '';
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-highlight">{person.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{person.description}</p>
              <p className="text-sm italic leading-relaxed">{person.insight}</p>
            </div>
          ))}
        </div>

        {/* Stories */}
        <div className="max-w-3xl mx-auto space-y-12">
          {stories.map((story, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-mono text-sm uppercase tracking-wider">{story.name}</h3>
              <p className="text-lg font-body leading-relaxed whitespace-pre-line">{story.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participants;