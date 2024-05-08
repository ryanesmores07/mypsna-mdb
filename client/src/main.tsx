import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";

fetch("/getAllData")
  .then((res) => res.json())
  .then((data) => console.log(data));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
