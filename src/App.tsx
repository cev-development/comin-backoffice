import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { store } from "./store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer autoClose={5000} />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
