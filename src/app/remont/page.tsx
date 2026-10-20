export const metadata = {
  title: "Мастер по ремонту квартир — «Чистая работа»",
  description:
    "Ремонт квартир и комнат под ключ за 30 дней. Смета без сюрпризов, договор, гарантия 2 года. Бесплатный выезд замерщика.",
};

const services = [
  { name: "Косметический ремонт", desc: "Покраска, обои, потолки — обновим вид без больших затрат", price: "от 3 500 ₽/м²" },
  { name: "Капитальный ремонт", desc: "Стяжка, штукатурка, электрика, сантехника — всё по уму", price: "от 7 000 ₽/м²" },
  { name: "Ремонт под ключ", desc: "От чернового пола до финальной уборки. Вам остаётся только заехать", price: "от 12 000 ₽/м²" },
  { name: "Санузлы", desc: "Плитка, гидроизоляция, замена труб — не протечёт", price: "от 45 000 ₽" },
];

const steps = [
  { n: "1", title: "Бесплатный выезд", desc: "Замерщик приедет в удобное время, всё осмотрит и ответит на вопросы" },
  { n: "2", title: "Смета и договор", desc: "Фиксируем цену и сроки письменно. Цена не вырастет в процессе" },
  { n: "3", title: "Работа", desc: "Фотоотчёт каждый день в мессенджер. Вы всегда знаете, что происходит" },
  { n: "4", title: "Сдача и гарантия", desc: "Убираем за собой. Гарантия на работы — 2 года" },
];

export default function Remont() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-foreground/10">
        <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">Чистая работа</span>
          <a
            href="#zayavka"
            className="rounded-full bg-accent text-white px-5 py-2 text-sm font-medium hover:opacity-90"
          >
            Оставить заявку
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <p className="text-accent font-medium uppercase tracking-widest text-sm">
          Ремонт квартир и комнат · Гарантия 2 года
        </p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">
          Ремонт под ключ за 30 дней
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
          Договор и фиксированная смета. Не сорвём сроки — за каждый день
          просрочки платим мы, а не вы.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#zayavka"
            className="rounded-full bg-accent text-white px-8 py-3 font-medium hover:opacity-90"
          >
            Рассчитать смету
          </a>
          <a
            href="#raboty"
            className="rounded-full border border-foreground/20 px-8 py-3 font-medium hover:border-accent hover:text-accent"
          >
            Наши работы
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 grid gap-4 sm:grid-cols-3 text-center">
        {[
          ["15 лет", "опыта в ремонте"],
          ["180+", "сданных объектов"],
          ["0 ₽", "за выезд замерщика"],
        ].map(([big, small]) => (
          <div key={small} className="rounded-2xl bg-white p-6 border border-foreground/5 shadow-sm">
            <p className="text-3xl font-bold text-accent">{big}</p>
            <p className="mt-2 text-sm text-foreground/60">{small}</p>
          </div>
        ))}
      </section>

      <section id="raboty" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Услуги и цены</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl bg-white p-6 shadow-sm border border-foreground/5">
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-accent font-bold whitespace-nowrap">{s.price}</span>
              </div>
              <p className="mt-2 text-sm text-foreground/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-3xl font-bold">Как мы работаем</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-4">
            {steps.map((st) => (
              <div key={st.n}>
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  {st.n}
                </div>
                <h3 className="mt-4 font-semibold">{st.title}</h3>
                <p className="mt-2 text-sm opacity-70">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zayavka" className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl bg-accent text-white p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold">Узнайте стоимость вашего ремонта</h2>
          <p className="mt-4 opacity-80 max-w-lg mx-auto">
            Оставьте номер — перезвоним за 15 минут и договоримся о бесплатном замере.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" action="tel:+79990000000">
            <input
              type="tel"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              className="rounded-full px-6 py-3 text-foreground bg-white w-full sm:w-72 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white text-accent px-8 py-3 font-medium hover:opacity-90"
            >
              Жду звонка
            </button>
          </form>
          <p className="mt-4 text-sm opacity-60">Никакого спама. Один звонок — и всё.</p>
        </div>
      </section>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-foreground/50">
          © 2026 Мастер по ремонту «Чистая работа» · +7 (999) 000-00-00
        </div>
      </footer>
    </div>
  );
}
