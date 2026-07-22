import { useRef, useState } from "react";
import Disclosure from "./components/Disclosure";
import Tabs from "./components/Tabs";
import Modal from "./components/Modal";
import "./components/components.css";

function App() {
  const [open, setOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    setOpen(false);
    openButtonRef.current?.focus();
  };

  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1>Accessibility Playground</h1>

      <p className="subtitle">
        Interactive React components built with WAI-ARIA Authoring Practices.
      </p>

      {/* Disclosure */}
      <section>
        <h2>Disclosure</h2>

        <Disclosure title="What is React?">
          React is a JavaScript library for building user interfaces.
        </Disclosure>

        <Disclosure title="What is TypeScript?">
          TypeScript is a strongly typed programming language that builds on
          JavaScript.
        </Disclosure>
      </section>

      {/* Tabs */}
      <section>
        <h2>Tabs</h2>

        <Tabs
          tabs={[
            {
              label: "Home",
              content: <p>Welcome to the Home page.</p>,
            },
            {
              label: "Profile",
              content: <p>This is your profile page.</p>,
            },
            {
              label: "Settings",
              content: <p>Manage your account settings here.</p>,
            },
          ]}
        />
      </section>

      {/* Modal */}
      <section>
        <h2>Modal Dialog</h2>

        <button
          ref={openButtonRef}
          className="open-modal-btn"
          onClick={() => setOpen(true)}
        >
          Open Settings
        </button>

        <Modal open={open} onClose={closeModal}>
          <h2 id="dialog-title">Settings</h2>

          <p>This is an accessible modal dialog.</p>

          <div className="modal-actions">
            <button onClick={closeModal}>Cancel</button>

            <button
              onClick={() => {
                alert("Settings Saved!");
                closeModal();
              }}
            >
              Save
            </button>
          </div>
        </Modal>
      </section>
    </main>
  );
}

export default App;