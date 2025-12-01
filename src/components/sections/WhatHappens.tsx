import campWorkshop from "@/assets/camp-workshop.jpg";
import campHug from "@/assets/camp-hug.jpg";
import campHandsUp from "@/assets/camp-hands-up.jpg";
import campConnection from "@/assets/camp-connection.jpg";
import campEnergy from "@/assets/camp-energy.jpg";
import campSocializing from "@/assets/camp-socializing.jpg";

const WhatHappens = () => {
  return (
    <section className="py-32 px-6 bg-card rounded-[3rem]">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black">
              ЧТО ТУТ ПРОИСХОДИТ?
            </h2>
            <blockquote className="text-2xl md:text-3xl italic text-muted-foreground border-l-4 border-accent pl-6 rounded-r-2xl bg-background/50 py-4 pr-4">
              Никогда не видел в одном месте столько нормальных людей
              <footer className="text-xl mt-2 not-italic">— Даня Рубинштейн</footer>
            </blockquote>
          </div>

          {/* Photo Grid - Playful staggered layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            <img 
              src={campWorkshop} 
              alt="Воркшоп на кемпе" 
              className="w-full h-48 md:h-64 object-cover rounded-3xl hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg"
            />
            <img 
              src={campHug} 
              alt="Объятия на кемпе" 
              className="w-full h-48 md:h-64 object-cover rounded-3xl hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-lg md:translate-y-4"
            />
            <img 
              src={campHandsUp} 
              alt="Поднятые руки" 
              className="w-full h-48 md:h-64 object-cover rounded-3xl hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg"
            />
            <img 
              src={campConnection} 
              alt="Общение участников" 
              className="w-full h-48 md:h-64 object-cover rounded-3xl hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-lg md:-translate-y-4"
            />
            <img 
              src={campEnergy} 
              alt="Энергия кемпа" 
              className="w-full h-48 md:h-64 object-cover rounded-3xl hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg"
            />
            <img 
              src={campSocializing} 
              alt="Социализация" 
              className="w-full h-48 md:h-64 object-cover rounded-3xl hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-lg md:translate-y-4"
            />
          </div>

          <div className="space-y-6 text-lg md:text-xl">
            <p>
              Мы собираем в одном месте людей, которым точно захочется искренне и глубоко пообщаться. 
              Искать таких сложно. Вы можете делать это сами, но на это вечно не хватает времени. 
              А еще не понятно где их брать. Поэтому их надо собрать их в кучу. Вот мы и собрали.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold">Что это такое</h3>
          <div className="space-y-6 text-lg md:text-xl">
            <p>
              AmpCamp — это место, где <span className="font-bold text-accent">[CTO]</span> может обнаружить, 
              что его <span className="font-bold text-accent">[тревога про будущее]</span> точно такая же, 
              как у <span className="font-bold text-accent">[учителя литературы]</span>, хотя внешне их жизни не похожи.
            </p>
            <p>
              Три дня, когда твоя должность в LinkedIn не имеет значения, потому что все говорят о том, 
              что их на самом деле волнует.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold">
            Мы НЕ конференция
          </h3>
          <p className="text-xl md:text-2xl text-muted-foreground">
            и у нас аллергия на банальность и неряшливое мышление.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-5 text-lg font-bold">
                    Другие классные ивенты
                  </th>
                  <th className="p-5 text-lg font-bold bg-accent text-accent-foreground">AmpCamp ✨</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg">
                <tr className="bg-background">
                  <td className="p-5 border-b border-border">Рассказываешь о достижениях</td>
                  <td className="p-5 font-medium border-b border-border bg-accent/10">Признаешься в сомнениях</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="p-5 border-b border-border">Произвести впечатление</td>
                  <td className="p-5 font-medium border-b border-border bg-accent/10">Снимаешь маску</td>
                </tr>
                <tr className="bg-background">
                  <td className="p-5 border-b border-border">Показываешь, какой ты крутой</td>
                  <td className="p-5 font-medium border-b border-border bg-accent/10">Открываешь, кто ты по-настоящему</td>
                </tr>
                <tr className="bg-secondary/30">
                  <td className="p-5 border-b border-border">Демонстрируешь, чем ты полезен</td>
                  <td className="p-5 font-medium border-b border-border bg-accent/10">Кто ты вне работы</td>
                </tr>
                <tr className="bg-background">
                  <td className="p-5">Нетворкинг для бизнеса</td>
                  <td className="p-5 font-medium bg-accent/10">Споры про анархизм и темное просвещение</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-xl md:text-2xl">
            Да, у нас есть программа. В ней много всего очень разного и интересного. 
            Каждый раз она совершенно другая, у нее нет другой рамки кроме "это будет интересно".
          </p>

          <div className="space-y-6">
            <h4 className="text-2xl font-bold">Например, были такие активности:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-base md:text-lg">
              <div className="p-5 bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <span className="font-bold text-accent">#интеллектуальные</span>
                <p className="mt-2 text-muted-foreground">дискуссия про теорему Гёделя; семинар про то, что такое ответственность; дискуссия про психологию морали; доклад про гравюры Дюрера</p>
              </div>
              <div className="p-5 bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <span className="font-bold text-accent">#телесные</span>
                <p className="mt-2 text-muted-foreground">йога-зарядка, мастер-класс по джиу-джитсу, турнир по водному поло, рейв в бассейне</p>
              </div>
              <div className="p-5 bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <span className="font-bold text-accent">#эмоциональные</span>
                <p className="mt-2 text-muted-foreground">мастер-класс по комплиментам, ASMR-сессия, рассказ про школу приемных родителей, семинар по написанию завещаний, cuddle-party</p>
              </div>
              <div className="p-5 bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <span className="font-bold text-accent">#творческие</span>
                <p className="mt-2 text-muted-foreground">мастер-класс по stop motion анимации, фотография на консервную банку, музыкальный джем, пение хасидских нигунов</p>
              </div>
              <div className="p-5 bg-background rounded-2xl shadow-md hover:shadow-lg transition-shadow md:col-span-2">
                <span className="font-bold text-accent">#игры_и_баловство</span>
                <p className="mt-2 text-muted-foreground">комедийная импровизация, турнир по "шляпе", стратегическая игра в ООН, сеанс аукционной магии, художественный LARP, обмен опытом про кринжовые увлечения</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-destructive/10 to-accent/10 border border-destructive/20">
          <h4 className="text-2xl font-bold mb-4">Это подходит не всем.</h4>
          <div className="space-y-3 text-lg">
            <p>
              Если вы ждете только легких разговоров и полезных контактов — вам не зайдет. 
              Здесь люди делятся переживаниями и сомнениями.
            </p>
            <p>У нас не принято продавать и питчить. Мы не пытаемся вас чему-то научить.</p>
            <p>Это пространство где вы сами будете реализовывать то, что вам интересно.</p>
            <p className="font-bold text-destructive">
              Если вы участвуете ничего не вкладывая — скорее всего не получите отдачи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
