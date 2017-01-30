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
            user: 'ieeecs@vit.ac.in', //username
            pass: 'password'          //password
        }
    });

    var text = 'Hello! from \t IEEE - Computer Society\n Thank you for contacting us. Will reach to you soon.';

    var mailOptions = {
        from: 'ieeecs@vit.ac.in', // sender address
        to: req.body.email, // list of receivers
        subject: req.body.subject, // Subject line
        text: text // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});
            res.redirect('/');
        };
    });

}
module.exports = router;
