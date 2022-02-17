
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
require("dotenv").config()
app.listen(5000, () => console.log(process.env.MAIL_TO));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_TO,
      pass: process.env.PASS,
    },
    secureConnection: 'false',
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "dzoni6usb@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "Something went wrong, please try again." });
      } else {
        res.json({ status: "Message sent!" });
      }
    });
  });