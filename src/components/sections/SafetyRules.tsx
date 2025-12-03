import safetyBg from "@/assets/safety-bg.jpg";

const SafetyRules = () => {
  const rules = [
    "Включаете голову",
    "Участвуете только в том, в чем хотите",
    "Несете ответственность за свои действия",
    "Есть психолог, с которым можно поговорить",
    "Опираемся на критическое мышление"
  ];

  const stickerColors = [
    "bg-yellow-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-orange-200"
  ];

  const initialRotations = [-6, 4, -3, 5, -4];

  return (
    <section className="py-24 px-6 relative">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={safetyBg} 
          alt="" 
          loading="lazy" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Техника безопасности
          </span>
          <p className="text-xl font-display italic text-white drop-shadow-md">
            Кэмп делается участниками для участников
          </p>
        </div>

        {/* Stickers Grid - smaller stickers */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-3xl mx-auto">
          {rules.map((rule, index) => (
            <Sticker
              key={index}
              text={rule}
              color={stickerColors[index]}
              initialRotation={initialRotations[index]}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto space-y-8 pt-8">
          <p className="text-center text-white/90 font-body leading-relaxed drop-shadow-md">
            Мы не знаем наверняка, как это делать правильно. У нас нет формулы дружбы или секрета общения. 
            Мы просто собираем людей и создаем форматы, которые помогают начать разговаривать искренне.
          </p>
        </div>
      </div>
    </section>
  );
};

interface StickerProps {
  text: string;
  color: string;
  initialRotation: number;
}

const Sticker = ({ text, color, initialRotation }: StickerProps) => {
  return (
    <div
      className={`
        ${color} 
        aspect-square 
        p-3
        shadow-lg 
        relative
        cursor-default
        hover:scale-105
        hover:shadow-xl
        transition-transform
        duration-300
      `}
      style={{
        transform: `rotate(${initialRotation}deg)`,
        boxShadow: "4px 4px 12px rgba(0,0,0,0.2)"
      }}
    >
      {/* Tape effect at top */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-white/60 backdrop-blur-sm" />

      {/* Text */}
      <div className="h-full flex items-center justify-center">
        <p className="text-xs md:text-sm font-body text-center leading-snug text-foreground/80">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SafetyRules;
