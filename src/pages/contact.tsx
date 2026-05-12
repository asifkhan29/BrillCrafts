import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import BackgroundEffects from "./BackgroundEffects";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    brief: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    brief: "",
  });

  /* HANDLE CHANGE */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  /* VALIDATION */
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      company: "",
      type: "",
      brief: "",
    };

    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter valid email";
      valid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      valid = false;
    }

    if (!formData.type.trim()) {
      newErrors.type = "Project type is required";
      valid = false;
    }

    if (!formData.brief.trim()) {
      newErrors.brief = "Project brief is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  /* EMAIL */
  const handleEmail = () => {
    if (!validateForm()) return;

    const subject = `New Project Inquiry from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Company: ${formData.company}

Project Type: ${formData.type}

Brief:
${formData.brief}
    `;

    window.location.href = `mailto:nafis@brillcrafts.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  /* WHATSAPP */
  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const message = `
*New Project Inquiry*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

🏢 Company: ${formData.company}

🚀 Project Type: ${formData.type}

📝 Brief:
${formData.brief}
    `;

    window.open(
      `https://wa.me/917506839909?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSent(true);
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.company.trim() &&
    formData.type.trim() &&
    formData.brief.trim();

  return (
    <section className="relative isolate overflow-hidden py-24">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <BackgroundEffects />
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--sky)]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/50
                bg-white/70
                px-5 py-2
                backdrop-blur-xl
              "
            >
              <Sparkles size={14} className="text-[var(--sky)]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
                Contact Brill Crafts
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-6 text-4xl font-black leading-[0.95]
                sm:text-5xl md:text-6xl
              "
            >
              Let's build the

              <span className="block bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                unforgettable.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--obsidian)]/65">
              Tell us about your campaign, activation, or branding project.
            </p>

            {/* CONTACT ROWS */}
            <div className="mt-10 space-y-5">
              <ContactRow
                icon={Mail}
                label={
                  <a
                    href="mailto:nafis@brillcrafts.in"
                    className="hover:text-[var(--sky)]"
                  >
                    nafis@brillcrafts.in
                  </a>
                }
              />

              <ContactRow
                icon={Phone}
                label={
                  <a
                    href="tel:+917506839909"
                    className="hover:text-[var(--sky)]"
                  >
                    +91 75068 39909
                  </a>
                }
              />

              <ContactRow
                icon={MessageCircle}
                label={
                  <a
                    href="https://wa.me/917506839909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-green-500"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Chat
                  </a>
                }
              />

              <ContactRow
                icon={MapPin}
                label={
                  <a
                    href="https://maps.google.com/?q=Brill+Crafts+Sakinaka+Andheri+East+Mumbai+400072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--sky)]"
                  >
                    Sakinaka, Andheri East, Mumbai 400072
                  </a>
                }
              />
            </div>

            {/* MAP SECTION */}
            <div className="relative mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-[var(--sky)]/10 to-[var(--parrot)]/10 blur-3xl" />

              {/* MAP CONTAINER */}
     <div
  className="
    relative overflow-hidden

    rounded-[1.8rem]
    sm:rounded-[2.2rem]
    lg:rounded-[2.5rem]

    border border-white/40
    bg-white/60
    backdrop-blur-2xl

    shadow-[0_25px_80px_rgba(15,23,42,0.08)]

    w-full
    lg:w-[115%]
    xl:w-[125%]

    lg:-ml-[7.5%]
    xl:-ml-[12.5%]

    mx-auto
  "
>
                {/* LEFT ACCENT */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--sky)] to-[var(--parrot)]" />

                <iframe
                  title="Brill Crafts Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7828360209414!2d72.8900539!3d19.1016406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90016fa2211%3A0xaf0ae62db39a0861!2sBrill%20Crafts!5e0!3m2!1sen!2sin!4v1778330993731!5m2!1sen!2sin"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="
                    h-[380px]
                    md:h-[520px]
                    w-full
                    border-0
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative overflow-hidden
              rounded-[2.5rem]
              border border-white/50
              bg-white/70
              p-8 md:p-10
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(15,23,42,0.08)]
            "
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--sky)] to-[var(--parrot)]" />

            <div className="grid gap-6">
              <Field
                label="Your name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Aarav Mehta"
                error={errors.name}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@brand.com"
                  error={errors.email}
                />

                <Field
                  label="Company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Brand Co."
                  error={errors.company}
                />
              </div>

              <Field
                label="Project type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Brand launch, activation..."
                error={errors.type}
              />

              {/* TEXTAREA */}
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--obsidian)]/55">
                  Brief
                </label>

                <textarea
                  id="brief"
                  rows={5}
                  value={formData.brief}
                  onChange={handleChange}
                  placeholder="Tell us about the goal, audience and timeline."
                  className="
                    mt-3 w-full resize-none
                    rounded-2xl border border-slate-200
                    bg-white/80 px-5 py-4 text-sm
                    outline-none transition-all duration-300
                    focus:border-[var(--sky)]/40
                    focus:ring-4 focus:ring-sky-100
                  "
                />

                {errors.brief && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.brief}
                  </p>
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-2">
                {/* EMAIL */}
                <button
                  type="button"
                  onClick={handleEmail}
                  disabled={!isFormValid}
                  className={`
                    group inline-flex items-center gap-2
                    rounded-full
                    px-7 py-4
                    text-sm font-semibold text-white
                    transition-all duration-300
                    ${isFormValid
                      ? "bg-[var(--obsidian)] hover:-translate-y-1 hover:bg-[var(--sky)]"
                      : "cursor-not-allowed bg-slate-300"
                    }
                  `}
                >
                  Send Email

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* WHATSAPP */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={!isFormValid}
                  className={`
                    group inline-flex items-center gap-2
                    rounded-full
                    px-7 py-4
                    text-sm font-semibold text-white
                    transition-all duration-300
                    ${isFormValid
                      ? "bg-green-500 hover:-translate-y-1 hover:bg-green-600"
                      : "cursor-not-allowed bg-slate-300"
                    }
                  `}
                >
                  WhatsApp

                  <MessageCircle
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>

              {sent && (
                <p className="text-sm font-medium text-[var(--sky)]">
                  Your message is ready to send successfully.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* CONTACT ROW */
const ContactRow = ({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: React.ReactNode;
}) => {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-2xl
        border border-white/40
        bg-white/60
        p-4
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl
          bg-gradient-to-br from-[var(--sky)]/10 to-[var(--parrot)]/10
          text-[var(--sky)]
        "
      >
        <Icon size={22} />
      </div>

      <div className="text-sm font-medium text-[var(--obsidian)]/75">
        {label}
      </div>
    </div>
  );
};

/* INPUT FIELD */
function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--obsidian)]/55"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          mt-3 w-full rounded-2xl
          border bg-white/80
          px-5 py-4 text-sm
          outline-none transition-all duration-300
          ${error
            ? "border-red-400 focus:ring-red-100"
            : "border-slate-200 focus:border-[var(--sky)]/40 focus:ring-4 focus:ring-sky-100"
          }
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}