import { GlobalStyles } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255, 1)",
    },
  };
  return (
    <div className="App">
      <GlobalStyles />

      <h1> Komotobo School</h1>
    </div>
  );
}

export default App;
