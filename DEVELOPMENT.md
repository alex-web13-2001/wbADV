# Руководство по разработке

## Статус проекта

Структура проекта создана и готова к разработке. Все конфигурационные файлы настроены согласно ТЗ.

## Что уже готово

### Backend ✅
- ✅ Структура директорий
- ✅ TypeScript конфигурация
- ✅ Package.json с зависимостями
- ✅ Типы данных (types/index.ts)
- ✅ Сервис для работы с WB API (services/wbApiService.ts)
- ✅ Middleware (errorHandler, apiKeyValidator)
- ✅ Роуты (apiKey, campaigns)
- ✅ Главный файл сервера (server.ts)
- ✅ .env.example

### Frontend ✅
- ✅ Структура директорий
- ✅ Next.js 14 конфигурация
- ✅ TypeScript конфигурация
- ✅ Tailwind CSS конфигурация
- ✅ Package.json с зависимостями
- ✅ Типы данных (types/index.ts)
- ✅ API клиент (lib/api.ts)
- ✅ Утилиты (lib/utils.ts)
- ✅ Глобальные стили (app/globals.css)
- ✅ Layout компонент (app/layout.tsx)
- ✅ Шаблоны компонентов (с TODO для реализации)

## Что нужно реализовать

### Frontend компоненты

1. **app/page.tsx** - Главная страница
   - Логика переключения между состояниями
   - Интеграция всех компонентов

2. **components/CampaignsList.tsx**
   - Загрузка списка кампаний
   - Отображение таблицы
   - Обработка кликов

3. **components/StatsOverview.tsx**
   - Загрузка статистики кампании
   - Отображение метрик
   - Интеграция графиков

4. **components/ClustersAnalytics.tsx**
   - Форма ввода nm_id
   - Загрузка кластеров
   - Отображение таблицы и графика

5. **components/Charts/CTRChart.tsx**
   - Реализация с Recharts (LineChart)

6. **components/Charts/ViewsClicksChart.tsx**
   - Реализация с Recharts (BarChart)

7. **components/Charts/ClustersChart.tsx**
   - Реализация с Recharts (BarChart horizontal)

## Установка и запуск

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend запустится на http://localhost:3001

### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend запустится на http://localhost:3000

## API Endpoints

### POST /api/test-key
Проверка API ключа Wildberries

**Body:**
```json
{
  "apiKey": "string"
}
```

### GET /api/campaigns
Получение списка кампаний

**Headers:**
```
x-api-key: <your-api-key>
```

### GET /api/campaign/:id/stats
Получение статистики кампании

**Headers:**
```
x-api-key: <your-api-key>
```

**Query params:**
- beginDate: YYYY-MM-DD
- endDate: YYYY-MM-DD

### POST /api/campaign/:id/clusters
Получение аналитики кластеров

**Headers:**
```
x-api-key: <your-api-key>
```

**Body:**
```json
{
  "nm_id": number,
  "from": "YYYY-MM-DD",
  "to": "YYYY-MM-DD"
}
```

## Технологический стек

### Backend
- Node.js 20+
- Express.js
- TypeScript
- axios
- cors
- dotenv

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Recharts
- axios

## Структура проекта

```
wbADV/
├── backend/
│   ├── src/
│   │   ├── types/          # TypeScript типы
│   │   ├── services/       # Бизнес-логика
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API роуты
│   │   └── server.ts       # Входная точка
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── frontend/
│   ├── app/               # Next.js App Router
│   ├── components/        # React компоненты
│   ├── lib/              # Утилиты и API клиент
│   ├── types/            # TypeScript типы
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── .env.local.example
├── README.md
└── DEVELOPMENT.md
```

## Важные замечания

- ❌ НЕ используйте базу данных
- ❌ НЕ храните API ключ на сервере
- ✅ Все запросы в реальном времени
- ✅ API ключ хранится только в памяти браузера
- ✅ Обрабатывайте все ошибки
- ✅ Следуйте TypeScript типизации

## Ссылки на документацию WB API

1. [Проверка баланса](https://dev.wildberries.ru/openapi/promotion#tag/Finansy/paths/~1adv~1v1~1balance/get)
2. [Список кампаний](https://dev.wildberries.ru/openapi/promotion#tag/Upravlenie-parametrami-reklamnyh-kampanii)
3. [Статистика кампаний](https://dev.wildberries.ru/openapi/promotion#tag/Statistika/paths/~1adv~1v3~1fullstats/get)
4. [Поисковые кластеры](https://dev.wildberries.ru/openapi/promotion#tag/Poiskovye-klastery/paths/~1adv~1v0~1normquery~1stats/post)

## Следующие шаги

1. Установите зависимости в обеих директориях
2. Создайте .env файлы из примеров
3. Реализуйте компоненты с TODO метками
4. Протестируйте интеграцию с WB API
5. Добавьте обработку ошибок
6. Улучшите UI/UX по необходимости

Удачи в разработке! 🚀
