import { createGlobalState } from 'react-hooks-global-state';

import { LIB_DEFAULT } from './default';

const INITIAL_STATES = LIB_DEFAULT;

const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState(INITIAL_STATES);

export { getGlobalState, setGlobalState, useGlobalState };
