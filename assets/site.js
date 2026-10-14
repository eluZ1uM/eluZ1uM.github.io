// eluZ1uM Technologies — language (EN/RU), theme and reveal-on-scroll. No tracking.
const RU = {
  "skip": "К продуктам",
  "nav.products": "Продукты", "nav.principles": "Принципы", "nav.about": "О студии", "nav.contact": "Контакты",
  "hero.eyebrow": "Независимая студия программ · Глазго, Великобритания",
  "hero.h1a": "Маленькая студия.", "hero.h1b": "Точные программы.",
  "hero.lead": "Мы делаем спокойные и сильные приложения для Windows для тех, кто создаёт: авторов, разработчиков, деятельных людей. Каждое приложение придумывает, делает и проводит через сертификацию Microsoft Store один независимый разработчик.",
  "hero.cta1": "Наши приложения", "hero.cta2": "Скачать Scribnox", "hero.cta3": "Скачать Helmavio",
  "facts.live": "приложения в Microsoft Store", "facts.cert": "на сертификации в Store", "facts.dev": "в разработке",
  "products.eyebrow": "Что мы делаем", "products.h2": "Три продукта. Один стандарт.",
  "tag.live": "В Microsoft Store", "tag.soon": "Скоро в Microsoft Store", "tag.dev": "В разработке",
  "sx.tagline": "От рукописи до готовой книги.",
  "sx.text": "Тихая мастерская для писателя на Windows. Вставьте или загрузите рукопись — Scribnox свёрстает её как настоящую книгу: главы, обложка, титульный лист — для читателей и магазинов.",
  "sx.b1": "Пишите, правьте и смотрите книгу как печатный разворот",
  "sx.b2": "EPUB, PDF, DOCX и FB2 для Amazon KDP, Apple Books и Литрес (Pro)",
  "sx.b3": "ИИ по желанию, с вашим ключом: расставит абзацы и главы, не переписывая ваших слов",
  "hm.tagline": "Ваши ИИ-агенты под вашим контролем.",
  "hm.text": "Рабочее пространство для ИИ-агентов на Windows. Опишите задачу обычными словами — Helmavio составит план с понятными критериями готовности, подберёт агентов, выполнит шаги и проверит результат.",
  "hm.b1": "План с критериями готовности, которые проверяются автоматически",
  "hm.b2": "Агенты работают в песочнице — всё за её пределами только с вашего разрешения",
  "hm.b3": "Мониторинг, история и доказательства по каждой задаче",
  "hm.cta": "Следить на GitHub",
  "pb.tagline": "Дуэли на отжиманиях — вживую.",
  "pb.text": "Онлайн-игра 1 на 1. Два игрока, две камеры, один таймер — приложение считает каждое повторение, побеждает лучший подход.",
  "pb.b1": "Живое видео соперника во время боя",
  "pb.b2": "Повторения считаются на вашем устройстве — без анализа в облаке",
  "pb.b3": "Сначала iPhone, затем Windows и Android",
  "pr.eyebrow": "Как мы работаем", "pr.h2": "Программы, которые уважают вашу работу.",
  "pr.c1h": "Всё у вас", "pr.c1": "Книги и проекты хранятся на вашем устройстве. Что отправлять наружу — решаете вы.",
  "pr.c2h": "Свой ИИ", "pr.c2": "ИИ необязателен и работает с вашим собственным ключом у выбранного вами провайдера.",
  "pr.c3h": "Честная цена", "pr.c3": "Начать можно бесплатно. Понятная подписка Pro — когда нужно больше, без сюрпризов.",
  "pr.c4h": "С заботой", "pr.c4": "Каждый выпуск проходит тесты и сертификацию Microsoft Store, прежде чем попасть к вам.",
  "ab.eyebrow": "О студии", "ab.h2": "Один разработчик. Настоящие продукты.",
  "ab.p1": "eluZ1uM Technologies — независимая студия из Глазго. Название обыгрывает слово «иллюзия», а логотип — невозможный треугольник: хорошая программа должна казаться лёгкой, даже если за ней скрыто много работы.",
  "ab.p2": "Мы выбираем несколько продуманных продуктов вместо множества недоделанных — и выпускаем их там, где их ищут пользователи Windows: в Microsoft Store.",
  "ct.h2": "Вопросы, идеи или отзывы?", "ct.p": "Напишите нам — каждое письмо читает живой человек.", "ct.btn": "Написать в студию",
  "ft.made": "Сделано в Глазго для Windows.", "ft.store": "Scribnox в Microsoft Store"
};
const EN = {};
const root = document.documentElement;
document.querySelectorAll("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] = el.textContent; });

function setLang(lang) {
  root.lang = lang;
  const dict = lang === "ru" ? RU : EN;
  document.querySelectorAll("[data-i18n]").forEach((el) => { const v = dict[el.dataset.i18n]; if (v) el.textContent = v; });
  document.querySelectorAll("img[data-badge]").forEach((b) => { b.src = "https://get.microsoft.com/images/" + (lang === "ru" ? "ru" : "en-us") + "%20" + (root.dataset.theme === "light" ? "dark" : "light") + ".svg"; b.alt = lang === "ru" ? "Скачать в Microsoft Store" : "Get it from Microsoft"; });
  document.title = lang === "ru" ? "eluZ1uM Technologies — Маленькая студия. Точные программы." : "eluZ1uM Technologies — Small studio. Focused software.";
  try { localStorage.setItem("elz-lang", lang); } catch (e) {}
}
document.getElementById("lang").addEventListener("click", () => setLang(root.lang === "ru" ? "en" : "ru"));
setLang(root.lang);

document.getElementById("theme").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem("elz-theme", root.dataset.theme); } catch (e) {}
  setLang(root.lang);
});

document.getElementById("year").textContent = new Date().getFullYear();

const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// If the official badge image can't load, show a plain button to the same Store page.
document.querySelectorAll("img[data-badge]").forEach((img) => img.addEventListener("error", () => {
  const a = img.closest("a"); if (!a || a.dataset.fallback) return;
  a.dataset.fallback = "1"; a.className = "btn primary"; a.textContent = root.lang === "ru" ? "Скачать в Microsoft Store" : "Get it from Microsoft";
}));

