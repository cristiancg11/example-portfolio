# Portfolio Components Structure

This document describes the component organization and structure of the portfolio application.

## Component Organization

The portfolio has been refactored into organized, reusable components located in the `src/components/` directory:

### Core Components

1. **ThemeToggle** (`ThemeToggle.tsx`)
   - Fixed position toggle button in the top-right corner
   - Switches between light and dark modes
   - Uses sun/moon icons for visual feedback
   - Remembers user preference in localStorage

2. **Avatar** (`Avatar.tsx`)
   - Displays the profile image
   - Responsive design with proper aspect ratio
   - Dark mode support

3. **Introduction** (`Introduction.tsx`)
   - Displays the main introduction text
   - Takes intro text as a prop for internationalization

4. **Interests** (`Interests.tsx`)
   - Shows user interests with icons
   - Displays as a horizontal list with styled tags

### Experience Components

5. **ExperienceCard** (`ExperienceCard.tsx`)
   - Reusable component for work experience entries
   - Displays title, role, period, and bullet points
   - Used for both freelance and company experience

### Tools Components

6. **ToolsList** (`ToolsList.tsx`)
   - Displays design and editing tools
   - Customizable colors for each tool
   - Used for both design tools and editing tools

### Education Component

7. **Education** (`Education.tsx`)
   - Displays education history
   - Shows multiple education entries in a vertical layout
   - Includes title, field, location, and period

### Languages Component

8. **Languages** (`Languages.tsx`)
   - Displays language flags
   - Simple horizontal list layout

## Theme System

### Theme Context (`src/contexts/ThemeContext.tsx`)
- Provides theme state management
- Handles localStorage persistence
- Detects system preference on first load
- Prevents hydration mismatches

### Dark Mode Support
- CSS variables for consistent theming
- Smooth transitions between modes
- Tailwind dark mode classes
- Automatic system preference detection

## Usage

All components are properly typed with TypeScript interfaces and use Tailwind CSS for styling. The components are designed to be:

- **Reusable**: Can be used in different contexts
- **Accessible**: Proper ARIA labels and semantic HTML
- **Responsive**: Work on different screen sizes
- **Themeable**: Support both light and dark modes
- **Internationalized**: Accept text content as props

## File Structure

```
src/
├── components/
│   ├── Avatar.tsx
│   ├── Education.tsx
│   ├── ExperienceCard.tsx
│   ├── Introduction.tsx
│   ├── Interests.tsx
│   ├── Languages.tsx
│   ├── LanguageSwitcher.tsx (existing)
│   ├── ThemeToggle.tsx
│   └── ToolsList.tsx
├── contexts/
│   └── ThemeContext.tsx
└── app/
    ├── [lang]/
    │   └── page.tsx (refactored)
    └── layout.tsx (updated with ThemeProvider)
```
