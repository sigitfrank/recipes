import nodemailer from 'nodemailer'
const sendEmail = (userData) => {
    const { email, name, token } = userData
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.HOST_EMAIL_ACCOUNT,
            pass: process.env.HOST_EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.HOST_EMAIL_ACCOUNT,
        to: email,
        subject: 'Bagi-Resep Account Verification',
        html: `
        <h1>Hi, ${name}</h1>
        <p>
            Thank you for registering to our App. Hope you enjoy it! Please activate your account by clicking the link below
        </p>
        <p style="font-weight:bold;"><a href="http://localhost:5000/api/user/activate/${email}/${token}">Activate Account</a></p>
        `
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) console.log(error)
        else console.log('Email sent: ' + info.response)
        
    })
}

export default sendEmail