import { useState } from "react";
import { ThemeContext } from "./Themecontext";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="container"
        style={{
          backgroundColor:
            theme === "dark" ? "black" : "white",
          color:
            theme === "dark" ? "white" : "black",
          minHeight: "100vh",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h1>Theme Switcher</h1>

        <button
          onClick={() =>
            setTheme(
              theme === "light"
                ? "dark"
                : "light"
            )
          }
        >
          Change Theme
        </button>

        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;