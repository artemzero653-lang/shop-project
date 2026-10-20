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
    <div className="flex-1 bg-[#12151c] text-[#e8eaef]">
      <header className="sticky top-0 z-10 bg-[#12151c]/90 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            Чистая<span className="text-[#f5a623]">работа</span>
          </span>
          <nav className="hidden sm:flex gap-6 text-sm text-white/70">
            <a href="#uslugi" className="hover:text-white">Услуги</a>
            <a href="#kak" className="hover:text-white">Как работаем</a>
            <a href="#zayavka" className="hover:text-white">Контакты</a>
          </nav>
          <a
            href="#zayavka"
            className="rounded-lg bg-[#f5a623] text-[#12151c] px-5 py-2 text-sm font-semibold hover:brightness-110"
          >
            Заявка
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block rounded-full bg-[#f5a623]/15 text-[#f5a623] px-4 py-1.5 text-sm font-semibold">
              Гарантия 2 года · Договор
            </p>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
              Ремонт под ключ <span className="text-[#f5a623]">за 30 дней</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-md">
              Фиксированная смета и договор. Не сорвём сроки — за каждый день
              просрочки платим мы, а не вы.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#zayavka"
                className="rounded-lg bg-[#f5a623] text-[#12151c] px-8 py-3.5 font-semibold hover:brightness-110"
              >
                Рассчитать смету
              </a>
              <a
                href="#uslugi"
                className="rounded-lg border border-white/25 px-8 py-3.5 font-medium hover:border-[#f5a623] hover:text-[#f5a623]"
              >
                Услуги и цены
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["15 лет", "опыта в ремонте"],
              ["180+", "сданных объектов"],
              ["0 ₽", "за выезд замерщика"],
              ["×1", "смена бригады не нужна"],
            ].map(([big, small]) => (
              <div key={small} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <p className="text-3xl font-bold text-[#f5a623]">{big}</p>
                <p className="mt-2 text-sm text-white/50">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="uslugi" className="border-t border-white/10 bg-[#171b24]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold">Услуги и цены</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl bg-[#12151c] border border-white/10 p-7 hover:border-[#f5a623]/50 transition-colors"
              >
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="font-semibold text-lg">{s.name}</h3>
                  <span className="text-[#f5a623] font-bold whitespace-nowrap">{s.price}</span>
                </div>
                <p className="mt-3 text-sm text-white/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kak" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Как мы работаем</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-4">
          {steps.map((st, i) => (
            <div key={st.n} className="relative">
              <div className="w-11 h-11 rounded-lg bg-[#f5a623] text-[#12151c] flex items-center justify-center font-bold text-lg">
                {st.n}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-5 left-14 right-0 h-px bg-white/15" />
              )}
              <h3 className="mt-4 font-semibold">{st.title}</h3>
              <p className="mt-2 text-sm text-white/50">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="zayavka" className="bg-[#171b24] border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">Узнайте стоимость вашего ремонта</h2>
          <p className="mt-4 text-white/60">
            Оставьте номер — перезвоним за 15 минут и договоримся о бесплатном замере.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" action="tel:+79990000000">
            <input
              type="tel"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              className="rounded-lg px-6 py-3.5 text-white bg-[#12151c] border border-white/15 w-full sm:w-72 outline-none focus:border-[#f5a623]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#f5a623] text-[#12151c] px-8 py-3.5 font-semibold hover:brightness-110"
            >
              Жду звонка
            </button>
          </form>
          <p className="mt-4 text-sm text-white/40">Никакого спама. Один звонок — и всё.</p>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-white/40">
          © 2026 Мастер по ремонту «Чистая работа» · +7 (999) 000-00-00
        </div>
      </footer>
    </div>
  );
}
