const menu = [
  { name: "Эспрессо", desc: "Классика, плотный и насыщенный", price: "150 ₽" },
  { name: "Капучино", desc: "Бархатная молочная пена", price: "250 ₽" },
  { name: "Латте на фундучном молоке", desc: "Наш хит сезона", price: "320 ₽" },
  { name: "Фильтр-кофе V60", desc: "Зерно недели, фруктовые ноты", price: "280 ₽" },
  { name: "Круассан с миндалём", desc: "Печём каждое утро", price: "190 ₽" },
  { name: "Сырники со сметаной", desc: "Домашние завтраки весь день", price: "350 ₽" },
];

export default function Home() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-foreground/10">
        <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">Зерно</span>
          <nav className="flex gap-6 text-sm">
            <a href="#menu" className="hover:text-accent">Меню</a>
            <a href="#about" className="hover:text-accent">О нас</a>
            <a href="#contacts" className="hover:text-accent">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <p className="text-accent font-medium uppercase tracking-widest text-sm">
          Обжариваем сами · Варим с любовью
        </p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">
          Кофейня «Зерно»
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
          Свежая обжарка, завтраки весь день и лучшая чашка капучино
          в вашем районе. Заходите — пахнет хлебом и кофе.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#menu"
            className="rounded-full bg-accent text-white px-8 py-3 font-medium hover:opacity-90"
          >
            Смотреть меню
          </a>
          <a
            href="#contacts"
            className="rounded-full border border-foreground/20 px-8 py-3 font-medium hover:border-accent hover:text-accent"
          >
            Как нас найти
          </a>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Меню</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-6 shadow-sm border border-foreground/5"
            >
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-accent font-bold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-4 py-20 grid gap-10 sm:grid-cols-3 text-center">
          <div>
            <p className="text-4xl font-bold text-accent">2019</p>
            <p className="mt-2 text-sm opacity-70">варим кофе с этого года</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">12 сортов</p>
            <p className="mt-2 text-sm opacity-70">зерна в нашей обжарке</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">8:00–22:00</p>
            <p className="mt-2 text-sm opacity-70">открыты без выходных</p>
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Контакты</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 border border-foreground/5">
            <p className="font-semibold">Адрес</p>
            <p className="mt-2 text-foreground/70">
              ул. Центральная, 12, первый этаж
            </p>
            <p className="mt-4 font-semibold">Телефон</p>
            <p className="mt-2 text-foreground/70">+7 (999) 000-00-00</p>
          </div>
          <div className="rounded-2xl bg-accent text-white p-6 flex flex-col justify-center">
            <p className="text-lg font-semibold">Забронируйте столик</p>
            <p className="mt-2 opacity-80">Позвоните или просто приходите — места почти всегда есть.</p>
            <a
              href="tel:+79990000000"
              className="mt-4 inline-block w-fit rounded-full bg-white text-accent px-6 py-2 font-medium"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-foreground/50">
          © 2026 Кофейня «Зерно». Сделано с любовью к кофе.
        </div>
      </footer>
    </div>
  );
}
