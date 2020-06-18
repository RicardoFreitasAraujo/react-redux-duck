import { createStore } from 'redux';

import reducers  from './ducks/reducer';

const store = createStore(reducers);

export default store;