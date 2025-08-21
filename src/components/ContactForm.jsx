import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const formData = {
      parent: e.target.parent.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://kita-koala-backend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.ok) {
        setStatus("✅ Message envoyé avec succès !");
        e.target.reset();
      } else {
        setStatus("❌ Erreur lors de l’envoi.");
      }
    } catch (err) {
      setStatus("⚠️ Impossible de contacter le serveur.");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input name="parent" placeholder="Nom du parent" required className="w-full px-4 py-3 rounded-xl border border-slate-300" />
      <input name="email" type="email" placeholder="E-mail" required className="w-full px-4 py-3 rounded-xl border border-slate-300" />
      <input name="phone" placeholder="Téléphone" className="w-full px-4 py-3 rounded-xl border border-slate-300" />
      <textarea name="message" placeholder="Âge de l’enfant, besoins, horaires…" rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-300"></textarea>
      <button type="submit" className="btn-primary">Envoyer la demande</button>
      <p className="text-sm mt-2">{status}</p>
    </form>
  );
}