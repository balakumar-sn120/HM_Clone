import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import "./styles/tailwind.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
