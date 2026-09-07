'use client';

import { useState } from 'react';
import { ArrowDownRight, Compass, MapPin, Menu, X } from 'lucide-react';
import { CALIFORNIA_PHOTO } from './generated-food-images/california';
import { MEXICO_PHOTO } from './generated-food-images/mexico';
import { PHILADELPHIA_PHOTO } from './generated-food-images/philadelphia';

const rolls = [
  {
    id: 'california',
    name: 'Калифорния',
    place: 'Лос-Анджелес, США',
    year: '1960-е',
    emoji: '🥑',
    photo: CALIFORNIA_PHOTO,
    position: { left: '12%', top: '42%' },
    color: '#ff7b61',
    intro:
      'Ролл, который научил Америку любить суши — спрятав нори внутрь и добавив знакомый авокадо.',
    history:
      'У «Калифорнии» несколько конкурирующих историй рождения. Чаще всего её связывают с Лос-Анджелесом 1960-х и поваром Итиро Маситой; свою версию создания ролла также рассказывал ванкуверский шеф Хидэкадзу Тодзё. Общая идея была революционной: сделать японское блюдо понятнее западному гостю.',
    nameStory:
      'Название закрепило за роллом образ солнечного побережья, хотя точное место рождения до сих пор обсуждают историки еды.',
    ingredients: ['рис', 'краб', 'авокадо', 'огурец', 'нори', 'кунжут'],
  },
  {
    id: 'philadelphia',
    name: 'Филадельфия',
    place: 'США → весь мир',
    year: '1980-е',
    emoji: '🍣',
    photo: PHILADELPHIA_PHOTO,
    position: { left: '24%', top: '38%' },
    color: '#f3bf4d',
    intro:
      'Сливочный сыр сделал этот ролл особенно нежным. Город подарил ему имя через знаменитую марку сыра.',
    history:
      'Филадельфия — пример американского урамаки: лосось соединили со сливочным сыром, огурцом и рисом наружу. Одну из историй авторства связывают с суши-шефом мадам Сайто, работавшей в Филадельфии в 1980-х.',
    nameStory:
      'Имя отсылает и к городу, и к широко известному сливочному сыру Philadelphia — хотя сам сыр впервые сделали в штате Нью-Йорк.',
    ingredients: ['рис', 'лосось', 'сливочный сыр', 'огурец', 'нори'],
  },
  {
    id: 'alaska',
    name: 'Аляска',
    place: 'Северная Америка',
    year: 'XX век',
    emoji: '🐟',
    photo: PHILADELPHIA_PHOTO,
    position: { left: '6%', top: '22%' },
    color: '#7ec9ba',
    intro:
      'Прохладный характер Севера: лосось, авокадо и свежий огурец в яркой урамаки-композиции.',
    history:
      '«Аляска» выросла из североамериканской традиции авторских роллов. Единого канонического рецепта нет: часто это вариация «Калифорнии», дополненная свежим или копчёным лососем.',
    nameStory:
      'Аляска ассоциируется с холодными чистыми водами и лососем — именно этот образ стал главным смыслом названия.',
    ingredients: ['рис', 'лосось', 'авокадо', 'огурец', 'краб', 'нори'],
  },
  {
    id: 'canada',
    name: 'Канада',
    place: 'Канада',
    year: 'современная кухня',
    emoji: '🍁',
    photo: CALIFORNIA_PHOTO,
    position: { left: '18%', top: '27%' },
    color: '#e75549',
    intro: 'Северный авторский ролл, где лосось и снежный краб встречаются с мягким авокадо.',
    history:
      'Под названием «Канада» рестораны подают разные авторские композиции. Обычно они продолжают канадскую линию тихоокеанских морепродуктов — лосося, краба и креветки.',
    nameStory:
      'Это не строгий исторический рецепт, а ресторанный образ страны: прохладные моря, дикий лосось и кленовый лист.',
    ingredients: ['рис', 'лосось', 'снежный краб', 'авокадо', 'нори'],
  },
  {
    id: 'boston',
    name: 'Бостон',
    place: 'Бостон, США',
    year: 'XX век',
    emoji: '🦐',
    photo: CALIFORNIA_PHOTO,
    position: { left: '26%', top: '35%' },
    color: '#ef9453',
    intro: 'Лёгкий ролл восточного побережья: варёная креветка, огурец, авокадо и свежий салат.',
    history:
      'Boston roll относится к американским суши-роллам с приготовленными морепродуктами. Креветка делает его понятной альтернативой для тех, кто не ест сырую рыбу.',
    nameStory:
      'Название поддерживает морской характер Новой Англии, хотя единого документированного автора у ролла нет.',
    ingredients: ['рис', 'креветка', 'авокадо', 'огурец', 'салат', 'нори'],
  },
  {
    id: 'new-york',
    name: 'Нью-Йорк',
    place: 'Нью-Йорк, США',
    year: 'современная кухня',
    emoji: '🍎',
    photo: PHILADELPHIA_PHOTO,
    position: { left: '25%', top: '39%' },
    color: '#c8d66b',
    intro: 'Городской микс сладкого и свежего: лосось или креветка, яблоко, авокадо и огурец.',
    history:
      'Как и сам Нью-Йорк, этот ролл существует во множестве версий. В меню часто встречается контраст морепродуктов с хрустящим яблоком.',
    nameStory:
      'Имя работает как обещание смелого, космополитичного сочетания, а яблоко напоминает прозвище города — Big Apple.',
    ingredients: ['рис', 'лосось', 'яблоко', 'авокадо', 'огурец', 'нори'],
  },
  {
    id: 'mexico',
    name: 'Мексика',
    place: 'Мексика',
    year: 'современная кухня',
    emoji: '🌶️',
    photo: MEXICO_PHOTO,
    position: { left: '17%', top: '51%' },
    color: '#e9b735',
    intro: 'Яркий фьюжн с хрустящей креветкой, авокадо, халапеньо и пикантным соусом.',
    history:
      'Мексиканские версии суши смело используют местные вкусы: перец, лайм, соусы с чили и жареные начинки. Так японская форма получает латиноамериканский темперамент.',
    nameStory:
      'Здесь география читается прямо во вкусе — острота, лайм, авокадо и насыщенные соусы.',
    ingredients: ['рис', 'креветка', 'авокадо', 'халапеньо', 'лайм', 'нори'],
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState('california');
  const [panelOpen, setPanelOpen] = useState(true);
  const active = rolls.find((roll) => roll.id === activeId) ?? rolls[0];

  function selectRoll(id: string) {
    setActiveId(id);
    setPanelOpen(true);
  }

  return (
    <main className="atlas-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ГеоСуши — на главную">
          <span className="brand-mark">Г</span>
          <span>ГеоСуши</span>
        </a>
        <div className="topbar-center">
          <Compass size={15} />
          <span>Гастрономический атлас</span>
        </div>
        <button className="round-button" type="button" aria-label="Перейти к историям" onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}>
          <Menu size={20} />
        </button>
      </header>

      <section id="top" className="map-stage" aria-label="Интерактивная карта роллов мира">
        <div className="intro-panel">
          <div className="intro-copy">
            <p className="eyebrow">Вкусное путешествие · 7 остановок</p>
            <h1>
              Весь мир —<br />в одном ролле
            </h1>
            <p className="intro-text">
              Нажмите на метку и узнайте, как города, штаты и целые страны оказались в японском меню.
            </p>
          </div>
          <div className="map-hint">
            <MapPin size={15} />
            Выберите точку на карте
          </div>
        </div>

        <div className="map-panel">
          <div className="map-art">
            <img
              className="map-image"
              src="/world-atlas.jpg"
              alt="Иллюстрированная карта мира в стиле старого гастрономического атласа"
            />
            <div className="map-shade" />
            <div className="map-label japan-label">Япония · начало пути</div>

            {rolls.map((roll, index) => (
              <button
                key={roll.id}
                type="button"
                className={`roll-pin ${activeId === roll.id ? 'is-active' : ''}`}
                style={{ ...roll.position, '--pin-color': roll.color } as React.CSSProperties}
                onClick={() => selectRoll(roll.id)}
                aria-label={`Открыть историю ролла ${roll.name}`}
                aria-pressed={activeId === roll.id}
              >
                <span className="pin-radar" />
                <span className="pin-orb">{roll.emoji}</span>
                <span className="pin-caption">
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  {roll.name}
                </span>
              </button>
            ))}
          </div>

          <aside className={`story-card ${panelOpen ? 'is-open' : ''}`} aria-live="polite">
            <button
              className="story-close"
              type="button"
              onClick={() => setPanelOpen(false)}
              aria-label="Закрыть карточку"
            >
              <X size={17} />
            </button>
            <img className="story-photo" src={active.photo} alt={`Ролл ${active.name}`} />
            <div className="story-body">
              <div className="story-index">№ {String(rolls.indexOf(active) + 1).padStart(2, '0')}</div>
              <p className="story-kicker">{active.place} · {active.year}</p>
              <h2>{active.name}</h2>
              <p>{active.intro}</p>
              <button className="story-link" type="button" onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}>
                Читать историю <ArrowDownRight size={17} />
              </button>
            </div>
          </aside>

          <div className="progress-dots" aria-label={`${rolls.indexOf(active) + 1} из ${rolls.length}`}>
            {rolls.map((roll) => <span key={roll.id} className={roll.id === activeId ? 'is-current' : ''} />)}
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-heading">
          <p className="eyebrow">Остановка {String(rolls.indexOf(active) + 1).padStart(2, '0')} · {active.place}</p>
          <h2>{active.name}</h2>
          <p>{active.intro}</p>
        </div>

        <div className="photo-gallery" aria-label="Фотографии роллов">
          {[rolls[0], rolls[1], rolls[6]].map((roll) => (
            <button key={roll.id} type="button" onClick={() => selectRoll(roll.id)}>
              <img src={roll.photo} alt={`Ролл ${roll.name}`} />
              <span><b>{roll.name}</b><small>{roll.place}</small></span>
            </button>
          ))}
        </div>

        <div className="ingredient-board">
          <div className="dish-frame" style={{ '--roll-color': active.color } as React.CSSProperties}>
            <img src={active.photo} alt={`Аппетитная подача ролла ${active.name}`} />
            <span className="dish-badge">{active.name}</span>
            <span className="plate-caption">состав ролла</span>
          </div>
          <div className="ingredient-list">
            {active.ingredients.map((ingredient, index) => (
              <div className="ingredient" key={ingredient}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{ingredient}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="history-grid">
          <article>
            <span>01 · История блюда</span>
            <h3>Как появился ролл</h3>
            <p>{active.history}</p>
          </article>
          <article>
            <span>02 · География имени</span>
            <h3>Почему так называется</h3>
            <p>{active.nameStory}</p>
          </article>
        </div>

        <div className="roll-switcher" aria-label="Выбрать следующую историю">
          {rolls.map((roll, index) => (
            <button key={roll.id} type="button" className={roll.id === activeId ? 'is-active' : ''} onClick={() => selectRoll(roll.id)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {roll.name}
            </button>
          ))}
        </div>

        <footer>
          <a className="brand footer-brand" href="#top"><span className="brand-mark">Г</span><span>ГеоСуши</span></a>
          <div className="footer-copy">
            <p>Истории на карте — как хорошее меню: всегда хочется открыть следующую.</p>
            <p className="footer-credit">made with <span>♥</span> by Roman A. Proskurnin</p>
          </div>
          <a href="#top">Вернуться к карте ↑</a>
        </footer>
      </section>
    </main>
  );
}
