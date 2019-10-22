import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers';
import api from './middlewares/api'

//middleware api receives a url, successAction and errorAction to execute
//

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(),
    preloadedState,
    composeEnhancers(
      applyMiddleware(api
      ),
    ),
  )

  return store
}
