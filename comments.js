// Create web server
// 1. Create a web server 
// 2. Create a route for the home page (/)
// 3. Create a route for the contact page (/contact)
// 4. Create a route for the about page (/about)
// 5. Create a route for any other page (/anythingElse)
// 6. Have the home page return the html from index.html
// 7. Have the contact page return the html from contact.html
// 8. Have the about page return the html from about.html
// 9. Have any other page return a 404 message

// 1. Create a web server 
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for the home page (/)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. Create a route for the contact page (/contact)
app.get('/contact', (req, res) => {
    res.send('This is the contact page');
});

// 4. Create a route for the about page (/about)
app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// 5. Create a route for any other page (/anythingElse)
app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
});

// 6. Have the home page return the html from index.html
// 7. Have the contact page return the html from contact.html
// 8. Have the about page return the html from about.html
// 9. Have any other page return a 404 message

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});