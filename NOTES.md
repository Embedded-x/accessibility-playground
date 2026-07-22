# NOTES.md

## Accessibility Comparison: My Components vs shadcn/ui

I implemented three components from scratch: Modal Dialog, Tabs, and Disclosure, following the WAI-ARIA Authoring Practices.

### What shadcn/ui handles better

### 1. More robust focus management
My modal traps focus and restores it when closed. However, shadcn's Dialog (built on Radix UI) handles many additional edge cases such as nested dialogs, dynamically changing focusable elements, and more resilient focus restoration.

### 2. Better component composition
My implementation is a single reusable component. shadcn separates functionality into reusable primitives such as Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, and DialogTitle, making components easier to compose and maintain.

### 3. Improved accessibility coverage
My components implement the required ARIA roles and keyboard interactions. shadcn includes additional accessibility features and extensive testing across browsers and assistive technologies.

### 4. Portal rendering
My dialog renders inside the normal React tree. shadcn renders dialogs inside a React Portal, preventing z-index and overflow issues.

### 5. Flexible API
My Tabs component manages its own state internally. shadcn supports controlled and uncontrolled state patterns, making it easier to integrate into larger applications.

## What I learned

Building the components manually helped me understand:

- WAI-ARIA roles
- Keyboard navigation
- Focus management
- Accessible React component design

Reading shadcn's implementation showed how production-ready libraries improve maintainability, accessibility, and flexibility while still following the same accessibility principles.