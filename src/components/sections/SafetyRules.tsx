import { useEffect, useRef, useState } from "react";
import safetyBg from "@/assets/safety-bg.jpg";

const SafetyRules = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const rules = [
    "Включаете голову",
    "Участвуете только в том, в чем хотите",
    "Несете ответственность за свои действия",
    "Есть психолог, с которым можно поговорить",
    "Опираемся на критическое мышление"
  ];

  const initialRotations = [-6, 4, -3, 5, -4];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount === 0) {
          // Start sequential animation
          rules.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCount(prev => prev + 1);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, rules.length]);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative">
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

        {/* Stickers Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-3xl mx-auto">
          {rules.map((rule, index) => (
            <Sticker
              key={index}
              text={rule}
              initialRotation={initialRotations[index]}
              isFixed={index < visibleCount}
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
  initialRotation: number;
  isFixed: boolean;
}

const Sticker = ({ text, initialRotation, isFixed }: StickerProps) => {
  return (
    <div
      className="
        bg-highlight
        aspect-square 
        p-3
        shadow-lg 
        relative
        cursor-default
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-500
        ease-out
      "
      style={{
        transform: isFixed ? "rotate(0deg)" : `rotate(${initialRotation}deg)`,
        boxShadow: isFixed 
          ? "4px 4px 12px rgba(0,0,0,0.25)" 
          : "2px 2px 8px rgba(0,0,0,0.15)"
      }}
    >
      {/* Tape effect at top */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-white/60 backdrop-blur-sm" />

      {/* Text */}
      <div className="h-full flex items-center justify-center">
        <p className="text-xs md:text-sm font-body text-center leading-snug text-highlight-foreground">
          {text}
        </p>
      </div>

      {/* Handwritten Checkmark */}
      <div 
        className={`
          absolute bottom-1.5 right-1.5
          transition-all duration-500
          ${isFixed ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        `}
        style={{ transitionDelay: isFixed ? "200ms" : "0ms" }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 32 32" 
          className="text-highlight-foreground"
        >
          <path
            d="M6 16 L13 24 L26 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 40,
              strokeDashoffset: isFixed ? 0 : 40,
              transition: "stroke-dashoffset 0.4s ease-out 0.3s"
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SafetyRules;
