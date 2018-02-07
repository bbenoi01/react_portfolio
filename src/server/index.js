import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../shared/js/rootReducer';
import App from '../shared/App';

const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').load();

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    const store = createStore(rootReducer);
    const preloadedState = store.getState();
    res.send(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge; text/html; charset=UTF-8">
                <title>My React Portfolio</title>

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
                <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
                <link rel='stylesheet' type="text/css" href='css/main.css' media="screen,projection"/>

            </head>
                <body>
                    <div id="root">${renderToString(<Provider store = { store }><App /></Provider>)}</div>

                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
                    <script src="https://code.jquery.com/jquery-migrate-3.0.1.min.js" integrity="sha256-F0O1TmEa4I8N24nY0bya59eP6svWcshqX1uzwaWC4F4=" crossorigin="anonymous"></script>
                    <script type="text/javascript" src="slick/slick.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
                    <script type='text/javascript' src='./js/init.js'></script>
                    <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
                    <script src="bundle.js"></script>
                </body>
        </html>`)
})

app.post('/', (req,res) => {
    let preloadedState = {contact: {firstName: req.body.firstName,
                                    lastName: req.body.lastName,
                                    email: req.body.email,
                                    interested: true}
                         };
    const store = createStore(rootReducer, preloadedState);
    const finalState = store.getState();
    console.log(preloadedState);

    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.CELL_PHONE_NUMBER,
        body: req.body.firstName + ' ' + req.body.lastName + ' has viewed your portfolio, and wants to talk to you. Please contact them at ' + req.body.email + '.'
    })
    .then((message) => console.log('Great success'))
    .then(res.send(`        
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge; text/html; charset=UTF-8">
            <title>My React Portfolio</title>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
            <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
            <link rel='stylesheet' type="text/css" href='css/main.css' media="screen,projection"/>

        </head>
        <body>
            <div id="root">${renderToString(<Provider store = { store }><App /></Provider>)}</div>

            <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-migrate-3.0.1.min.js" integrity="sha256-F0O1TmEa4I8N24nY0bya59eP6svWcshqX1uzwaWC4F4=" crossorigin="anonymous"></script>
            <script type="text/javascript" src="slick/slick.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
            <script type='text/javascript' src='./js/init.js'></script>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}</script>
            <script src="bundle.js"></script>
        </body>
    </html>`))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));