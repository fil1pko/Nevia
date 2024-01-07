const express = require('express');
const router = express.Router();
const pool = require('../../database/mysql_connect'); // Importujte váš MySQL pool

router.get('/', (req, res) => {
    pool.query('SELECT * FROM email', function(err, data){
        if(err){
            return res.status(500).send('Chyba servera');
        }
        
        let htmlContent = '<table>';
        htmlContent += '<tr><th>Email</th><th>Predmet</th><th>Text</th></tr>'; // Hlavička tabuľky

        data.forEach(row => {
            htmlContent += '<tr>'; // Začiatok riadku
            htmlContent += `<td>${row.mail}</td>`;  // Bunka pre Email
            htmlContent += `<td>${row.subject}</td>`;  // Bunka pre Predmet
            htmlContent += `<td>${row.text}</td>`;  // Bunka pre Text
            htmlContent += '</tr>'; // Koniec riadku
        });

        htmlContent += '</table>'; // Koniec tabuľky
    
        res.send(htmlContent);
    });
});

module.exports = router;
