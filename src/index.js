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

app.get('/verify-cookie', (req, res) => {
    const cookie = req.cookies['ioscookietest'];
    if (cookie) {
        res.send('You have a cookie 🍪');
        return;
    }

    res.status('401');
    res.send('No cookies for you :(');
});

app.listen(port, () => console.log('App listening at http://localhost:3000'))