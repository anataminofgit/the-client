import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import rootReducer from './rootReducer'


export const initStore=()=>{
  const persistedState = loadState()

  let store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  )

    store.subscribe(throttle(() => {
      let state = store.getState()
      console.log("store.subscribe",state)
      saveState({
        auth: state.auth,
      })
    }, 1000))

  return store
}
