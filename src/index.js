import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/appContainer/appContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('app'));
registerServiceWorker();
