import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // lee las variables de .env

const app = express();
app.use(cors());
app.use(express.json()); // para leer JSON del body

// Ruta para recibir datos del formulario
app.post("/send", async (req, res) => {
  const { parent, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true para 465, false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Kita Koala Formulaire" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // recibes en tu bandeja
      subject: "Nouvelle demande d’information",
      text: `
        Parent: ${parent}
        Email: ${email}
        Téléphone: ${phone}
        Message: ${message}
      `,
      replyTo: email
    });

    res.json({ ok: true, message: "Message envoyé ✅" });
  } catch (error) {
    console.error("Erreur:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Iniciar el servidor en http://localhost:4000
app.listen(4000, () => console.log("Serveur prêt sur http://localhost:4000"));
