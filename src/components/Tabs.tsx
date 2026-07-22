import { useRef, useState, type ReactNode } from "react";

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab((index + 1) % tabs.length);
        break;

      case "ArrowLeft":
        event.preventDefault();
        focusTab((index - 1 + tabs.length) % tabs.length);
        break;

      case "Home":
        event.preventDefault();
        focusTab(0);
        break;

      case "End":
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
    }
  };

  return (
    <div>
      <div role="tablist" aria-label="Example Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`tab-${index}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}