const SafetyRules = () => {
  const rules = [
    "Включаете голову",
    "Участвуете только в том, в чем хотите",
    "Несете ответственность за свои действия",
    "Есть психолог, с которым можно поговорить",
    "Опираемся на критическое мышление"
  ];

  const formats = [
    {
      name: "Google game",
      description: "я буду называть тебе запрос, как в Google, про тебя. Например «ты и детские страхи», или «ты и закатное небо», а ты рассказываешь, столько сколько хочешь."
    },
    {
      name: "Я не знаю про тебя…",
      description: "я смотрю на тебя и перечисляю, что я о тебе не знаю: какая у тебя была любимая конфета в детстве, какую коленку ты разбивал чаще, что ты ел за завтраком и понравилось ли тебе… Это способ показать тебе, что я вижу в тебе человека"
    },
    {
      name: "Круги Котова",
      description: "это когда каждый участник получает напарника и вопрос, потом следующий вопрос и следующая пара. И так 10 вопросов с 10 разными людьми"
    },
    {
      name: "Fuck-up night",
      description: "тут просто все по очереди рассказывают о ситуации, когда они облажались"
    }
  ];

  const notDoing = [
    "Не заставляем участвовать (можно не ходить на любое из мероприятий. можно уходить всегда когда не ок)",
    "Не продаем методики (это не бизнес)",
    "Не обещаем решить ваши проблемы (мы не психологи (почти все), и у нас тоже есть непрочитанные книжки по саморазвитию)"
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Техника безопасности
          </span>
        </div>

        {/* Rules */}
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-baseline gap-4">
              <span className="font-mono text-highlight font-bold">{index + 1}.</span>
              <p className="text-lg">{rule}</p>
            </div>
          ))}
        </div>

        {/* Intro text */}
        <div className="space-y-4 text-lg font-body leading-relaxed text-muted-foreground">
          <p>
            Мы не знаем наверняка, как это делать правильно. У нас нет формулы дружбы или секрета общения. 
            Мы просто собираем людей и создаем форматы, которые помогают начать разговаривать искренне.
          </p>
          <p>
            Мы не будем вам навязывать как общаться правильно. У нас нет канона или секретной формулы дружбы. 
            Зато у нас есть куча Микро-форматов.
          </p>
        </div>

        {/* Formats - scattered cards gallery */}
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12 py-16 my-8">
          {/* Pink skewed background */}
          <div 
            className="absolute inset-0 bg-highlight -z-10"
            style={{ transform: 'skewY(2deg)' }}
          />
          
          <div className="text-highlight-foreground">
            <h3 className="font-mono text-sm uppercase tracking-[0.2em] mb-12">Наши форматы:</h3>
            
            {/* Scattered cards */}
            <div className="relative h-[500px] md:h-[450px]">
              {[
                { name: formats[0].name, desc: formats[0].description, rotate: -4, top: "0%", left: "0%", width: "w-64 md:w-72" },
                { name: formats[1].name, desc: formats[1].description, rotate: 3, top: "5%", left: "45%", width: "w-60 md:w-80" },
                { name: formats[2].name, desc: formats[2].description, rotate: -2, top: "45%", left: "5%", width: "w-56 md:w-64" },
                { name: formats[3].name, desc: formats[3].description, rotate: 5, top: "50%", left: "50%", width: "w-52 md:w-60" },
              ].map((card, i) => (
                <div 
                  key={i}
                  className={`absolute ${card.width} bg-background text-foreground p-5 shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50`}
                  style={{ 
                    transform: `rotate(${card.rotate}deg)`,
                    top: card.top,
                    left: card.left,
                    zIndex: i + 1,
                  }}
                >
                  <h4 className="font-bold text-sm mb-2">«{card.name}»</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm italic text-highlight-foreground/70 mt-8">
              У нас еще много, все разные и классные.
            </p>
          </div>
        </div>

        {/* Camp philosophy */}
        <div className="space-y-4">
          <p className="text-xl font-display italic">
            Кэмп делается участниками для участников, без привкуса бизнеса
          </p>
        </div>

        {/* Not doing */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Чего мы точно НЕ делаем:</h3>
          <div className="space-y-3">
            {notDoing.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-highlight">—</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How we change */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Как мы меняемся:</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              После каждого кэмпа мы просим участников написать обратную связь. Любую: кому что понравилось, 
              кого что бесило, кто от чего устал. На основании этой обратной связи мы и создаем новые кэмпы.
            </p>
            <p>
              Каждый кэмп делает новая команда, чтобы организаторы отдохнули или вдруг не решили, что лучше всех знают, 
              как надо. Обычно команду набирают из тех, кто недавно был участником.
            </p>
          </div>
        </div>

        {/* Warning - code block style */}
        <div className="bg-callout border border-callout-border p-6 font-mono text-sm space-y-3">
          <h4 className="font-bold text-foreground">Что может не сработать</h4>
          <div className="space-y-2 text-callout-foreground">
            <p>Любой формат может вам не зайти.</p>
            <p>Иногда в программу пролезают не слишком удачные форматы.</p>
            <p>Иногда мы перестраховываемся.</p>
            <p>Конкретные результаты для вас сильно зависят от того, насколько вы стараемся что-то из кэмпа извлечь.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyRules;
