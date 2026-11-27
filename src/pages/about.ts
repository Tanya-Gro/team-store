export function renderAboutPage(): HTMLElement {
  const section = document.createElement("section");
  section.className = "container";

  section.innerHTML = `
    <div class="hero">
      <span class="badge">🎄 Новогодняя мастерская подарков</span>
      <h1>Тепло, хвоя и подарки ручной работы</h1>
      <p>
        Мы собираем уютные праздничные наборы, свечи с ароматом зимнего леса и игрушки,
        которые создают настроение с первой секунды.
      </p>
    </div>

    <div class="team-grid">
      <article class="ornament-card">
        <div class="ornament-ball">
          <img
            class="ornament-ball__img"
            src="https://github.com/Tanya-Gro.png"
            alt="Таня — GitHub аватар"
          />
        </div>
        <span class="badge">✨ Визуал и структура</span>
        <h3><a href="https://github.com/Tanya-Gro" target="_blank" rel="noreferrer">Таня</a></h3>
        <p class="product-card__price" style="font-size: 14px; font-weight: 500;">
          Отвечает за архитектуру, навигацию и аккуратную подачу каждого экрана.
        </p>
      </article>

      <article class="ornament-card">
        <div class="ornament-ball ornament-ball--pine">
          <img
            class="ornament-ball__img"
            src="https://github.com/MaxPalianski.png"
            alt="Максим — GitHub аватар"
          />
        </div>
        <span class="badge">🎁 Атмосфера и интерактив</span>
        <h3><a href="https://github.com/MaxPalianski" target="_blank" rel="noreferrer">Максим</a></h3>
        <p class="product-card__price" style="font-size: 14px; font-weight: 500;">
          Наполняет мастерскую праздничным настроением, деталями и живой логикой.
        </p>
      </article>
    </div>

    <div class="gift-box-banner">
      <div>
        <span class="badge">🎁 Подарки и игрушки</span>
        <h3 style="margin-top: 8px;">Хочешь праздничный бонус к заказу?</h3>
        <p id="gift-message" class="promo-reveal" style="color: var(--text-muted);">
          Нажми на подарок, чтобы открыть новогодний сюрприз!
        </p>
      </div>
      <button type="button" class="btn btn--accent" id="open-gift-btn">
        🎁 Открыть сюрприз
      </button>
    </div>
  `;

  const button = section.querySelector<HTMLButtonElement>("#open-gift-btn");
  const message = section.querySelector<HTMLParagraphElement>("#gift-message");

  button?.addEventListener("click", () => {
    if (!message) return;
    message.className = "promo-reveal";
    message.textContent =
      "✨ С наступающим! Лови промокод SALE10 на скидку 10% в корзине и заглядывай в каталог!";
  });

  return section;
}

export function createSnowfall(): HTMLElement {
  const layer = document.createElement("div");
  layer.className = "snowfall";
  layer.setAttribute("aria-hidden", "true");

  const flakesCount = 22;
  for (let i = 0; i < flakesCount; i += 1) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = i % 3 === 0 ? "✦" : "❄";
    flake.style.left = `${(i * 4.7) % 100}%`;
    flake.style.fontSize = `${12 + (i % 4) * 4}px`;
    flake.style.opacity = `${0.45 + (i % 5) * 0.12}`;
    flake.style.animationDuration = `${7 + (i % 6) * 1.6}s`;
    flake.style.animationDelay = `${-((i % 7) * 1.1)}s`;
    layer.appendChild(flake);
  }

  return layer;
}
