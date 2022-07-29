import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles';
// import { StrictMode } from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <App />
    </GlobalStyles>,
    // </React.StrictMode>,
);
