const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const contactEmail = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false,
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send an email");
  }
});

router.post("/contact", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: email,
    to: "marieclemensat@wanadoo.fr",
    subject: "Contact Form Submission",
    html: `
    <h3>Nom : ${firstname} ${lastname}</h3>
    <h4>Email : ${email}</h4>
    <p>${message}</p>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "fail" });
    } else {
      res.json({ status: "success" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
