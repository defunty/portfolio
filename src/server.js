import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Html from './Html';
import App from './App';

const app = express();

const initialData = {
    name: 'World'
};

app.get('/', (req, res) => {
    ReactDOMServer.renderToNodeStream(
        <Html initialData={JSON.stringify(initialData)}>
            <App {...initialData} />
        </Html>
    ).pipe(res);
});

app.listen(3000);