import logo from "./logo.svg";
import "./App.scss";

const greeting = (
  <div>
    <h1>hello</h1>
    <h1>my name is CQueue7</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting}
      </header>
    </div>
  );
}

export default App;
