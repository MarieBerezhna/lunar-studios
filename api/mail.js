var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


module.exports = async function (to, from, subject, html, res) { 
    var mailOptions = {
        from,
        to,
        subject,
        html
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send({error: true});
            return {error: true};
        } else {
            console.log(info);
            res.send({error: false});
            return info;
        }
    });
};