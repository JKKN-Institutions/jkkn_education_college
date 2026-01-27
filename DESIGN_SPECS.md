# Design Specifications - JKKN College Header

## 🎨 Color Palette

| Element | Color Code | Usage |
|---------|------------|-------|
| Primary Green | `#1e7f4e` | Logo crown, "JKKN" text |
| Pink/Magenta | `#e91e63` | "College of Education" text |
| Dark Gray | `#1f2937` | Navigation text |
| White | `#ffffff` | Background |

## 📐 Header Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] JKKN            HOME  ABOUT▼  DEPARTMENTS▼  GALLERY     │
│         College of      FACILITIES▼  OTHERS▼  CONTACT      [🔍] │
│         Education                                                │
└─────────────────────────────────────────────────────────────────┘
```

## 🏛️ Logo Structure

```
    👑 (Green Crown)
   JKKN (Green, Bold, 24px)
College of Education (Pink, 14px)
```

## 📱 Navigation Items

| Menu Item | Has Dropdown | Link |
|-----------|--------------|------|
| HOME | No | / |
| ABOUT | Yes ▼ | /about |
| DEPARTMENTS | Yes ▼ | /departments |
| GALLERY | No | /gallery |
| FACILITIES | Yes ▼ | /facilities |
| OTHERS | Yes ▼ | /others |
| CONTACT | No | /contact |

## 📏 Dimensions

- **Header Height**: 80px (20 in Tailwind units)
- **Logo Width**: 60px
- **Max Container Width**: 1280px (7xl in Tailwind)
- **Navigation Spacing**: 32px between items (space-x-8)
- **Mobile Breakpoint**: 1024px (lg in Tailwind)

## 🎭 Typography

| Element | Font Size | Font Weight | Color |
|---------|-----------|-------------|-------|
| JKKN | 24px (text-2xl) | Bold (700) | #1e7f4e |
| College of Education | 14px (text-sm) | Semi-bold (600) | #e91e63 |
| Navigation Items | 14px (text-sm) | Semi-bold (600) | #1f2937 |

## 🔄 Responsive Behavior

### Desktop (≥ 1024px)
- Full horizontal navigation
- Logo on left
- Menu items in center
- Search icon on right
- Dropdown arrows visible

### Mobile/Tablet (< 1024px)
- Hamburger menu button
- Slide-down menu on click
- Vertical navigation list
- Search option in menu
- Full-width layout

## ✨ Interactive States

### Hover Effects
- **Navigation Links**: Color changes to lighter gray
- **Search Icon**: Subtle color change
- **Mobile Menu Items**: Light gray background

### Transitions
- **Duration**: 200ms
- **Easing**: Default ease

## 🎯 Exact Match Checklist

✅ Green crown logo
✅ "JKKN" in green, bold
✅ "College of Education" in pink
✅ Navigation items: HOME, ABOUT, DEPARTMENTS, GALLERY, FACILITIES, OTHERS, CONTACT
✅ Dropdown arrows (▼) on ABOUT, DEPARTMENTS, FACILITIES, OTHERS
✅ Search icon on right
✅ White background
✅ Sticky header (stays on top when scrolling)
✅ Responsive mobile menu
✅ Clean, professional spacing
✅ Proper font weights and sizes

## 📦 Component Location

Main header component: `components/Header.tsx`

## 🔧 Customization Points

To modify the header, edit:
- **Colors**: `components/Header.tsx` (inline styles and Tailwind classes)
- **Logo**: `components/Header.tsx` (SVG crown path)
- **Menu Items**: `navItems` array in `components/Header.tsx`
- **Spacing**: Tailwind classes in `components/Header.tsx`

---

**Design Status**: ✅ Exact match achieved
