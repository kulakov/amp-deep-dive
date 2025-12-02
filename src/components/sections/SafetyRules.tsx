import campConferenceBg from "@/assets/camp-conference-bg.jpg";

const SafetyRules = () => {
  const rules = [
    "Включаете голову",
    "Участвуете только в том, в чем хотите",
    "Несете ответственность за свои действия",
    "Есть психолог, с которым можно поговорить",
    "Опираемся на критическое мышление"
  ];

  const notDoing = [
    { highlight: "Не заставляем участвовать", rest: "можно не ходить на любое из мероприятий. можно уходить всегда когда не ок" },
    { highlight: "Не продаем методики", rest: "это не бизнес" },
    { highlight: "Не обещаем решить ваши проблемы", rest: "мы не психологи (почти все), и у нас тоже есть непрочитанные книжки по саморазвитию" }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={campConferenceBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="max-w-3xl mx-auto space-y-16 text-white">
        {/* Section Header */}
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Техника безопасности
          </span>
          <p className="text-xl font-display italic">
            Кэмп делается участниками для участников, без привкуса бизнеса
          </p>
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
        <div className="space-y-4 text-lg font-body leading-relaxed text-white/80">
          <p>
            Мы не знаем наверняка, как это делать правильно. У нас нет формулы дружбы или секрета общения. 
            Мы просто собираем людей и создаем форматы, которые помогают начать разговаривать искренне.
          </p>
        </div>

        {/* Not doing */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Чего мы точно НЕ делаем:</h3>
          <div className="space-y-3">
            {notDoing.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-highlight">—</span>
                <div className="text-white/80">
                  <span className="text-highlight font-bold">{item.highlight}</span>
                  <p className="mt-1">{item.rest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How we change */}
        <div className="space-y-6">
          <h3 className="font-mono text-sm uppercase tracking-[0.2em]">Как мы меняемся:</h3>
          <div className="space-y-4 text-white/80">
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
        <div className="bg-background border border-background/20 p-6 font-mono text-sm space-y-3">
          <h4 className="font-bold text-foreground">Что может не сработать</h4>
          <div className="space-y-2 text-muted-foreground">
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