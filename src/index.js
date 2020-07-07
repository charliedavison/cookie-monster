const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/set-cookie', (req, res) => {
    res.cookie('ioscookietest', 'WamTokenValue', { maxAge: 60000, httpOnly: true });
    res.send('Cookie Set!');
});

app.listen(port, () => console.log('App listening at http://localhost:3000'))