import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Andreia Ribeiro{" "}
          <a
            href="https://github.com/andreiapatriciaribeiro88-web/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            ·Open Source·
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
