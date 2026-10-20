export const metadata = {
  title: "Автосервис «Мотор» — ремонт и детейлинг автомобилей",
  description:
    "Диагностика, ремонт, химчистка и полировка кузова. Бесплатная диагностика при первом визите, гарантия на работы 6 месяцев.",
};

const services = [
  { name: "Диагностика", desc: "Полная проверка двигателя, ходовой и электроники за 40 минут", price: "1 500 ₽ · бесплатно при ремонте" },
  { name: "Ремонт ходовой", desc: "Подвеска, тормоза, рулевое — запчасти ваши, работа наша", price: "от 2 500 ₽" },
  { name: "Химчистка салона", desc: "Глубокая чистка сидений, ковров и потолка с сушкой", price: "от 6 000 ₽" },
  { name: "Полировка кузова", desc: "Убираем царапины и «голограммы», возвращаем блеск", price: "от 9 000 ₽" },
  { name: "Замена масла и ТО", desc: "По регламенту вашего авто, отметка в сервисной книжке", price: "от 1 800 ₽" },
  { name: "Керамика и защита", desc: "Защитное покрытие кузова на 12 месяцев", price: "от 15 000 ₽" },
];

const perks = [
  ["6 мес.", "гарантии на работы"],
  ["40 мин.", "и вы знаете всё о машине"],
  ["до 20%", "дешевле официального дилера"],
  ["1 день", "средний срок ремонта"],
];

export default function Avto() {
  return (
    <div className="flex-1 bg-[#0c0e12] text-[#eceef2]">
      <header className="sticky top-0 z-10 bg-[#0c0e12]/90 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight uppercase">
            Мо<span className="text-[#e03131]">тор</span>
          </span>
          <nav className="hidden sm:flex gap-6 text-sm text-white/70">
            <a href="#uslugi" className="hover:text-white">Услуги</a>
            <a href="#pochemu" className="hover:text-white">Почему мы</a>
            <a href="#zapis" className="hover:text-white">Запись</a>
          </nav>
          <a
            href="#zapis"
            className="rounded-lg bg-[#e03131] text-white px-5 py-2 text-sm font-semibold hover:brightness-110"
          >
            Записаться
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <p className="inline-block rounded-full bg-[#e03131]/15 text-[#e03131] px-4 py-1.5 text-sm font-semibold">
          Первая диагностика — бесплатно
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          Ваша машина — как новая
        </h1>
        <p className="mt-6 text-lg text-white/60 max-w-xl">
          Ремонт, обслуживание и детейлинг в одном месте. Честно скажем,
          что нужно машине, а что — только способ выкачать деньги.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#zapis"
            className="rounded-lg bg-[#e03131] text-white px-8 py-3.5 font-semibold hover:brightness-110"
          >
            Записаться на диагностику
          </a>
          <a
            href="#uslugi"
            className="rounded-lg border border-white/25 px-8 py-3.5 font-medium hover:border-[#e03131] hover:text-[#e03131]"
          >
            Услуги и цены
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#12151b]">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {perks.map(([big, small]) => (
            <div key={small}>
              <p className="text-3xl font-bold text-[#e03131]">{big}</p>
              <p className="mt-2 text-sm text-white/50">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="uslugi" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Услуги и цены</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl bg-[#12151b] border border-white/10 p-6 hover:border-[#e03131]/60 transition-colors"
            >
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <p className="mt-2 text-sm text-white/50">{s.desc}</p>
              <p className="mt-4 text-[#e03131] font-bold text-sm whitespace-nowrap">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pochemu" className="bg-[#12151b] border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 lg:grid-cols-3">
          {[
            ["Честная диагностика", "Покажем изношенные детали своими глазами и объясним, что можно отложить, а что менять срочно."],
            ["Фиксированная цена", "После диагностики называем итоговую сумму. Она не изменится в процессе работы."],
            ["Гарантия 6 месяцев", "Если что-то из нашей работы выйдет из строя — переделаем бесплатно."],
          ].map(([title, desc]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-3 text-sm text-white/50">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="zapis" className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">Запишитесь на бесплатную диагностику</h2>
        <p className="mt-4 text-white/60">
          Оставьте номер — перезвоним за 10 минут и подберём удобное время.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" action="tel:+79990000000">
          <input
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            className="rounded-lg px-6 py-3.5 text-white bg-[#12151b] border border-white/15 w-full sm:w-72 outline-none focus:border-[#e03131]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#e03131] text-white px-8 py-3.5 font-semibold hover:brightness-110"
          >
            Жду звонка
          </button>
        </form>
        <p className="mt-4 text-sm text-white/40">Без спама. Один звонок — и запись готова.</p>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-white/40">
          © 2026 Автосервис «Мотор» · +7 (999) 000-00-00 · ежедневно с 9:00 до 21:00
        </div>
      </footer>
    </div>
  );
}
