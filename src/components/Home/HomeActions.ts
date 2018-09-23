export const ON_INITIALISE = "HOME/ON_INITIALISE"
export const INITIALISED = "HOME/INITIALISED"

export type HomeAction =
  | { type: typeof ON_INITIALISE; }
  | { type: typeof INITIALISED; }

export const onInitialise = (): HomeAction => ({
  type: ON_INITIALISE
})

export const initialised = (): HomeAction => ({
  type: INITIALISED
})