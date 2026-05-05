import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brill Crafts" },
      { name: "description", content: "Brief us on your next launch, expo or activation. We respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageTransition>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contact</span>
              <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
                Let's build the <span className="text-gradient">unforgettable.</span>
              </h1>
              <p className="mt-6 text-lg text-foreground/70 max-w-md">
                Tell us about the brand, the moment, the audience. We'll come
                back with a plan within one business day.
              </p>

              <div className="mt-10 space-y-4">
                <ContactRow icon={Mail} label="hello@brillcrafts.in" />
                <ContactRow icon={Phone} label="+91 98765 43210" />
                <ContactRow icon={MapPin} label="New Delhi · Mumbai · Bengaluru" />
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl p-8 md:p-10 halo-green relative"
            >
              <div className="grid gap-5">
                <Field label="Your name" id="name" placeholder="Aarav Mehta" />
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Email" id="email" type="email" placeholder="you@brand.com" />
                  <Field label="Company" id="company" placeholder="Brand Co." />
                </div>
                <Field label="Project type" id="type" placeholder="Brand launch, expo stall, retail rollout..." />
                <div>
                  <label htmlFor="msg" className="text-xs uppercase tracking-widest text-foreground/60">Brief</label>
                  <textarea
                    id="msg"
                    rows={5}
                    placeholder="Tell us about the goal, scale and timeline."
                    className="input-line mt-2 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-magnetic mt-2 self-start"
                  disabled={sent}
                >
                  {sent ? "Sent ✓" : (<>Send brief <Send size={16} /></>)}
                </button>
                {sent && (
                  <p className="text-sm text-primary">Thanks — we'll be in touch within 1 business day.</p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function ContactRow({ icon: Icon, label }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid place-items-center h-10 w-10 rounded-full glass">
        <Icon size={16} className="text-primary" />
      </span>
      <span className="text-foreground/85">{label}</span>
    </div>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-foreground/60">{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="input-line mt-2" />
    </div>
  );
}
