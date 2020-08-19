const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'paoloblanco27@gmail.com',
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'paoloblanco27@gmail.com',
        subject: "Good bye!",
        text: `Good bye, ${name}. I'll be really grateful if you could give us feedback about why you left the app. Good luck!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}