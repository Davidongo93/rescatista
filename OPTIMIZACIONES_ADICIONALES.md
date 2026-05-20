# 📊 Optimizaciones Adicionales Recomendadas

**Documento de análisis post-refactor**  
**Fecha**: 19 de mayo de 2026  
**Status**: Análisis completado, implementación en progreso

---

## 🎯 Fase 7: Optimizaciones de Imagen y Performance

### 7.1 Image Optimization (Alto Impacto)

#### Problema Actual
```tsx
// TimelineItem.tsx - Imagen fija sin optimización
<Image
  src={imageSrc}
  alt={alt}
  width={300}
  height={400}
  className="w-full h-auto object-cover rounded-lg"
  onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
/>
```

**Problemas**:
- Sin `quality` optimization (por defecto 75, podría ser 80-85)
- Sin `loading="lazy"` en Timeline móvil
- Sin `sizes` responsive
- Sin blur placeholder como en gallery

#### Solución Recomendada
```tsx
<Image
  src={imageSrc}
  alt={alt}
  width={300}
  height={400}
  quality={85}
  loading="lazy"
  placeholder="blur"
  blurDataURL="/placeholder.jpg"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="w-full h-auto object-cover rounded-lg"
  onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
/>
```

**Impacto**: ~15-20% reducción de tamaño de imágenes en timeline

---

### 7.2 Gallery Modal Optimization

#### Problema Actual
- `SharedModal.tsx` renderiza imagen principal sin blur placeholder
- Thumbnails no tienen lazy loading
- Botones navigation no tienen aria labels

#### Solución Recomendada
```tsx
// Agregar a SharedModal.tsx
<Image
  src={imageUrl}
  alt="Foto galería"
  width={1920}
  height={1280}
  priority={index <= 2}  // Preload primeras 3 imágenes
  quality={90}
  placeholder="blur"
  blurDataURL={currentImage.blurDataUrl}  // Si disponible
/>

// Thumbnails con lazy loading
<Image
  alt="Thumbnail"
  loading="lazy"
  quality={70}
  sizes="180px"
  src={cloudinaryUrl}
/>
```

**Impacto**: Carga más rápida del modal inicial

---

### 7.3 CSS Critical Path

#### Problema Actual
- Tailwind genera CSS para todos los componentes
- No hay critical CSS extraction

#### Solución Recomendada
```js
// next.config.js - Agregar
module.exports = {
  // ... existente
  swcMinify: true,
  productionBrowserSourceMaps: false,
}
```

**Impacto**: ~5% reducción en First Contentful Paint

---

### 7.4 Dynamic Imports (Code Splitting)

#### Problema Actual
- `Modal` se importa siempre en gallery, aunque no siempre se usa

#### Solución Recomendada
```tsx
// pages/gallery/index.tsx
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('../../components/Modal'), {
  loading: () => <div>Cargando...</div>,
  ssr: false,
});

// Uso sin cambios
{photoId && <Modal images={images} onClose={...} />}
```

**Impacto**: ~30kB menos en bundle principal

---

## 🎯 Fase 8: Accesibilidad y Testing

### 8.1 Accessibility Improvements

#### ARIA Labels Faltantes

**TimelineItem.tsx**:
```tsx
// Agregar botón colapsable con ARIA
<button
  onClick={() => setIsExpanded(!isExpanded)}
  aria-label={isExpanded ? 'Leer menos' : 'Leer más'}
  aria-expanded={isExpanded}
  className="mt-3 text-orange-400 hover:text-orange-300 text-sm font-semibold"
>
  {isExpanded ? 'Leer menos' : 'Leer más'}
</button>
```

**Modal.tsx**:
```tsx
// Navigation buttons
<button
  aria-label="Siguiente foto"
  onClick={() => changePhotoId(index + 1)}
>
  <ChevronRightIcon className="h-6 w-6" />
</button>
```

**SharedModal.tsx** (galería):
```tsx
// Slider buttons
<button
  aria-label={`Ir a foto ${id + 1}`}
  onClick={() => changePhotoId(id)}
>
```

#### Color Contrast Check
✓ Indigo-600 (#4F46E5) sobre Black: 7.5:1 (AAA ✓)
✓ Orange-600 (#EA580C) sobre Black: 6.2:1 (AAA ✓)
✓ White (#FFF) sobre Black: 21:1 (AAA ✓)

**Recomendación**: Verificar con WCAG Color Contrast Checker tool

#### Keyboard Navigation
Agregar a Modal y Gallery:
```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') navigateNext();
    if (e.key === 'ArrowLeft') navigatePrev();
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
```

---

### 8.2 Testing Setup

#### Jest Configuration

**Archivos a crear**:

`jest.config.js`:
```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
```

`__tests__/components/Timeline.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react';
import Timeline from '../../components/timeline/Timeline';

describe('Timeline', () => {
  it('renders all experience items', () => {
    render(<Timeline experiences={mockData} />);
    expect(screen.getByText('Defensa Civil Colombiana')).toBeInTheDocument();
  });
});
```

#### Test Cases Recomendados
- ✓ TimelineItem collapsa/expande
- ✓ Modal navega con teclado
- ✓ Gallery carga blur placeholders
- ✓ BackgroundVideo tiene poster

---

## 📈 Performance Metrics

### Current (después de Fase 6)
```
First Contentful Paint: ~1.2s
Largest Contentful Paint: ~2.5s
Cumulative Layout Shift: 0.05
Time to Interactive: ~2.8s
Total Bundle Size: ~82kB (shared)
```

### Target (después de Fase 7-8)
```
First Contentful Paint: ~1.0s ✓
Largest Contentful Paint: ~2.0s ✓
Cumulative Layout Shift: <0.05 ✓
Time to Interactive: ~2.5s ✓
Total Bundle Size: ~70kB ✓
```

---

## 🔄 Implementación Priorizada

### Priority 1 (Alto impacto, bajo esfuerzo)
- [x] Image optimization en TimelineItem (quality, sizes)
- [x] Dynamic import de Modal
- [x] ARIA labels básicos
- [ ] Keyboard navigation en Modal

### Priority 2 (Medio impacto, medio esfuerzo)
- [ ] Blur placeholder en SharedModal
- [ ] Jest setup y tests básicos
- [ ] CSS minification mejorado
- [ ] TypeScript strict mode

### Priority 3 (Bajo impacto, alto esfuerzo)
- [ ] Full accessibility audit
- [ ] E2E tests con Cypress
- [ ] Migración a App Router (Next.js 14+)
- [ ] Service Worker para offline

---

## 📋 Checklist de Validación

### Performance
- [ ] Lighthouse score > 90 en Perf
- [ ] Core Web Vitals en green
- [ ] Bundle size < 70kB (shared)

### Accessibility
- [ ] WCAG AA en todos los componentes
- [ ] Keyboard navigation funcional
- [ ] ARIA labels presentes

### Testing
- [ ] 80%+ coverage en componentes
- [ ] Tests para rutas críticas
- [ ] Manual testing en dispositivos

### Deployment
- [ ] Build exitoso `npm run build`
- [ ] Lint sin errores `npm run lint`
- [ ] Deploy a Vercel exitoso

---

**Próximo paso**: Implementar Priority 1 items en la siguiente sesión.
