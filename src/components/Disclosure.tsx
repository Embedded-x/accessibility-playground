import { useId, useState, type ReactNode } from "react";

interface DisclosureProps {
  title: string;
  children: ReactNode;
}

export default function Disclosure({
  title,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Generates a unique id for aria-controls
  const contentId = useId();

  const toggleDisclosure = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="disclosure">
      <button
        type="button"
        className="disclosure-button"
        onClick={toggleDisclosure}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{isOpen ? "▼" : "▶"}</span>
        <span>{title}</span>
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="disclosure-content"
        >
          {children}
        </div>
      )}
    </div>
  );
}