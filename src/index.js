import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(requestConfig => {
    // edit request config
    console.log('====================================');
    console.log(requestConfig);
    console.log('====================================');
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
