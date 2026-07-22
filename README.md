# Accessibility Playground

An accessibility-focused React application built with **React**, **TypeScript**, and **Vite**. This project demonstrates three accessible UI components—**Modal Dialog**, **Tabs**, and **Disclosure**—implemented from scratch following the **WAI-ARIA Authoring Practices**.

---

## Live Demo

🔗 **Live Demo:** https://accessibility-playground-two.vercel.app/

## GitHub Repository

🔗 **Repository:** https://github.com/EMBEDDED-X/accessibility-playground

---

## Features

- Accessible Modal Dialog
- Accessible Tabs
- Accessible Disclosure (Accordion)
- Full keyboard navigation
- Focus trapping inside modal
- Focus restoration after closing modal
- WAI-ARIA compliant roles and attributes
- Built without any UI component libraries

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS

---

## Accessibility Features

### Modal Dialog

- Focus is trapped within the dialog
- Supports closing with the **Escape** key
- Focus returns to the trigger button after closing
- Uses:
  - `role="dialog"`
  - `aria-modal="true"`
  - `aria-labelledby`

### Tabs

- Keyboard navigation
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

```
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

Preview the production build:

```bash
npm run preview
```

---

## Learning Outcomes

Through this project, I learned:

- Building accessible UI components from scratch
- Applying WAI-ARIA Authoring Practices
- Managing keyboard interactions
- Focus management and restoration
- Implementing reusable React components with TypeScript
- Creating accessible interfaces without relying on component libraries

---

## Assignment

This project was completed as part of the **FlyRank AI Frontend Internship** accessibility assignment.

---

## License

This project is intended for educational and internship evaluation purposes.
