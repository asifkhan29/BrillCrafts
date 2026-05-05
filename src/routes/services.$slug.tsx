import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { services } from "@/lib/site";
import caseExpo from "@/assets/case-expo.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Bill Craft` },
          { name: "description", content: loaderData.service.desc },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <p className="text-foreground/60">Service not found.</p>
        <Link to="/services" className="btn-ghost mt-6 inline-flex">Back to services</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-[60vh] grid place-items-center px-6">
      <div className="glass rounded-3xl p-10 max-w-md text-center">
        <p className="text-foreground/70">{error.message}</p>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const features = [
    "Strategy & creative direction",
    "Production & execution at scale",
    "On-ground workforce & logistics",
    "Performance reporting & insights",
  ];

  return (
    <PageTransition>
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary">
            <ArrowLeft size={16} /> All services
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary">{service.category}</span>
              <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-foreground/70 max-w-xl">{service.desc}</p>

              <div className="mt-10 grid gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-foreground/85">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary">
                      <Check size={14} />
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                <Link to="/contact" className="btn-magnetic">Brief us</Link>
                <Link to="/case-studies" className="btn-ghost">See related work</Link>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl overflow-hidden halo-green relative">
                <img
                  src={caseExpo}
                  alt={service.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="glass absolute -bottom-6 -left-6 rounded-2xl p-5 max-w-[240px]">
                <Sparkles size={18} className="text-primary" />
                <p className="mt-2 text-sm text-foreground/80">Engineered, end-to-end. From the first sketch to the final reveal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Discover", d: "Brand audit, audience mapping and objective alignment." },
              { n: "02", t: "Design", d: "Creative direction, storyboards and architectural mockups." },
              { n: "03", t: "Deploy", d: "Production, on-ground execution and live measurement." },
            ].map((s) => (
              <div key={s.n} className="glass rounded-3xl p-7">
                <p className="text-sm text-primary font-semibold">{s.n}</p>
                <p className="mt-3 text-xl font-semibold">{s.t}</p>
                <p className="mt-2 text-sm text-foreground/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
