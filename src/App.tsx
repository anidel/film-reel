import * as React from 'react';
import { Provider } from 'react-redux';
import { Home } from 'src/components/Home';
import { store } from 'src/store';

export interface IAppProps {
  initialising: boolean
  onInitialise(): void
}

export const App = () => 
  <Provider store={store}>
    <Home />
  </Provider>