import campWorkshop from "@/assets/camp-workshop.jpg";
import campHug from "@/assets/camp-hug.jpg";
import campHandsUp from "@/assets/camp-hands-up.jpg";
import campConnection from "@/assets/camp-connection.jpg";
import campEnergy from "@/assets/camp-energy.jpg";
import campSocializing from "@/assets/camp-socializing.jpg";

const WhatHappens = () => {
  return (
    <section className="py-24 px-6 border-b border-foreground">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] bg-accent text-accent-foreground px-3 py-1.5 inline-block">
              Что здесь происходит
            </span>
            <blockquote className="text-2xl md:text-4xl font-display italic max-w-3xl">
              «Никогда не видел в одном месте столько нормальных людей»
              <footer className="text-base md:text-lg mt-4 not-italic font-mono text-muted-foreground">
                — Даня Рубинштейн
              </footer>
            </blockquote>
          </div>

          {/* Photo Grid - Editorial style */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {[campWorkshop, campHug, campHandsUp, campConnection, campEnergy, campSocializing].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img 
                  src={img} 
                  alt="" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl max-w-3xl font-body leading-relaxed">
            Мы собираем в одном месте людей, которым точно захочется искренне и глубоко пообщаться. 
            Искать таких сложно. Вы можете делать это сами, но на это вечно не хватает времени. 
            А еще не понятно где их брать. Поэтому их надо собрать их в кучу. Вот мы и собрали.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display">Что это такое</h3>
            <div className="space-y-4 text-lg font-body leading-relaxed">
              <p>
                AmpCamp — это место, где <strong>CTO</strong> может обнаружить, 
                что его <strong>тревога про будущее</strong> точно такая же, 
                как у <strong>учителя литературы</strong>, хотя внешне их жизни не похожи.
              </p>
              <p>
                Три дня, когда твоя должность в LinkedIn не имеет значения, потому что все говорят о том, 
                что их на самом деле волнует.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display">Мы НЕ конференция</h3>
            <p className="text-lg text-muted-foreground font-body">
              и у нас аллергия на банальность и неряшливое мышление.
            </p>
          </div>
        </div>

        {/* Comparison Table - Editorial */}
        <div className="border border-foreground">
          <div className="grid grid-cols-2">
            <div className="p-6 border-r border-b border-foreground bg-muted">
              <span className="font-mono text-xs uppercase tracking-wider">Другие ивенты</span>
            </div>
            <div className="p-6 border-b border-foreground bg-primary text-primary-foreground">
              <span className="font-mono text-xs uppercase tracking-wider">AmpCamp</span>
            </div>
          </div>
          {[
            ["Рассказываешь о достижениях", "Признаешься в сомнениях"],
            ["Произвести впечатление", "Снимаешь маску"],
            ["Показываешь, какой ты крутой", "Открываешь, кто ты по-настоящему"],
            ["Демонстрируешь, чем ты полезен", "Кто ты вне работы"],
            ["Нетворкинг для бизнеса", "Споры про анархизм и темное просвещение"],
          ].map(([left, right], i) => (
            <div key={i} className="grid grid-cols-2">
              <div className={`p-6 border-r border-foreground ${i < 4 ? 'border-b' : ''} text-muted-foreground`}>
                {left}
              </div>
              <div className={`p-6 font-medium ${i < 4 ? 'border-b border-foreground' : ''}`}>
                {right}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <p className="text-xl md:text-2xl font-display max-w-3xl">
            Да, у нас есть программа. В ней много всего очень разного и интересного. 
            Каждый раз она совершенно другая, у нее нет другой рамки кроме «это будет интересно».
          </p>

          <div className="space-y-8">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em]">
              Например, были такие активности:
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-base font-body">
              {[
                { tag: "интеллектуальные", items: "дискуссия про теорему Гёделя; семинар про то, что такое ответственность; дискуссия про психологию морали; доклад про гравюры Дюрера" },
                { tag: "телесные", items: "йога-зарядка, мастер-класс по джиу-джитсу, турнир по водному поло, рейв в бассейне" },
                { tag: "эмоциональные", items: "мастер-класс по комплиментам, ASMR-сессия, рассказ про школу приемных родителей, семинар по написанию завещаний, cuddle-party" },
                { tag: "творческие", items: "мастер-класс по stop motion анимации, фотография на консервную банку, музыкальный джем, пение хасидских нигунов" },
                { tag: "игры и баловство", items: "комедийная импровизация, турнир по «шляпе», стратегическая игра в ООН, сеанс аукционной магии, художественный LARP" },
              ].map((cat) => (
                <div key={cat.tag}>
                  <span className="font-mono text-xs uppercase tracking-wider bg-accent text-accent-foreground px-2 py-1 inline-block mb-3">
                    #{cat.tag}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{cat.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-4 border-foreground pl-8 py-4">
          <h4 className="text-2xl font-display mb-6">Это подходит не всем.</h4>
          <div className="space-y-4 text-lg font-body text-muted-foreground">
            <p>
              Если вы ждете только легких разговоров и полезных контактов — вам не зайдет. 
              Здесь люди делятся переживаниями и сомнениями.
            </p>
            <p>У нас не принято продавать и питчить. Мы не пытаемся вас чему-то научить.</p>
            <p>Это пространство где вы сами будете реализовывать то, что вам интересно.</p>
            <p className="font-medium text-foreground">
              Если вы участвуете ничего не вкладывая — скорее всего не получите отдачи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
