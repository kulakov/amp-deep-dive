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
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-black">ТЕХНИКА БЕЗОПАСНОСТИ</h2>
          
          <div className="grid gap-4">
            {rules.map((rule, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 border-2 border-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              >
                <span className="text-4xl font-black text-accent shrink-0">{index + 1}.</span>
                <p className="text-xl font-medium pt-1">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl">
              Мы не знаем наверняка, как это делать правильно. У нас нет формулы дружбы или секрета общения. 
              Мы просто собираем людей и создаем форматы, которые помогают начать разговаривать искренне.
            </p>
            <p className="text-xl md:text-2xl">
              Мы не будем вам навязывать как общаться правильно. У нас нет канона или секретной формулы дружбы. 
              Зато у нас есть куча Микро-форматов.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Давай, я расскажу тебе о наших форматах:</h3>
            <div className="space-y-4">
              {formats.map((format, index) => (
                <div key={index} className="p-6 bg-muted border-l-4 border-accent">
                  <h4 className="text-xl font-bold mb-2">«{format.name}»</h4>
                  <p className="text-lg">{format.description}</p>
                </div>
              ))}
            </div>
            <p className="text-lg italic text-muted-foreground">
              У нас еще много, все разные и классные.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl font-bold">
            Кэмп делается участниками для участников, без привкуса бизнеса
          </h3>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold">Чего мы точно НЕ делаем</h3>
          <div className="space-y-4">
            {notDoing.map((item, index) => (
              <div key={index} className="flex items-start gap-4 text-lg">
                <span className="text-accent font-bold shrink-0">—</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold">Как мы меняемся</h3>
          <div className="space-y-6 text-lg">
            <p>
              После каждого кэмпа мы просим участников написать обратную связь. Любую: кому что понравилось, 
              кого что бесило, кто от чего устал. На основании этой обратной связи мы и создаем новые кэмпы.
            </p>
            <div className="p-6 bg-card border-2 border-primary">
              <p className="font-bold mb-4">Вот пример изменения:</p>
              <p className="mb-4">
                На первом кэмпе в общем круге произошел спонтанный разговор про войну который оказался очень тяжелым. 
                Мы очень переживали — не повредит ли это кому-нибудь. С тех пор на кэмпах появились две вещи:
              </p>
              <ul className="space-y-2 ml-6">
                <li>
                  — Явная декларация ответственности участников: Если формат для вас тяжелый вы всегда можете 
                  в нем не участвовать без объяснения причин.
                </li>
                <li>— У нас появились психологи, с которыми всегда можно поговорить.</li>
              </ul>
            </div>
            <p>
              Каждый кэмп делает новая команда, чтобы организаторы отдохнули или вдруг не решили, что лучше всех знают, 
              как надо. Обычно команду набирают из тех, кто недавно был участником.
            </p>
          </div>
        </div>

        <div className="p-8 border-2 border-destructive bg-destructive/5">
          <h4 className="text-2xl font-bold mb-4">⚠️ Что может не сработать</h4>
          <div className="space-y-3 text-lg">
            <p>Любой формат может вам не зайти.</p>
            <p>Иногда в программу пролезают не слишком удачные форматы.</p>
            <p>Иногда мы перестраховываемся.</p>
            <p>
              Конкретные результаты для вас сильно зависят от того, насколько вы стараемся что-то из кэмпа извлечь.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyRules;
