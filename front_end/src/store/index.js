import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './roots'

const saga = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(saga))
export default store
