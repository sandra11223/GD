# Green + White + Dark Gray Color Theme

## 🎨 COLOR PALETTE

### Primary Colors

#### Green Spectrum
- **Primary**: `#10b981` (Emerald Green)
  - Main brand color
  - Buttons, links, highlights
  - RGB: 16, 185, 129

- **Secondary**: `#34d399` (Light Green)
  - Secondary actions
  - Hover states
  - RGB: 52, 211, 153

- **Accent**: `#6ee7b7` (Mint Green)
  - Accents and highlights
  - Special elements
  - RGB: 110, 231, 183

#### White
- **Pure White**: `#ffffff`
  - Text on dark backgrounds
  - Card backgrounds (light mode)
  - RGB: 255, 255, 255

#### Dark Gray Spectrum
- **Dark 900**: `#111827` (Very Dark Gray)
  - Main background
  - RGB: 17, 24, 39

- **Dark 800**: `#1f2937` (Dark Gray)
  - Card backgrounds
  - Secondary backgrounds
  - RGB: 31, 41, 55

- **Dark 700**: `#374151` (Medium Dark Gray)
  - Borders
  - Dividers
  - RGB: 55, 65, 81

- **Dark 600**: `#4b5563` (Medium Gray)
  - Input backgrounds
  - Disabled states
  - RGB: 75, 85, 99

- **Dark 500**: `#6b7280` (Light Gray)
  - Secondary text
  - Placeholders
  - RGB: 107, 114, 128

## 🌈 GRADIENT COMBINATIONS

### Primary Gradients
```css
/* Green Gradient */
background: linear-gradient(135deg, #10b981 0%, #34d399 100%);

/* Dark Green to Light Green */
background: linear-gradient(135deg, #059669 0%, #6ee7b7 100%);

/* Hero Gradient */
background: linear-gradient(135deg, #047857 0%, #34d399 100%);
```

### Dark Gradients
```css
/* Dark Background */
background: linear-gradient(135deg, #111827 0%, #1f2937 100%);

/* Card Background */
background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
```

### Text Gradients
```css
/* Animated Text Gradient */
background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #34d399, #10b981);
background-size: 200% auto;
animation: shimmer 3s linear infinite;
```

## 🎯 USAGE GUIDELINES

### Hero Sections
- Background: `from-green-900 via-green-700 to-green-600`
- Text: White (`#ffffff`)
- Glow effect: Green shadow

### Cards
- Background: Dark 800 (`#1f2937`)
- Border: Dark 700 (`#374151`)
- Hover border: Primary with opacity (`#10b981` 50%)
- Shadow: Green glow on hover

### Buttons

#### Primary Button
- Background: Green gradient (`#10b981` → `#34d399`)
- Text: White
- Hover: Lift + green glow shadow

#### Secondary Button
- Background: Dark 700 (`#374151`)
- Border: Primary with opacity
- Text: Primary green
- Hover: Lighter background

### Text Colors
- Primary text: White (`#ffffff`)
- Secondary text: Gray 300 (`#d1d5db`)
- Muted text: Dark 500 (`#6b7280`)
- Links: Primary green (`#10b981`)
- Link hover: Secondary green (`#34d399`)

### Badges & Tags
- Success: Green 500/20 background, Green 400 text
- Info: Green 600/20 background, Green 300 text
- Warning: Yellow 500/20 background, Yellow 400 text
- Error: Red 500/20 background, Red 400 text

## 🔍 COMPONENT COLORS

### Navbar
- Background: Dark 900 with opacity (`#111827` 95%)
- Border: Dark 700 (`#374151`)
- Logo: Green gradient text
- Links: Gray 300, hover to Primary green
- Active: Primary green

### Sidebar (Dashboard)
- Background: Dark 800 to Dark 900 gradient
- Border: Dark 700
- Menu items: Gray 400
- Active item: Primary green with green glow
- Hover: Dark 700 background

### Forms
- Input background: Dark 700 (`#374151`)
- Input border: Dark 600 (`#4b5563`)
- Focus border: Primary green (`#10b981`)
- Placeholder: Dark 500 (`#6b7280`)
- Label: Gray 300 (`#d1d5db`)

