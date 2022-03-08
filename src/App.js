import './App.css';
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
       <h1>📚English Dictionary</h1>
      <div className="container">
        <Dictionary />
      <header className="App-header">
      </header>
      <footer>
    This project was coded by Omolara and it is open-sourced on <a href="https://github.com/OmolaraO/dictionary-project" target="_blank" rel="noreferrer">Github</a> and
    <a href="https://suspicious-morse-dcef35.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
