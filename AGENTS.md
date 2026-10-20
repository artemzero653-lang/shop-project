# AGENTS.md — общая информация по проекту

## Что это
Интернет-магазин для клиентов/заказчиков. Проект для человека, начинающего в вайб-кодинге: важны объяснения шагов и маленькие итерации, а не скорость.

## Стек
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase (БД + авторизация + хранение файлов)
- Хостинг: Vercel, репозиторий на GitHub

## Структура
- `first-plan.md` — декомпозированный план работ по этапам. Обновлять статус этапов здесь.
- `src/app/` — страницы приложения
- Документация проекта (этот файл) — поддерживать в актуальном состоянии при изменении стека или структуры

## Правила работы
- Двигаться итеративно: один небольшой шаг за раз, после каждого — показывать результат и объяснять, что сделано
- Не добавлять библиотеки без обсуждения
- Не коммитить без явной просьбы
- Секреты (ключи Supabase и т.п.) хранить только в `.env.local`, этот файл не коммитить
- Комментарии в коде не писать, кроме случаев, когда новичку это попросили объяснить
- После изменений запускать `npm run build` (или dev-сервер) для проверки

## Статус
Этап 0 плана — в работе.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
