import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import 'uikit/dist/js/uikit-icons.min';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
