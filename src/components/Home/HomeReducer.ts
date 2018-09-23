import { Cmd, loop, Loop } from 'redux-loop'
import { HomeAction, ON_INITIALISE } from "src/components/Home/HomeActions";

export interface IHomeStore {
  initialising: boolean
}

const initialState: IHomeStore = {
  initialising: false
}

export const homeReducer = function reduce(
  state: IHomeStore = initialState,
  action: HomeAction
): IHomeStore | Loop<IHomeStore, HomeAction> {
  switch (action.type) {
    case ON_INITIALISE: {
      return loop<IHomeStore, HomeAction>({
          ...state,
          initialising: true
        },
        Cmd.none
      )
    }
    default:
      return state
  }
}
