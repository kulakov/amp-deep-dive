import { useEffect, useRef, useState } from "react";

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
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] bg-highlight text-highlight-foreground px-3 py-1.5 inline-block">
            Техника безопасности
          </span>
          <p className="text-xl font-display italic text-muted-foreground">
            Кэмп делается участниками для участников
          </p>
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {rules.map((rule, index) => (
            <Sticker
              key={index}
              number={index + 1}
              text={rule}
              color={stickerColors[index]}
              initialRotation={initialRotations[index]}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto space-y-8 pt-8">
          <p className="text-center text-muted-foreground font-body leading-relaxed">
            Мы не знаем наверняка, как это делать правильно. У нас нет формулы дружбы или секрета общения. 
            Мы просто собираем людей и создаем форматы, которые помогают начать разговаривать искренне.
          </p>
        </div>
      </div>
    </section>
  );
};

interface StickerProps {
  number: number;
  text: string;
  color: string;
  initialRotation: number;
  delay: number;
}

const Sticker = ({ number, text, color, initialRotation, delay }: StickerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (stickerRef.current) {
      observer.observe(stickerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={stickerRef}
      className={`
        ${color} 
        aspect-square 
        p-4 
        shadow-lg 
        relative
        transition-all
        duration-700
        ease-out
        cursor-default
        hover:scale-105
        hover:shadow-xl
      `}
      style={{
        transform: isVisible ? "rotate(0deg)" : `rotate(${initialRotation}deg)`,
        boxShadow: isVisible 
          ? "4px 4px 12px rgba(0,0,0,0.15)" 
          : "2px 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      {/* Tape effect at top */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/60 backdrop-blur-sm" />
      
      {/* Number */}
      <span className="font-mono text-2xl font-bold text-foreground/30 absolute top-3 left-3">
        {number}
      </span>

      {/* Text */}
      <div className="h-full flex items-center justify-center pt-4">
        <p className="text-sm md:text-base font-body text-center leading-snug text-foreground/80">
          {text}
        </p>
      </div>

      {/* Handwritten Checkmark */}
      <div 
        className={`
          absolute bottom-2 right-2
          transition-all duration-500
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        `}
        style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          className="text-highlight"
        >
          <path
            d="M6 16 L13 24 L26 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isVisible ? "animate-draw-check" : ""}
            style={{
              strokeDasharray: 40,
              strokeDashoffset: isVisible ? 0 : 40,
              transition: "stroke-dashoffset 0.5s ease-out 0.5s"
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SafetyRules;
