const express = require('express');
const router = express.Router();
const pool = require('../../database/mysql_connect');
const multer = require('multer');
const upload = multer();

router.post('/', upload.none(), (req, res) => {

    const {mail, subject, text} = req.body;

    console.log(mail);

    if (!mail || !subject || !text){
        return res.status(400).send('Chýbajúce dáta na uloženie');
    }

    pool.query('INSERT INTO email (mail, subject, text) VALUES (?, ?, ?)', 
    [mail, subject, text], function(err, result) {
        if (err) {
            console.error(`Chyba pri vkladaní dát:`, err);
            return res.status(500).send('Chyba servera pri vkladaní dát');
        }
        res.send('Email bol poslany');
    });
});

module.exports = router;
