import { createStore} from 'redux';
import historyReducer from './reducers/Reducers.js';


const store = createStore(historyReducer);

export default store;