const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors")
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function emailer(email) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "samridh4834.be22@chitkara.edu.in",
                pass: "seph sfzx rccr xgsi "
            }
        });

        const mailConfigs = {
            from: "samridh4834.be22@chitkara.edu.in",
            to: email,
            subject: "Dev@Deakin NewsLetter",
            text: "Thank you for subscribing our to Dev@Deakin News Letter",
        };

        transporter.sendMail(mailConfigs, (error, info) => {
            if (error) {
                console.error(error);
                return reject({ message: "Error sending email" });
            }
            console.log("Email sent: " + info.response);
            return resolve({ message: "Email sent successfully" });
        });
    });
}

app.get("/", (req, res) => {
    res.send("Welcome to the Dev@Deakin application");
});

app.post("/emailer", (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send("Email is missing");
    }

    emailer(email)
        .then((response) => res.send(response))
        .catch((error) => res.status(500).send(error));
});

app.listen(port, () => {
    console.log(`nodemailer listening at http://localhost:${port}`);
});
