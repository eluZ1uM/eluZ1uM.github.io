// eluZ1uM Technologies — theme, mobile menu, Store badges and reveal-on-scroll. No tracking.
// Languages are separate pages (/ and /ru/); the head script handles the first-visit redirect.
const root = document.documentElement;
const ru = root.lang === "ru";
const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

// The Store badge colour follows the theme.
function paint() {
  const light = root.dataset.theme === "light";
  document.querySelectorAll("img[data-badge]").forEach((b) => {
    b.src = "https://get.microsoft.com/images/" + (ru ? "ru" : "en-us") + "%20" + (light ? "dark" : "light") + ".svg";
  });
}
paint();

document.getElementById("theme").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  store("elz-theme", root.dataset.theme);
  paint();
});

// The language switch is a plain link; remember the choice so the head script respects it.
document.getElementById("lang").addEventListener("click", () => store("elz-lang", ru ? "en" : "ru"));

// Mobile menu.
const nav = document.querySelector(".nav");
const menu = document.getElementById("menu");
function setMenu(open) { nav.classList.toggle("nav-open", open); menu.setAttribute("aria-expanded", open); }
menu.addEventListener("click", () => setMenu(!nav.classList.contains("nav-open")));
nav.querySelectorAll(".links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("nav-open")) { setMenu(false); menu.focus(); } });

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// If the official badge image can't load, show a plain button to the same Store page.
document.querySelectorAll("img[data-badge]").forEach((img) => img.addEventListener("error", () => {
  const a = img.closest("a"); if (!a || a.dataset.fallback) return;
  a.dataset.fallback = "1"; a.className = "btn primary"; a.textContent = ru ? "Скачать в Microsoft Store" : "Get it from Microsoft";
}));
