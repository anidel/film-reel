import * as React from "react";
import { Provider } from "react-redux";
import { Home } from "src/components/Home";
import { store } from "src/store";

export const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
