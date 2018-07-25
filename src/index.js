import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import logoData from './logo-data.json'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game logoData={logoData} />, document.getElementById('root'));
registerServiceWorker();
