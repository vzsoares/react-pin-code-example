import "./App.css";
import { useState } from "react";
import img from "./icon.png";

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
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            height: "40vh",
          }}
        >
          {[...new Array(pinSize)].map((_, i) => (
            <input
              value={PIN[i] ?? ""}
              onKeyDown={handleKeyDown}
              maxLength="1"
              inputMode="numeric"
              style={{
                maxWidth: "5rem",
                maxHeight: "5rem",
                height: "100%",
                width: "100%",
                fontSize: "2rem",
                caretColor: "transparent",
                textAlign: "center",
                outline: `${PIN[i] !== undefined ? "4px solid orange" : "0"}`,
              }}
            />
          ))}
        </div>
        <a
          href="https://github.com/vzsoares/react-pin-code-example"
          target="_blank"
          rel="noreferrer"
          className="github"
          style={{ textDecoration: "none", color: "#595B5F" }}
        >
          <img src={img} alt="icon" />
        </a>
      </header>
    </div>
  );
}

export default App;
