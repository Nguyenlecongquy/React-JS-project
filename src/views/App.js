import logo from "./logo.svg";
import "./App.scss";
import Component from "./examples/myComponent";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component />
      </header>
    </div>
  );
};

export default App;
