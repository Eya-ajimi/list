import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import Contactreducer from "./reducers/Contactreducer"
const middleware=[thunk]
const Store = createStore(Contactreducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
export default Store 