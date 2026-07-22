# Accessibility Playground

An accessibility-focused React application built with **React**, **TypeScript**, and **Vite**. This project demonstrates three accessible UI components—**Modal Dialog**, **Tabs**, and **Disclosure**—implemented from scratch following the **WAI-ARIA Authoring Practices**.

---

## Live Demo

🔗 **GitHub Pages:** https://embedded-x.github.io/accessibility-playground/

## GitHub Repository

🔗 **Repository:** https://github.com/EMBEDDED-X/accessibility-playground

---

## Features

- Accessible Modal Dialog
- Accessible Tabs
- Accessible Disclosure
- Full keyboard navigation
- Focus trapping inside the modal
- Focus restoration after closing the modal
- WAI-ARIA compliant implementation
- Built from scratch without UI component libraries

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS

---

## Accessibility Features

### Modal Dialog

- Focus trapping
- Escape key closes the dialog
- Focus returns to the trigger button
- Uses `role="dialog"` and `aria-modal="true"`

### Tabs

- Keyboard navigation:
  - Left Arrow
  - Right Arrow
  - Home
  - End
- Uses:
  - `role="tablist"`
  - `role="tab"`
  - `role="tabpanel"`
- Implements roving `tabIndex`

### Disclosure

- Expand/Collapse functionality
- Uses:
  - `aria-expanded`
  - `aria-controls`
- Built with semantic HTML

---

## Project Structure

```text
src/
├── components/
│   ├── Modal.tsx
│   ├── Tabs.tsx
│   ├── Disclosure.tsx
│   └── components.css
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/EMBEDDED-X/accessibility-playground.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Learning Outcomes

- Building accessible UI components from scratch
- Implementing WAI-ARIA Authoring Practices
- Managing keyboard interactions
- Focus management and restoration
- Developing reusable React components with TypeScript

---

## Assignment

This project was completed as part of the **FlyRank AI Frontend Internship** accessibility assignment.

---

## License

This project is intended for educational and internship evaluation purposes.
