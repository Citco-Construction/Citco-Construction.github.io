"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    name: "Full Name",
    namePh: "Jane Doe",
    email: "Email",
    emailPh: "jane@email.com",
    type: "Project Type",
    types: ["Addition", "Major Renovation", "Kitchen Remodel", "Bathroom Remodel", "Other"],
    details: "Project Details",
    detailsPh: "Tell us about scope, timeline, and location.",
    submit: "Submit Inquiry",
    success:
      "Thanks, this demo form doesn't send yet, but your message would land straight with Chris.",
  },
  es: {
    name: "Nombre Completo",
    namePh: "Jane Doe",
    email: "Correo Electrónico",
    emailPh: "jane@email.com",
    type: "Tipo de Proyecto",
    types: [
      "Ampliación",
      "Renovación Mayor",
      "Remodelación de Cocina",
      "Remodelación de Baño",
      "Otro",
    ],
    details: "Detalles del Proyecto",
    detailsPh: "Cuéntenos sobre el alcance, el cronograma y la ubicación.",
    submit: "Enviar Consulta",
    success:
      "Gracias, este formulario de demostración todavía no envía mensajes, pero su mensaje llegaría directamente a Chris.",
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const t = copy[locale];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        e.currentTarget.reset();
      }}
    >
      <div className="field">
        <label htmlFor="name">{t.name}</label>
        <input id="name" type="text" placeholder={t.namePh} required />
      </div>
      <div className="field">
        <label htmlFor="email">{t.email}</label>
        <input id="email" type="email" placeholder={t.emailPh} required />
      </div>
      <div className="field">
        <label htmlFor="type">{t.type}</label>
        <select id="type">
          {t.types.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="msg">{t.details}</label>
        <textarea id="msg" rows={4} placeholder={t.detailsPh} />
      </div>
      <button className="btn" type="submit">
        {t.submit}
      </button>
      {submitted && (
        <p className="form-note" style={{ color: "var(--accent-dim)" }}>
          {t.success}
        </p>
      )}
    </form>
  );
}
