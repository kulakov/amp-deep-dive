import campWorkshop from "@/assets/camp-workshop.jpg";
import campHug from "@/assets/camp-hug.jpg";
import campHandsUp from "@/assets/camp-hands-up.jpg";
import campConnection from "@/assets/camp-connection.jpg";
import campEnergy from "@/assets/camp-energy.jpg";
import campSocializing from "@/assets/camp-socializing.jpg";

const WhatHappens = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black">
              ЧТО ТУТ ПРОИСХОДИТ?
            </h2>
            <blockquote className="text-2xl md:text-3xl italic text-muted-foreground border-l-4 border-accent pl-6">
              Никогда не видел в одном месте столько нормальных людей
              <footer className="text-xl mt-2 not-italic">— Даня Рубинштейн</footer>
            </blockquote>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            <img 
              src={campWorkshop} 
              alt="Воркшоп на кемпе" 
              className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img 
              src={campHug} 
              alt="Объятия на кемпе" 
              className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img 
              src={campHandsUp} 
              alt="Поднятые руки" 
              className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img 
              src={campConnection} 
              alt="Общение участников" 
              className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img 
              src={campEnergy} 
              alt="Энергия кемпа" 
              className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img 
              src={campSocializing} 
              alt="Социализация" 
              className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
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
              AmpCamp — это место, где <span className="font-bold">[CTO]</span> может обнаружить, 
              что его <span className="font-bold">[тревога про будущее]</span> точно такая же, 
              как у <span className="font-bold">[учителя литературы]</span>, хотя внешне их жизни не похожи.
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
            <table className="w-full border-2 border-primary text-left">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-lg font-bold border-r-2 border-primary-foreground">
                    Другие классные ивенты
                  </th>
                  <th className="p-4 text-lg font-bold">AmpCamp</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg">
                <tr className="border-t-2 border-primary">
                  <td className="p-4 border-r-2 border-primary">Рассказываешь о достижениях</td>
                  <td className="p-4 font-medium">Признаешься в сомнениях</td>
                </tr>
                <tr className="border-t-2 border-primary bg-muted/50">
                  <td className="p-4 border-r-2 border-primary">Произвести впечатление</td>
                  <td className="p-4 font-medium">Снимаешь маску</td>
                </tr>
                <tr className="border-t-2 border-primary">
                  <td className="p-4 border-r-2 border-primary">Показываешь, какой ты крутой</td>
                  <td className="p-4 font-medium">Открываешь, кто ты по-настоящему</td>
                </tr>
                <tr className="border-t-2 border-primary bg-muted/50">
                  <td className="p-4 border-r-2 border-primary">Демонстрируешь, чем ты полезен</td>
                  <td className="p-4 font-medium">Кто ты вне работы</td>
                </tr>
                <tr className="border-t-2 border-primary">
                  <td className="p-4 border-r-2 border-primary">Нетворкинг для бизнеса</td>
                  <td className="p-4 font-medium">Споры про анархизм и темное просвещение</td>
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
            <div className="space-y-4 text-base md:text-lg">
              <div>
                <span className="font-bold text-accent">#интеллектуальные:</span> дискуссия про теорему Гёделя; 
                семинар про то, что такое ответственность; дискуссия про психологию морали; 
                доклад про гравюры Дюрера;
              </div>
              <div>
                <span className="font-bold text-accent">#телесные:</span> йога-зарядка, мастер-класс по джиу-джитсу, 
                турнир по водному поло, рейв в бассейне
              </div>
              <div>
                <span className="font-bold text-accent">#эмоциональные:</span> мастер-класс по комплиментам, 
                ASMR-сессия, рассказ про школу приемных родителей, семинар по написанию завещаний, 
                cuddle-party, мастермайнд
              </div>
              <div>
                <span className="font-bold text-accent">#творческие:</span> мастер-класс по stop motion анимации, 
                фотография на консервную банку (пинхол), музыкальный джем, пение хасидских нигунов, 
                мастер-класс по вязанию крючком, создание анкеты для друзей как в детстве
              </div>
              <div>
                <span className="font-bold text-accent">#игры_и_баловство:</span> комедийная импровизация, 
                турнир по "шляпе", стратегическая игра в ООН, сеанс аукционной магии, художественный LARP, 
                обмен опытом про кринжовые увлечения
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 border-2 border-destructive bg-destructive/5">
          <h4 className="text-2xl font-bold mb-4">Это подходит не всем.</h4>
          <div className="space-y-3 text-lg">
            <p>
              Если вы ждете только легких разговоров и полезных контактов — вам не зайдет. 
              Здесь люди делятся переживаниями и сомнениями.
            </p>
            <p>У нас не принято продавать и питчить. Мы не пытаемся вас чему-то научить.</p>
            <p>Это пространство где вы сами будете реализовывать то, что вам интересно.</p>
            <p className="font-bold">
              Если вы участвуете ничего не вкладывая — скорее всего не получите отдачи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
