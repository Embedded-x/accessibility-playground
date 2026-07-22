# Accessibility Playground

A React + TypeScript playground demonstrating accessible UI components built from scratch following the WAI-ARIA Authoring Practices Guide (APG).

## Overview

This project implements three accessible interactive components without using any component libraries:

- Modal Dialog
- Tabs
- Disclosure (Accordion)

The focus of the project is accessibility, keyboard navigation, proper ARIA usage, and focus management.

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS

---

## Components

### 1. Modal Dialog

Features:

- Opens and closes using buttons
- Closes with the **Escape** key
- Focus is trapped inside the dialog while open
- Focus returns to the trigger button when closed
- Uses:
  - `role="dialog"`
  - `aria-modal="true"`

---

### 2. Tabs

Features:

- Keyboard navigation
  - Arrow Left
  - Arrow Right
  - Home
  - End
- Proper WAI-ARIA roles:
  - `tablist`
  - `tab`
  - `tabpanel`
- Roving `tabIndex`
- Selected tab is synchronized with its panel

---

### 3. Disclosure

Features:

- Expand/collapse content
- Keyboard accessible
- Uses:
  - `aria-expanded`
  - `aria-controls`

---

## Accessibility Features

- Keyboard-only operation
- Focus management
- Focus trapping (Modal)
- Focus restoration after closing Modal
- WAI-ARIA compliant roles and attributes
- Semantic HTML elements
- TypeScript implementation without using `any` in component props

---

## Project Structure

```
playground/
│
├── src/
│   ├── Modal.tsx
│   ├── Tabs.tsx
│   ├── Disclosure.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── components.css
│
├── public/
├── NOTES.md
├── package.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Learning Outcomes

This project demonstrates:

- Accessible React component development
- WAI-ARIA Authoring Practices
- Keyboard interaction patterns
- Focus management
- React Hooks
- TypeScript component design

---

## Notes

A comparison between this implementation and the generated shadcn/ui components is included in **NOTES.md**.