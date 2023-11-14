import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from './store/Store'
import Registro from './components/registro';
import Upload from './components/upload';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Registro />
            <Upload />
        </BrowserRouter>
    </Provider>
);
