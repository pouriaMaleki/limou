import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
