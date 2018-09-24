// anidel: Taken from Redux-Loop TS example
// I've extended it a bit, to pass in a `Loading` component

import * as React from "react";
import { SplashScreen } from "src/components/SplashScreen";

// `loadable` is curried to decouple an `isLoading` check from the details of
// component implementation
export default function loadable<P>(isLoading: (p: P) => boolean) {
  // Return a higher-order component implementing the "loadable" behavior
  // See: https://goo.gl/TxPPCw
  return (
    C: React.ComponentClass<P> | React.SFC<P>,
    L?: React.ComponentClass<P> | React.SFC<P>,
    Lprops?: any
  ): React.SFC<P> => {
    const LoadableComponent: React.SFC<P> = props => {
      if (isLoading(props)) {
        return L ? <L {...(Lprops ? Lprops : {})} /> : <SplashScreen />;
      }
      return <C {...props} />;
    };

    // Set pretty `displayName` for dev tooling
    LoadableComponent.displayName = `Loadable(${C.name})`;
    return LoadableComponent;
  };
}
