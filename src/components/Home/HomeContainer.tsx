import { connect } from 'react-redux'
import { onInitialise } from 'src/components/Home/HomeActions';
import HomeComponent, { IHomeProps } from 'src/components/Home/HomeComponent';
import { getInitialising } from 'src/components/Home/HomeSelectors';
import loadable from 'src/decorators/loadable';
import { IStore } from 'src/store';

type StateProps = Pick<IHomeProps, 'initialising'>
type DispatchProps = Pick<IHomeProps, 'onInitialise'>

const mapStateToProps = (state: IStore): StateProps => ({
  initialising: getInitialising(state)
})

const mapDispatchToProps: DispatchProps = {
  onInitialise
}


export const HomeContainer = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(loadable<IHomeProps>(props => props.initialising)(HomeComponent));
