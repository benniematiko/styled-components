import { GlobalStyles } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";
import "./App.css";
import NavBar from "./layout/NavBar";

function App() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255, 1)",
    },
  };
  return (
    <div className="App">
      <GlobalStyles />

      <NavBar />
    </div>
  );
}

export default App;
