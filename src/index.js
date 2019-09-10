import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(requestConfig => {
    // edit request config
    return requestConfig;
}, error => {
    console.log('ERROR', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('RESPONSE FROM INTERPRETORS', response);
    return response;
}, error => {
    console.log('FROM interceptors', error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
