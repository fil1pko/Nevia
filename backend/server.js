const express = require("express");
const mysql = require("./database/mysql_connect");
const PORT = process.env.PORT || 5002;
const app = express();
const cors = require("cors");   

const postRegister = require("./routes/POST/Register");
const postLogin = require("./routes/POST/Login");
const dashboard = require("./routes/GET/Dashboard");
const verifyToken = require('./middleware/verifyToken');
const saveContent = require("./routes/POST/SaveContent");
const email = require("./routes/GET/Email");
const saveEmail = require("./routes/POST/SaveEmail");
/*
* MIDDLEWARE, povolenie prijmat json z frontendu
*/
app.use(express.json({extended:false}));

// Body parser pre URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get("/register", verifyToken ,(req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + '/views/dashboard.html');
});

app.get("/mail", (req, res) => {
    res.sendFile(__dirname + '/views/mail.html');
});

app.use('/login', postLogin);
app.use('/register', postRegister);

app.use('/dashboardcontent', verifyToken, dashboard);
app.use('/savecontent', verifyToken, saveContent);

app.use('/emailcontent', verifyToken, email);
app.use('/saveemail', saveEmail);


app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});