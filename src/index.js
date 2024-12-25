const express = require("express");
const path = require("path");

const app = express();

// Set views directory path
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.redirect('/login');  // Redirect to login page
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

const port = 7000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
