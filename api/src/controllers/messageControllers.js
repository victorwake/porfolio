const nodemailer = require('nodemailer');
const { Message } = require("../db");
require('dotenv').config();


const {USERMAIL, PASS, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN} = process.env;

const postMessage = async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: "OAuth2",
            user: USERMAIL,
            pass: PASS,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN
        }
    });

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    try {
        const newMessage = await Message.create({
            name,
            email,
            message,
        });

        const mailOptions = {
            from: 'Porfolio Victor Pinto <',
            to: 'victorpintowake@gmail.com',
            subject: 'Nuevo mensaje en la base de datos',
            text: `Nombre: ${newMessage.name}\nEmail: ${newMessage.email}\nMensaje: ${newMessage.message}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Correo electrónico enviado: ' + info.response);
            }
        });
        return res.status(200).json(newMessage);
    } catch (error) {
        return res.status(400).json({ error: "Error al enviar el mensaje" });
    }
};

module.exports = {
    postMessage,
};