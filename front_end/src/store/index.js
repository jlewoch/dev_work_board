import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './roots'
import { boardsSagas } from './boards/sagas'
import { sectionsSagas } from './sections/sagas'
import { tasksSagas } from './tasks/sagas'

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(saga))
const store = createStore(reducers, enhancer)
saga.run(boardsSagas)
saga.run(sectionsSagas)
saga.run(tasksSagas)

export default store
