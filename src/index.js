import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import configureStore from "./store";


const store = configureStore();

const rootElement = document.getElementById('react-root');

ReactDOM.render(<Provider store={store}><App element={rootElement}/>
  </Provider>, rootElement );

serviceWorker.unregister();
