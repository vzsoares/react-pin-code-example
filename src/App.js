import "./App.css";
import { useState } from "react";

function App() {
  const [PIN, setPIN] = useState("");
  const pinSize = 5;
  function handleKeyDown(e) {
    if (e.key === "Backspace") setPIN(PIN.slice(0, -1));
    else if (PIN.length + 1 > pinSize) return;
    else setPIN(PIN + e.key[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", gap: "1rem" }}>
          {[...new Array(pinSize)].map((_, i) => (
            <input
              value={PIN[i] ?? ""}
              onKeyDown={handleKeyDown}
              autoFocus={() => PIN[i] !== undefined}
              maxLength="1"
              style={{
                width: "5rem",
                height: "5rem",
                fontSize: "2rem",
                caretColor: "transparent",
                textAlign: "center",
                outline: `${PIN[i] !== undefined ? "4px solid orange":"0"}`,
              }}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
