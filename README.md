# Adrián Varga - Real Estate Website

Профессиональный одностраничный сайт для Adrián Varga, специалиста по недвижимости в Братиславе.

## Концепция дизайна

### Стиль: Exaggerated Minimalism
- Огромная типографика с акцентом на имени
- Высокий контраст между элементами
- Много whitespace для элегантности
- Плавные переходы между секциями (без резких границ)
- Профессиональные цвета: Teal (#0F766E) + Blue (#0369A1)

### Типографика
- **Заголовки**: Cinzel (элегантный serif для luxury брендов)
- **Текст**: Josefin Sans (современный sans-serif)

### Цветовая палитра
- **Primary**: #0F766E (Trust Teal)
- **Secondary**: #14B8A6 (Light Teal)
- **Accent**: #0369A1 (Professional Blue)
- **Background**: #F0FDFA (Soft Cyan)
- **Text**: #134E4A (Dark Teal)

## Структура сайта

### 1. Hero Section
- Огромное имя "Adrián Varga" с анимацией
- Location badge "Bratislava"
- Слоган на словацком языке
- CTA кнопки: "Začnime spolu" и "Zistite viac"
- Фоновые gradient эффекты

### 2. Stats Section
- 10+ Rokov skúseností
- 200+ Spokojných klientov
- 150+ Predaných nehnuteľností

### 3. About Section
- История и expertise Adrián Varga
- Философия работы
- **ТРЕБУЕТСЯ ФОТО**: Профессиональное портретное фото Adrián Varga (рекомендуемый размер: 800x800px)

### 4. Services Section
Шесть ключевых услуг:
- Hľadanie nehnuteľnosti
- Predaj nehnuteľnosti
- Právne poradenstvo
- Ocenenie nehnuteľnosti
- Prenájom
- Investičné poradenstvo

### 5. Process Section
4 этапа работы:
1. Konzultácia
2. Vyhľadávanie
3. Prehliadky
4. Uzavretie

### 6. Portfolio Section
**ТРЕБУЕТСЯ 6 ФОТО**: Фотографии успешно проданных/сданных в аренду объектов недвижимости
- Рекомендуемый размер: 1200x900px (landscape)
- Профессиональные фото экстерьера и интерьера
- Желательно: различные типы недвижимости (квартиры, дома, коммерческая)

### 7. Contact Section
Контактная форма с полями:
- Meno (Имя)
- Email
- Telefón
- Správa (Сообщение)

Контактная информация:
- **Телефон**: +421 XXX XXX XXX (нужно обновить)
- **Email**: adrian@example.com (нужно обновить)
- **Адрес**: Bratislava, Slovensko
- **Рабочее время**: Понедельник-Пятница 9:00-18:00

## Необходимые фотографии

### 1. Профессиональное фото Adrián Varga
- **Местоположение**: Section "O mne" (About)
- **Формат**: JPG/PNG
- **Размер**: 800x800px (квадратное)
- **Требования**: Профессиональная фотосессия, деловой стиль, нейтральный фон или офис
- **Путь**: Сохраните в `/public/images/adrian-varga-portrait.jpg`

### 2. Фотографии портфолио (6 шт)
- **Местоположение**: Section "Portfólio"
- **Формат**: JPG
- **Размер**: 1200x900px (landscape) или 4:3 ratio
- **Требования**:
  - Профессиональные фото недвижимости
  - Хорошее освещение
  - Различные типы объектов
  - Примеры: квартиры, дома, пентхаусы, коммерческая недвижимость
- **Пути**:
  - `/public/images/property-1.jpg`
  - `/public/images/property-2.jpg`
  - `/public/images/property-3.jpg`
  - `/public/images/property-4.jpg`
  - `/public/images/property-5.jpg`
  - `/public/images/property-6.jpg`

### 3. Favicon (опционально)
- **Формат**: ICO или PNG
- **Размер**: 32x32px, 64x64px
- **Путь**: `/app/favicon.ico` (уже есть стандартный, можно заменить)

## Как добавить фотографии

1. Создайте папку `public/images/` в корне проекта
2. Добавьте фотографии с указанными именами
3. Откройте `app/page.tsx` и обновите секции:

### Для портрета (строка ~120):
```tsx
<div className="relative h-96 rounded-3xl overflow-hidden">
  <Image
    src="/images/adrian-varga-portrait.jpg"
    alt="Adrián Varga"
    fill
    className="object-cover"
  />
</div>
```

### Для портфолио (строка ~242):
```tsx
<div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
  <Image
    src={`/images/property-${item}.jpg`}
    alt={`Projekt ${item}`}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
    {/* ... overlay content ... */}
  </div>
</div>
```

## Обновление контактной информации

Откройте `app/page.tsx` и обновите:

### Телефон (строка ~293):
```tsx
<a href="tel:+421XXXXXXXXX" className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
  +421 XXX XXX XXX
</a>
```

### Email (строка ~305):
```tsx
<a href="mailto:adrian@realnyemail.sk" className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
  adrian@realnyemail.sk
</a>
```

### Адрес (строка ~317):
```tsx
<p className="text-foreground/70">
  Полный адрес офиса<br />
  Братислава, Словакия
</p>
```

## Настройка формы контакта

Текущая форма использует `console.log` для отправки. Для production нужно:

1. **Вариант 1: EmailJS** (самый простой)
   ```bash
   npm install @emailjs/browser
   ```

2. **Вариант 2: Resend** (современный)
   ```bash
   npm install resend
   ```

3. **Вариант 3: SendGrid** (enterprise)
   ```bash
   npm install @sendgrid/mail
   ```

## Запуск проекта

### Development
```bash
npm run dev
```
Откройте [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

### Deploy на Vercel
```bash
npm i -g vercel
vercel
```

## Особенности дизайна

### Accessibility
- Smooth scroll с поддержкой `prefers-reduced-motion`
- Правильные контрастные соотношения (WCAG AA)
- Focus states для keyboard navigation
- Semantic HTML с aria-labels
- Все формы имеют labels

### Responsive Design
- Mobile-first подход
- Breakpoints: 375px, 768px, 1024px, 1440px
- Адаптивная типографика с `clamp()`
- Оптимизация для touch устройств

### Performance
- Lucide иконки (легковесные SVG)
- CSS transitions вместо JavaScript анимаций
- Оптимизированные шрифты Google Fonts
- Dark mode support

### Icons
Используются Lucide React иконки:
- Home, Building2 - недвижимость
- TrendingUp - рост стоимости
- Shield - защита интересов
- Search - поиск
- FileCheck - документация
- Key - ключи от дома
- Mail, Phone, MapPin - контакты
- Award, Users, Clock - статистика

## Дополнительные улучшения (опционально)

1. **Интеграция с CRM**: Подключить форму к вашей CRM системе
2. **Google Analytics**: Добавить отслеживание посетителей
3. **SEO оптимизация**: Добавить Open Graph tags и structured data
4. **Blog секция**: Добавить статьи о рынке недвижимости
5. **Property listings**: Интеграция с API для автоматического обновления объектов
6. **Virtual tours**: Добавить 360° туры по объектам
7. **Calculator**: Ипотечный калькулятор
8. **Testimonials**: Отзывы клиентов
9. **Multilingual**: Добавить английский язык

## Технологический стек

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cinzel, Josefin Sans)
- **Language**: TypeScript
- **Deployment**: Vercel (рекомендуется)

## Поддержка браузеров

- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

## Лицензия

Все права защищены © 2026 Adrián Varga
