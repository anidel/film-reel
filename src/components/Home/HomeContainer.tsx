import * as React from "react";
import { connect } from "react-redux";
import { onInitialise, HomeAction } from "src/components/Home/HomeActions";
import { Home, IHomeProps } from "src/components/Home/HomeComponent";
import { getInitialising } from "src/components/Home/HomeSelectors";
import { IStore } from "src/store";

interface IDispatchProps {
  onInitialise(): HomeAction;
}

const mapStateToProps = (state: IStore): IHomeProps => ({
  initialising: getInitialising(state)
});

const mapDispatchToProps: IDispatchProps = {
  onInitialise
};

class HomeComponent extends React.PureComponent<IHomeProps & IDispatchProps> {
  public componentDidMount() {
    this.props.onInitialise();
  }

  public render() {
    return <Home {...this.props} />;
  }
}

export const HomeContainer = connect<IHomeProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
