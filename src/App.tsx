import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
