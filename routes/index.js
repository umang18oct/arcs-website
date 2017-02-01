var express = require('express');
var nodemailer = require('nodemailer');
//var cloudinary = require('cloudinary');
var dotenv = require('dotenv');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ARCS - IEEE Comupter Society' });
});

router.post('/', sendMail);

dotenv.config();

function sendMail(req, res) {
    var transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS
      }
    });

    var text = 'Hello! from \t IEEE - Computer Society\n Thank you for contacting us. Will reach to you soon.';
    var email = process.env.EMAIL_ID;
    //console.log(process.env.EMAIL_ID);
    //console.log(process.env.EMAIL_PASS);
    var mailOptions = {
        from: email, // sender address
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
