var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARCS - IEEE Comupter Society' });
});

router.post('/', sendMail);

function sendMail(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ieeecs@vit.ac.in', // Your email id
            pass: 'password' // Your password
        }
    });

    var text = 'Hello! from \t'+ req.body.name;

    var mailOptions = {
        from: req.body.email, // sender address
        to: 'ieeecs@vit.ac.in', // list of receivers
        subject: req.body.subject, // Subject line
        text: text+'\n'+req.body.message //, // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });

}
module.exports = router;
