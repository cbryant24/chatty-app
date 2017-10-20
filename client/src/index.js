import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware( thunk ));

// const createStoreWithMiddleware = appplyeMiddleWare()(createStore) exact same as the version above

import App from './components/app';

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <   App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
