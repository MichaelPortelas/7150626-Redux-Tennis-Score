import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// on importe le provider
import { Provider } from "react-redux";
// on importe le store
import { store } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // le provider doit englober toute l'application
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,  
  rootElement
);