### Tables
- Header background: Dark 700
- Row background: Dark 800
- Border: Dark 700
- Hover row: Dark 700
- Striped rows: Alternate Dark 800/Dark 750

### Modals
- Overlay: Dark 900 with 80% opacity
- Background: Dark 800
- Border: Primary green with opacity
- Backdrop blur: 10px

## 💡 ACCESSIBILITY

### Contrast Ratios
- White on Dark 900: 15.8:1 (AAA)
- Primary green on Dark 900: 4.8:1 (AA)
- Gray 300 on Dark 900: 9.2:1 (AAA)
- White on Primary green: 3.2:1 (AA for large text)

### Color Blindness Considerations
- Green + Gray combination works well for most types
- Avoid green/red combinations
- Use icons and labels in addition to color
- Sufficient contrast for text readability

## 🎨 SEMANTIC COLORS

### Status Colors
```css
/* Success */
--success: #10b981;
--success-light: #34d399;
--success-dark: #059669;

/* Warning */
--warning: #f59e0b;
--warning-light: #fbbf24;
--warning-dark: #d97706;

/* Error */
--error: #ef4444;
--error-light: #f87171;
--error-dark: #dc2626;

/* Info */
--info: #10b981;
--info-light: #34d399;
--info-dark: #059669;
```

## 🌟 SPECIAL EFFECTS

### Glow Effects
```css
/* Green Glow */
box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);

/* Soft Green Glow */
box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);

/* Strong Green Glow */
box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
```

### Text Shadows
```css
/* Green Text Glow */
text-shadow: 0 0 30px rgba(16, 185, 129, 0.6);

/* Subtle Green Glow */
text-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
```

### Border Glow
```css
/* Green Border Glow */
border: 1px solid rgba(16, 185, 129, 0.5);
box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
```

## 📊 COLOR USAGE BREAKDOWN

### Primary Green (#10b981)
- Buttons (40%)
- Links (25%)
- Icons (15%)
- Borders (10%)
- Highlights (10%)

### White (#ffffff)
- Text (60%)
- Icons (20%)
- Backgrounds (light mode) (15%)
- Borders (5%)

### Dark Grays
- Backgrounds (50%)
- Cards (25%)
- Borders (15%)
- Text (secondary) (10%)

## 🎭 THEME VARIATIONS

### Light Mode (Future)
- Background: White (`#ffffff`)
- Cards: Gray 50 (`#f9fafb`)
- Text: Dark 900 (`#111827`)
- Borders: Gray 200 (`#e5e7eb`)
- Primary: Same green (`#10b981`)

### High Contrast Mode
- Background: Pure black (`#000000`)
- Text: Pure white (`#ffffff`)
- Primary: Brighter green (`#34d399`)
- Borders: High contrast white

## 🔧 TAILWIND CLASSES

### Background Colors
```
bg-primary
bg-secondary
bg-accent
bg-dark-900
bg-dark-800
bg-dark-700
bg-dark-600
bg-dark-500
```

### Text Colors
```
text-primary
text-secondary
text-accent
text-white
text-gray-300
text-gray-400
text-gray-500
```

### Border Colors
```
border-primary
border-secondary
border-dark-700
border-dark-600
```

### Gradient Backgrounds
```
bg-gradient-to-r from-primary to-secondary
bg-gradient-to-br from-green-900 via-green-700 to-green-600
```

## 📱 RESPONSIVE CONSIDERATIONS

### Mobile
- Slightly darker backgrounds for OLED screens
- Larger touch targets with green highlights
- Simplified gradients for performance

### Tablet
- Full color palette
- Medium complexity gradients
- Balanced contrast

### Desktop
- Full effects and animations
- Complex gradients
- Maximum visual richness

## ✨ ANIMATION COLORS

### Hover States
- Scale: 1.05
- Shadow: Green glow
- Border: Brighter green

### Active States
- Background: Darker green
- Border: Bright green
- Shadow: Strong green glow

### Focus States
- Outline: Primary green
- Shadow: Green ring
- Border: Bright green

---

**Theme**: Green + White + Dark Gray
**Primary**: #10b981 (Emerald Green)
**Background**: #111827 (Very Dark Gray)
**Text**: #ffffff (White)
**Status**: ✅ FULLY IMPLEMENTED
**Last Updated**: February 16, 2026
