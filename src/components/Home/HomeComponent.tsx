import * as React from 'react';

// import logo from './logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

export interface IHomeProps {
  initialising: boolean
  onInitialise(): void
}

interface IHomeStore {
  showSplashScreen: boolean
}

class HomeComponent extends React.Component<IHomeProps, IHomeStore> {
  public componentDidMount() {
    this.props.onInitialise()
  }

  public render() {
    return <div>Home screen</div>
  }
}

export default HomeComponent;
