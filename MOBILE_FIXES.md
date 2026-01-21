# Mobile Responsiveness Fixes - Raga Malak Store

## Критические проблемы

### 1. Header - Логотип наезжает на корзину

**Проблема**: На мобильных устройствах логотип, hamburger и cart не имеют правильных отступов и накладываются друг на друга.

**Файлы**: `Header.jsx`, `Header.css`

**Исправления**:
```css
.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 15px; /* ДОБАВИТЬ gap между элементами */
}

.mobile-logo {
  flex-shrink: 0;
  max-width: 80px; /* Ограничить ширину логотипа */
}

.mobile-cart {
  flex-shrink: 0;
  min-width: 60px; /* Минимальная ширина для cart */
  text-align: right;
}

.hamburger {
  flex-shrink: 0;
  width: 44px;  /* Увеличить touch target до 44x44 */
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

### 2. ProductDetail - Огромные фото скрывают информацию

**Проблема**: На мобильных пользователь видит только огромное фото и должен скроллить километры, чтобы добраться до информации о товаре.

**Файлы**: `ProductDetail.jsx`, `ProductDetail.css`

**Решение**: На мобильных показывать сначала информацию, потом галерею ИЛИ ограничить высоту первого фото.

**Вариант A - CSS Grid reorder**:
```css
@media (max-width: 768px) {
  .product-content {
    display: flex;
    flex-direction: column;
  }

  .product-info {
    order: 1; /* Информация ПЕРВАЯ */
  }

  .product-gallery {
    order: 2; /* Галерея ВТОРАЯ */
  }
}
```

**Вариант B - Ограничить высоту галереи**:
```css
@media (max-width: 768px) {
  .product-gallery {
    max-height: 50vh; /* Максимум 50% экрана */
    overflow: hidden;
    position: relative;
  }

  .product-gallery::after {
    content: 'Scroll for more photos';
    position: absolute;
    bottom: 0;
    /* индикатор что есть еще фото */
  }
}
```

**Рекомендация**: Использовать Вариант A + sticky кнопка "Add to Cart".

---

### 3. Z-Index конфликты в Header

**Проблема**: Overlay и header имеют одинаковый z-index (100).

**Исправление**:
```css
.header { z-index: 100; }
.nav-overlay { z-index: 150; }  /* Было 100 */
.nav-menu { z-index: 160; }     /* Было 101 */
.hamburger { z-index: 170; }    /* Было 102 */
```

---

### 4. Touch targets слишком маленькие

**Проблема**: Кнопки и ссылки меньше 44x44px - неудобно нажимать.

**Исправления**:
```css
/* Hamburger */
.hamburger {
  width: 44px;
  height: 44px;
  padding: 10px;
}

/* Nav links в мобильном меню */
@media (max-width: 768px) {
  .nav-link {
    padding: 15px 0;
    min-height: 44px;
  }
}

/* Sort button */
@media (max-width: 768px) {
  .sort-button {
    padding: 12px 16px;
    min-height: 44px;
  }
}

/* Size buttons */
@media (max-width: 768px) {
  .size-button {
    min-height: 44px;
    min-width: 44px;
  }
}
```

---

## Высокий приоритет

### 5. Add to Cart кнопка должна быть sticky на ВСЕХ мобильных

**Проблема**: Sticky только на <480px, а должно быть на всех мобильных <768px.

**Исправление**:
```css
@media (max-width: 768px) {
  .add-to-cart-button {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 20px -20px 0;
    width: calc(100% + 40px);
    border-radius: 0;
    padding: 18px;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  }
}
```

---

### 6. Grid gaps слишком большие на мобильных

**Проблема**: Много пустого пространства между карточками.

**Исправления**:
```css
@media (max-width: 768px) {
  .product-grid {
    gap: 20px 12px; /* Было 30px 15px */
  }
}

@media (max-width: 480px) {
  .product-grid {
    gap: 16px 10px; /* Было 25px 12px */
  }
}
```

---

### 7. Padding и margins слишком большие

**Исправления для App.css**:
```css
@media (max-width: 768px) {
  .main-content {
    padding: 30px 16px; /* Было 40px 20px */
  }

  .page-title {
    margin-bottom: 24px; /* Было 40px */
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 20px 12px; /* Было 30px 15px */
  }

  .page-title {
    margin-bottom: 16px; /* Было 30px */
  }
}
```

---

### 8. Sort controls margin слишком большой

**Исправление**:
```css
@media (max-width: 768px) {
  .sort-controls {
    margin-bottom: 20px; /* Было 30px */
  }
}

@media (max-width: 480px) {
  .sort-controls {
    margin-bottom: 16px; /* Было 25px */
  }
}
```

---

## Средний приоритет

### 9. Текст может выходить за границы

**Исправление для ProductCard.css**:
```css
.product-name {
  word-break: break-word;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

### 10. Нет overflow scroll в мобильном меню

**Исправление**:
```css
@media (max-width: 768px) {
  .nav-menu {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
```

---

### 11. Нет active/focus состояний для touch

**Исправление**:
```css
@media (max-width: 768px) {
  .nav-link:active,
  .product-card:active,
  .size-button:active,
  .color-swatch:active {
    opacity: 0.7;
    transform: scale(0.98);
  }
}
```

---

## Структура breakpoints

```
Desktop:     > 1024px
Tablet:      768px - 1024px
Mobile:      480px - 768px
Small Mobile: < 480px
```

---

## Чеклист исправлений

- [ ] Header: Добавить gap в mobile-header
- [ ] Header: Увеличить touch targets до 44px
- [ ] Header: Исправить z-index стэк
- [ ] Header: Добавить overflow-y в nav-menu
- [ ] ProductDetail: Переставить info выше gallery на мобильных
- [ ] ProductDetail: Сделать Add to Cart sticky на всех мобильных
- [ ] ProductGrid: Уменьшить gaps
- [ ] ProductCard: Добавить text overflow handling
- [ ] App: Уменьшить padding и margins
- [ ] Все: Добавить active состояния для touch
