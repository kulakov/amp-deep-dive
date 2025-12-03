import { useState, useRef, useEffect } from "react";

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


  // Positions and colors for scattered cards (desktop only)
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

  // Mobile carousel state
  const [currentCard, setCurrentCard] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based card changing (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isDragging) return;
      
      // Only on mobile
      if (window.innerWidth >= 768) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section
      // Start counting when section enters viewport, end when it leaves
      const scrollStart = viewportHeight; // section top reaches bottom of viewport
      const scrollEnd = -sectionHeight; // section bottom reaches top of viewport
      const scrollRange = scrollStart - scrollEnd;
      
      const currentPosition = rect.top;
      const scrollProgress = (scrollStart - currentPosition) / scrollRange;
      
      // Map scroll progress to card index
      const cardIndex = Math.floor(scrollProgress * participants.length);
      const clampedIndex = Math.max(0, Math.min(participants.length - 1, cardIndex));
      
      setCurrentCard(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging, participants.length]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setOffsetX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(offsetX) > 50) {
      if (offsetX < 0 && currentCard < participants.length - 1) {
        setCurrentCard(prev => prev + 1);
      } else if (offsetX > 0 && currentCard > 0) {
        setCurrentCard(prev => prev - 1);
      }
    }
    setOffsetX(0);
  };

  // Click to advance
  const handleCardClick = () => {
    if (Math.abs(offsetX) < 10) {
      setCurrentCard(prev => (prev + 1) % participants.length);
    }
  };

  // Rotation for stacked cards on mobile
  const getCardRotation = (index: number) => {
    const rotations = [-3, 2, -2, 3, -4, 2, -2, 4, -3];
    return rotations[index % rotations.length];
  };

  return (
    <section ref={sectionRef} className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Кто приезжает
          </span>
          <blockquote className="text-2xl md:text-3xl font-display italic">
            «А такие как я участвуют?»
          </blockquote>
        </div>

        {/* Mobile carousel - stacked deck */}
        <div className="md:hidden relative h-[400px] flex items-center justify-center">
          <div 
            ref={cardRef}
            className="relative w-full max-w-[300px] h-[350px]"
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            {/* Stack of cards behind */}
            {participants.map((_, i) => {
              const distanceFromCurrent = i - currentCard;
              if (distanceFromCurrent < 0 || distanceFromCurrent > 3) return null;
              
              return (
                <div
                  key={i}
                  className="absolute inset-0 bg-[#FFFEF5] border border-foreground/20 p-6 shadow-lg"
                  style={{
                    transform: `rotate(${getCardRotation(i)}deg) translateY(${distanceFromCurrent * 4}px)`,
                    zIndex: participants.length - distanceFromCurrent,
                    opacity: distanceFromCurrent === 0 ? 1 : 0.7 - distanceFromCurrent * 0.2,
                  }}
                />
              );
            })}
            
            {/* Active card */}
            <div
              className="absolute inset-0 bg-[#FFFEF5] border border-foreground/20 p-6 shadow-xl transition-transform duration-200 cursor-pointer"
              style={{
                transform: `rotate(${isDragging ? 0 : getCardRotation(currentCard)}deg) translateX(${offsetX}px)`,
                zIndex: 100,
              }}
              onClick={handleCardClick}
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">{participants[currentCard].name}</h3>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{participants[currentCard].description}</p>
              <p className="text-sm italic leading-relaxed text-foreground/90">{participants[currentCard].insight}</p>
            </div>
          </div>
          
          {/* Card counter */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground">
            {currentCard + 1} / {participants.length}
          </div>
        </div>

        {/* Desktop scattered gallery */}
        <div className="hidden md:block relative h-[1100px]">
          {participants.map((person, i) => (
            <div 
              key={i}
              className="absolute w-[30%] bg-[#FFFEF5] border border-foreground/20 p-6 shadow-lg cursor-pointer transition-all duration-300 group overflow-visible"
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
                e.currentTarget.style.backgroundColor = '#FFFEF5';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.color = '';
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">{person.name}</h3>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{person.description}</p>
              <p className="text-sm italic leading-relaxed text-foreground/90">{person.insight}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Participants;