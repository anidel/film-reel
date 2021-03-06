import * as React from "react";
import loadable from "src/decorators/loadable";
import { Movies } from "src/components/Movies";
import { Search } from "src/components/Search";

// import logo from './logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

export interface IHomeProps {
  initialising: boolean;
}

interface IHomeStore {
  showSplashScreen: boolean;
}

class HomeComponent extends React.PureComponent<IHomeProps, IHomeStore> {
  public render() {
    return (
      <>
        <Search />
        <Movies />
      </>
    );
  }
}

export const Home = loadable<IHomeProps>(props => props.initialising)(
  HomeComponent
);
