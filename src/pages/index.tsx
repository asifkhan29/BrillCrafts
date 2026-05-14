import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Globe, Layers3, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Globe2,
  Megaphone,
  Store,
  Package,
  Users,
  Box,
  Layout,
  ShoppingBag,
  Tent,
  Radio,
  Play,
  Target,
  MapPin,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Send,
  Building2,
  Star,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { services } from "@/lib/site";
import heroMetro from "@/assets/hero-metro.jpg";
import caseLaunch from "@/assets/case-launch.jpg";
import caseExpo from "@/assets/case-expo.jpg";
import caseMall from "@/assets/case-mall.jpg";
import { Hero } from "@/components/home/Hero";
import { Link } from "react-router-dom";
import React from "react";
import BackgroundEffects from "./BackgroundEffects";
import { OrbitalGallery } from "@/components/OrbitalGallery";
import { ProductSlider } from "@/components/home/ProductSlider";
import logo1 from "@/assets/logo/logo.jpeg";
import logo2 from "@/assets/logo/logo (2).jpeg";
import logo3 from "@/assets/logo/logo (3).jpeg";
import logo4 from "@/assets/logo/logo (4).jpeg";
import logo5 from "@/assets/logo/logo (5).jpeg";
import logo6 from "@/assets/logo/logo (6).jpeg";
import logo7 from "@/assets/logo/logo (7).jpeg";
import logo8 from "@/assets/logo/logo (8).jpeg";
import logo9 from "@/assets/logo/logo (9).jpeg";
import logo10 from "@/assets/logo/logo (10).jpeg";
  import logo11 from "@/assets/logo/logo (11).jpeg";
import logo12 from "@/assets/logo/logo (12).jpeg";
import logo13 from "@/assets/logo/logo (13).jpeg";
import logo14 from "@/assets/logo/logo (14).jpeg";
import logo15 from "@/assets/logo/logo (15).jpeg";
import logo16 from "@/assets/logo/logo (16).jpeg";
import logo17 from "@/assets/logo/logo (17).jpeg";
import logo18 from "@/assets/logo/logo (18).jpeg";
import logo19 from "@/assets/logo/logo (19).jpeg";

export function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <ServicesPreview />

      <OrbitalGallery/>
      <ProductSlider/>
      <SecondHero />
      <ReachBand />
      <CaseStudiesPreview />
      <TrustedBrandsPage />
      <CTA />
    </PageTransition>
  );
}

const AZURE = "#1D90FF";
const OLIVE = "#0074D9"; // keep palette blue-dominant — secondary deep sky blue



function PhonePortal() {
  const phoneImages = [caseLaunch, caseExpo, caseMall];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % phoneImages.length),
      3200,
    );
    return () => clearInterval(id);
  }, [phoneImages.length]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center [perspective:1400px]">
      {/* Increased Glows - Olive pulsing */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 m-auto h-[520px] w-[520px] rounded-full blur-[100px] -z-0"
        style={{
          background: `radial-gradient(circle, ${OLIVE}AA, transparent 70%)`,
        }}
        aria-hidden
      />
      {/* Increased Glows - Azure halo */}
      <div
        className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full blur-[90px] -z-0 opacity-60"
        style={{
          background: `radial-gradient(circle, ${AZURE}66, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* Phone frame, tilted */}
      <motion.div
        whileHover={{ rotateY: -14, rotateX: 6 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{
          transform: "rotateY(-18deg) rotateX(8deg) rotateZ(-2deg)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-[250px] md:w-[280px] h-[500px] md:h-[560px] rounded-[3rem] border-8 border-slate-900 bg-slate-900 shadow-[0_50px_120px_-30px_rgba(5,15,40,0.6)] overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-slate-900" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-black">
          <AnimatePresence mode="sync">
            <motion.img
              key={idx}
              src={phoneImages[idx]}
              alt="Real-world brand activation"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Bottom info pill */}
          <div className="absolute bottom-5 left-4 right-4 rounded-2xl backdrop-blur-2xl bg-white/10 border border-white/20 px-4 py-3 text-white">
            <p className="text-[9px] uppercase tracking-widest opacity-70">
              Live activation
            </p>
            <p className="text-sm font-semibold">Real-world. Real impact.</p>
            <div className="mt-1 flex gap-1">
              <div className="h-1 flex-1 rounded-full bg-white/30" />
              <div className="h-1 flex-1 rounded-full bg-white/30" />
              <div className="h-1 flex-1 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating glass stat badges - Positioned adaptively */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute top-16 left-[-20px] md:top-10 md:left-2 z-20 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/30 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,42,90,0.3)]"
      >
        <div className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-white"
            style={{
              background: `linear-gradient(135deg, ${AZURE}, ${OLIVE})`,
            }}
          >
            <Sparkles size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--obsidian)]/55">
              Live now
            </p>
            <p className="text-sm font-semibold text-[var(--obsidian)]">
              12 active campaigns
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-16 right-[-10px] md:right-0 z-20 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/30 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,42,90,0.3)]"
      >
        <p className="text-[10px] uppercase tracking-widest text-[var(--obsidian)]/55">
          Reach
        </p>
        <p className="text-sm font-semibold text-[var(--obsidian)]">
          2,500+ venues
        </p>
      </motion.div>

      {/* Rotating dashed rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-2 right-2 h-24 w-24 rounded-full border-2 border-dashed"
        style={{ borderColor: `${AZURE}55` }}
        aria-hidden
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-2 left-6 h-16 w-16 rounded-full border-2 border-dashed"
        style={{ borderColor: `${OLIVE}77` }}
        aria-hidden
      />
    </div>
  );
}




export default function TrustedBrandsPage() {


const topBrands = [
  {
    name: "Rapido",
    logo: logo1,
  },
  {
    name: "Blinkit",
    logo: logo2,
  },
  {
    name: "Swiggy",
    logo: logo3,
  },
  {
    name: "Flipkart",
    logo: logo4,
  },
  {
    name: "TVF",
    logo: logo5,
  },
  {
    name: "Amazon",
    logo: logo6,
  },
  {
    name: "Netflix",
    logo: logo7,
  },
  {
    name: "Zomato",
    logo: logo8,
  },
  {
    name: "Uber",
    logo: logo9,
  },
  {
    name: "Google",
    logo: logo10,
  },
 
  
];



const bottomBrands = [
  {
    name: "Tata 1mg",
    logo: logo11,
  },
  {
    name: "Godrej",
    logo: logo12,
  },
  {
    name: "HDFC",
    logo: logo13,
  },
  {
    name: "Unacademy",
    logo: logo14,
  },
  {
    name: "DCX",
    logo: logo15,
  },
  {
    name: "Brand 16",
    logo: logo16,
  },
  {
    name: "Brand 17",
    logo: logo17,
  },
  {
    name: "Brand 18",
    logo: logo18,
  },
  {
    name: "Brand 19",
    logo: logo19,
  },
];
  const testimonials = [
    {
      name: "Rohit Malhotra",
      company: "INFINITY Premium Motoring Cars",
      logo: "https://www.infinity-group.in/wp-content/uploads/2020/10/Infinity-Cars-Logo-FINAL-min.png",
      text: "Brill Crafts delivered premium automotive branding, showroom activations, and luxury customer engagement experiences that perfectly reflected our high-end motoring identity.",
    },

    {
      name: "Anjali Desai",
      company: "Copper Chimney",
      logo: "https://comingsoon.ae/wp-content/uploads/2021/10/comingsoon.ae-copper-chimney-2024-12-27_22-57-28_131517.jpg",
      text: "Brill Crafts created premium restaurant branding, launch campaigns, and customer engagement experiences that enhanced our dining atmosphere and strengthened brand visibility.",
    },

    {
      name: "Rahul Mehta",
      company: "Wellness Forever",
      logo: "https://samsika.com/wp-content/uploads/2025/04/WELLNESS-FOREVER.png",
      text: "Brill Crafts delivered impactful pharmacy branding, in-store promotional campaigns, and retail visibility solutions that strengthened our customer engagement across multiple locations.",
    },

    {
      name: "Sneha Kapoor",
      company: "FOAMO Bath Essentials",
      logo: "https://foamo.shop/cdn/shop/files/FOAMO_Bath_Essentials_b5659644-b178-4114-8002-0a8921ad8791_1200x675.png?v=1717414452",
      text: "Brill Crafts executed energetic mall activations and experiential marketing campaigns that boosted customer interaction and created strong offline brand visibility for FOAMO.",
    },

    {
      name: "Vikram Singh",
      company: "KIA Moment That Inspires",
      logo: "https://cdn.motor1.com/images/mgl/88k2e/s1/kia-new-slogan-trademark.jpg",
      text: "Brill Crafts delivered premium automobile launch events, dealership branding, and experiential activations that enhanced customer engagement and strengthened our showroom presence.",
    },

    {
      name: "Aditya Khanna",
      company: "Black Cab",
      logo: "https://secretsaucestudios.in/images/bc.svg",
      text: "Brill Crafts executed stylish outdoor branding, promotional campaigns, and experiential activations that elevated Black Cab’s premium brand presence and customer engagement.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <BackgroundEffects />
      {/* GLOBAL STYLE */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* =============================== */}
      {/* TRUSTED BRANDS */}
      {/* =============================== */}

      <section className="px-4 sm:px-6 py-20 relative overflow-hidden">

        {/* GLOWS */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[320px] w-[320px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[320px] w-[320px] bg-lime-400/10 blur-[100px]" />

        {/* STYLE */}
        <style>{`
    @keyframes marqueeLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes marqueeRight {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    .marquee-left {
      animation: marqueeLeft 14s linear infinite;
    }

    .marquee-right {
      animation: marqueeRight 16s linear infinite;
    }
  `}</style>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600">
              Trusted by Leading Brands
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black">
              Brands That Trust Our Work
            </h2>

            <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We collaborate with India’s most respected enterprises to deliver
              premium branding and digital experiences.
            </p>
          </div>

          {/* LOGO ROWS */}
          <div className="mt-16 space-y-8 overflow-hidden">

            {/* ================= ROW 1 ================= */}
            <div className="overflow-hidden py-2">

              <div className="flex w-max gap-5 sm:gap-8 marquee-left hover:[animation-play-state:paused]">

                {[...topBrands, ...topBrands].map((brand, index) => (
                  <a
                    key={index}

                    target="_blank"
                    rel="noreferrer"
                    className="
                group
                relative
                flex items-center justify-center
                min-w-[150px] sm:min-w-[190px]
                h-[85px] sm:h-[105px]
                px-6
                rounded-3xl
                bg-white
                border-2 border-slate-300
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-400
                hover:shadow-[0_18px_40px_rgba(59,130,246,0.18)]
              "
                  >
<div className="flex h-20 items-center justify-center px-4">
  <img
    src={brand.logo}
    alt={brand.name}
    loading="lazy"
    decoding="async"
    className="
      h-auto

      max-h-10
      sm:max-h-12
      md:max-h-14

      w-auto
      max-w-full

      object-contain

      opacity-90

      transition-all duration-300 ease-out

      group-hover:scale-105
      group-hover:opacity-100
    "
  />
</div>
                  </a>
                ))}
              </div>
            </div>

            {/* ================= ROW 2 ================= */}
            <div className="overflow-hidden py-2">

              <div className="flex w-max gap-5 sm:gap-8 marquee-right hover:[animation-play-state:paused]">

                {[...bottomBrands, ...bottomBrands].map((brand, index) => (
                  <a
                    key={index}
                   
                    target="_blank"
                    rel="noreferrer"
                    className="
                group
                relative
                flex items-center justify-center
                min-w-[150px] sm:min-w-[190px]
                h-[85px] sm:h-[105px]
                px-6
                rounded-3xl
                bg-white
                border-2 border-slate-300
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-lime-400
                hover:shadow-[0_18px_40px_rgba(132,204,22,0.18)]
              "
                  >
 <div className="flex h-20 items-center justify-center px-4">
  <img
    src={brand.logo}
    alt={brand.name}
    loading="lazy"
    decoding="async"
    className="
      h-auto

      max-h-10
      sm:max-h-12
      md:max-h-14

      w-auto
      max-w-full

      object-contain

      opacity-90

      transition-all duration-300 ease-out

      group-hover:scale-105
      group-hover:opacity-100
    "
  />
</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============================== */}
      {/* TESTIMONIALS */}
      {/* =============================== */}

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6">

        {/* BACKGROUND GLOWS */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--sky)]/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[360px] w-[360px] rounded-full bg-[var(--parrot)]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* HEADING */}
          <div className="mb-16 text-center">
            <div
              className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/60
          bg-white/70
          px-4 py-2
          text-xs font-black uppercase tracking-[0.2em]
          text-[var(--sky)]
          backdrop-blur-xl
          shadow-sm
        "
            >
              <Sparkles className="h-4 w-4" />
              Testimonials
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight text-[var(--obsidian)] sm:text-4xl md:text-5xl">
              What Brands Say About Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Real feedback from trusted partners who experienced our creative
              excellence and execution power.
            </p>
          </div>

          {/* SLIDER */}
          <div className="relative flex items-center justify-center">

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="
          absolute left-0 z-20
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          shadow-[0_15px_35px_rgba(15,23,42,0.12)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[var(--sky)]/30
          hover:shadow-[0_20px_45px_rgba(29,144,255,0.2)]
          sm:-left-4 md:-left-6
        "
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>

            {/* CARD WRAPPER */}
            <div className="w-full max-w-4xl px-6 sm:px-12">

              {/* TOP STRIP */}
              <div className="h-1.5 w-full rounded-t-[2rem] bg-gradient-to-r from-[var(--sky)] via-cyan-400 to-[var(--parrot)]" />

              {/* MAIN CARD */}
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="
            group relative overflow-hidden
            rounded-b-[2rem]
            border border-white/60
            bg-white/70
            p-6 backdrop-blur-2xl
            shadow-[0_25px_70px_rgba(15,23,42,0.08)]
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-[0_35px_90px_rgba(29,144,255,0.12)]
            sm:p-8 md:p-10
          "
              >

                {/* FLOATING ORBS */}
                <motion.div
                  aria-hidden
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
              absolute -top-24 -left-20
              h-[280px] w-[280px]
              rounded-full blur-3xl
            "
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
                  }}
                />

                <motion.div
                  aria-hidden
                  animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
              absolute -bottom-24 -right-20
              h-[280px] w-[280px]
              rounded-full blur-3xl
            "
                  style={{
                    background:
                      "radial-gradient(circle, rgba(132,204,22,0.18), transparent 70%)",
                  }}
                />

                {/* HEADER */}
                <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">

                  {/* COMPANY */}
                  <div className="flex items-center gap-4">

                    {/* LOGO */}
                    <div
                      className="
    flex h-16 w-16 items-center justify-center
    overflow-hidden
    rounded-2xl
    border border-white/60
    bg-white/95
    p-2
    shadow-[0_15px_35px_rgba(29,144,255,0.08)]
    sm:h-20 sm:w-20
    sm:p-3
  "
                    >
                      <img
                        src={testimonials[current].logo}
                        alt={testimonials[current].company}
                        className="
      max-h-full
      max-w-full
      object-contain
    "
                      />
                    </div>

                    {/* INFO */}
                    <div>
                      <h4 className="text-xl font-black text-[var(--obsidian)] sm:text-2xl">
                        {testimonials[current].company}
                      </h4>

                      <p className="mt-1 text-sm font-semibold">
                        <span className="bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)] bg-clip-text text-transparent">
                          Trusted Partner
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* STARS */}
                  <div
                    className="
                rounded-2xl
                border border-white/60
                bg-white/80
                px-4 py-2
                backdrop-blur-xl
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              "
                  >
                    <div className="flex items-center gap-1 text-base font-semibold text-amber-500 sm:text-lg">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>
                </div>

                {/* QUOTE */}
                <div className="relative z-10 mt-10">

                  <div className="text-6xl font-black leading-none text-[var(--sky)]/20">
                    “
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-lg">
                    {testimonials[current].text}
                  </p>
                </div>

                {/* USER */}
                <div
                  className="
              relative z-10 mt-10
              flex items-center gap-4
              border-t border-slate-200/70
              pt-6
            "
                >

                  {/* AVATAR */}
                  <div
                    className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-gradient-to-br from-[var(--sky)] to-[var(--parrot)]
                text-lg font-black text-white
                shadow-[0_15px_35px_rgba(29,144,255,0.2)]
              "
                  >
                    {testimonials[current].name.charAt(0)}
                  </div>

                  {/* USER INFO */}
                  <div>
                    <h4 className="text-lg font-bold text-[var(--obsidian)] sm:text-xl">
                      {testimonials[current].name}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Brand Manager
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="
          absolute right-0 z-20
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          shadow-[0_15px_35px_rgba(15,23,42,0.12)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[var(--parrot)]/40
          hover:shadow-[0_20px_45px_rgba(132,204,22,0.18)]
          sm:-right-4 md:-right-6
        "
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>

          {/* DOTS */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
            rounded-full transition-all duration-300
            ${current === index
                    ? "h-3 w-10 bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]"
                    : "h-3 w-3 bg-slate-300 hover:bg-slate-400"
                  }
          `}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SecondHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjusted for mid-page visibility
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center py-24 overflow-hidden bg-slate-50/50"
    >
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT SIDE: Smartphone Portal (First on Mobile & Desktop) */}
        <motion.div
          style={{ y: phoneY, opacity }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-first"
        >
          <PhonePortal />
        </motion.div>

        {/* RIGHT SIDE: Minimal Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: AZURE }}
            >
              The Portal
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--obsidian)]">
              Digital Experience. <br />
              <span className="opacity-40">Real-World Scale.</span>
            </h2>

            <p className="max-w-md text-lg text-[var(--obsidian)]/60 leading-relaxed">
              Seamlessly bridge the gap between high-intent digital users and
              physical brand interactions.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold group"
            >
              See how it works
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Brand Launches",
    "Expo Stalls",
    "Retail Branding",
    "RWA Activations",
    "Corporate",
    "Sampling",
    "Packaging",
    "Merchandising",
  ];
  return (
    <section className="border-y border-white/5 py-8 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-foreground/40">
            <span className="text-xl md:text-2xl font-medium">{t}</span>
            <span className="text-primary">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

// Mapping icons to your pillars for that "Modern Studio" feel
const iconMap: Record<string, any> = {
  Activations: Zap,
  "Physical Branding": Layout,
  Production: Box,
  Retail: ShoppingBag,
  Events: Tent,
  Broadcast: Radio,
  Sampling: Users,
  Strategy: Map,
};


export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#f8fbff]">

      {/* REUSABLE BACKGROUND */}
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-600 shadow-sm">
              Capabilities
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Eight pillars. <br />

              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-lime-500 bg-clip-text text-transparent">
                One ecosystem.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              The bridge between a digital concept and a physical reality.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div className="flex md:justify-end">

            <Link
              to="/services"
              className="
    group inline-flex items-center gap-2
    rounded-full
    bg-[var(--obsidian)]
    px-6 py-3
    text-sm font-semibold
    text-white
    shadow-[0_10px_30px_rgba(15,23,42,0.25)]
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[var(--sky)]
    hover:shadow-[0_20px_50px_rgba(29,144,255,0.25)]
    active:translate-y-0
  "
            >
              Explore Services

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>

        {/* CARDS GRID */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((s, i) => {
            const Icon = iconMap[s.category] || Zap;

            const showAd = i === 2 || i === 5;

            return (
              <React.Fragment key={s.slug}>

                {/* SERVICE CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.05,
                  }}
                  className="col-span-1"
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="
                      group relative flex h-full min-h-[330px]
                      flex-col justify-between
                      overflow-hidden
                      rounded-[2rem]
                      border border-white/60
                      bg-white/80
                      p-7
                      backdrop-blur-xl
                      shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-sky-100
                      hover:bg-white
                      hover:shadow-[0_30px_80px_rgba(59,130,246,0.15)]
                    "
                  >

                    {/* TOP GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/40 via-white to-lime-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* ICON */}
                    <div className="relative z-10 flex items-start justify-between">

                      <div
                        className="
                          flex h-14 w-14 items-center justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-slate-100
                          to-slate-50
                          text-slate-700
                          shadow-inner
                          transition-all duration-500
                          group-hover:from-sky-500
                          group-hover:to-blue-600
                          group-hover:text-white
                          group-hover:shadow-[0_15px_35px_rgba(59,130,246,0.25)]
                        "
                      >
                        <Icon size={24} />
                      </div>

                      <div
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-full
                          bg-slate-100
                          text-slate-400
                          transition-all duration-300
                          group-hover:bg-sky-100
                          group-hover:text-sky-600
                          group-hover:rotate-45
                        "
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mt-10">

                      <p
                        className="
                          inline-flex rounded-full
                          bg-sky-50
                          px-3 py-1
                          text-[10px]
                          font-bold uppercase
                          tracking-[0.18em]
                          text-sky-600
                        "
                      >
                        {s.category}
                      </p>

                      <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900">
                        {s.title}
                      </h3>

                      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                        {s.desc}
                      </p>
                    </div>

                    {/* BIG NUMBER */}
                    <span
                      className="
                        absolute bottom-5 right-6
                        text-6xl font-black italic
                        text-slate-100
                        transition-all duration-500
                        group-hover:text-sky-50
                      "
                    >
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>

                {/* FEATURED MEDIA CARD */}
                {showAd && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="
      group relative col-span-1
      overflow-hidden
      rounded-[2rem]
      lg:col-span-2
      min-h-[360px]
      bg-slate-900
      shadow-[0_25px_80px_rgba(15,23,42,0.25)]
    "
                  >

                    {/* ================= FLOATING ORBS ================= */}
                    <motion.div
                      aria-hidden
                      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-20 -left-24 w-[420px] h-[420px] rounded-full blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle, oklch(0.85 0.12 225 / 0.35), transparent 70%)",
                      }}
                    />

                    <motion.div
                      aria-hidden
                      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 -right-28 w-[480px] h-[480px] rounded-full blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle, oklch(0.88 0.1 165 / 0.35), transparent 70%)",
                      }}
                    />

                    {/* ================= GLASS BADGE ================= */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="absolute top-5 left-1/2 -translate-x-1/2 z-20"
                    >
                     
                    </motion.div>

                  

                    {/* ================= IMAGE ================= */}
                    <img
                      src={
                        i === 2
                          ? "https://i.extremetech.com/imagery/content-types/01X34i9oHzZc7wTmRtY6OqC/hero-image.fill.size_1200x675.jpg"
                          : "https://drivingmotion.com/wp-content/uploads/2023/06/2.-The-newly-unveiled-Mercedes-AMG-EQS-53-4MATIC-and-Mercedes-AMG-EQE-53-4MATIC-taking-center-stage-at-MBFWKL.jpg"
                      }
                      alt="Project Showcase"
                      className="
        h-full w-full object-cover
        opacity-80
        transition-transform duration-700
        group-hover:scale-110
      "
                    />

                    {/* ================= OVERLAY ================= */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* ================= CONTENT ================= */}
                    <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between">

                      <div className="max-w-xl">

                        <h4 className="text-2xl font-black text-white">
                          {i === 2
                            ? "Samsung Galaxy Launch"
                            : "Mercedes Expo Arena"}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          Immersive experiential campaigns engineered for maximum brand engagement and audience impact.
                        </p>

                      </div>

                    </div>

                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const reachStats = [
  { label: "Residential RWAs", value: 1000, suffix: "+", icon: MapPin },
  { label: "Tech Parks", value: 500, suffix: "+", icon: Target },
  { label: "Entertainment Hubs", value: 500, suffix: "+", icon: Users },
  { label: "Premium Malls", value: 1000, suffix: "+", icon: Globe2 },
];

export function ReachBand() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Decorative "Data Grid" */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 h-full w-full bg-[grid-line:var(--obsidian)] [background-size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--obsidian)]/5 bg-white/40 p-8 md:p-16 backdrop-blur-xl shadow-2xl shadow-[var(--sky)]/5">
          {/* Subtle Glows */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--sky)]/10 blur-[80px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[var(--parrot)]/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--sky)]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)]"
              >
                <Globe2 size={14} className="animate-pulse" /> Network
                Intelligence
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--obsidian)] md:text-6xl"
              >
                A footprint that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                  moves markets.
                </span>
              </motion.h2>

              <p className="mt-6 max-w-lg text-lg text-[var(--obsidian)]/60 leading-relaxed">
                Strategic placements across India's most high-intent zones. From
                premium residential clusters to high-traffic retail corridors.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/reach"
                className="group flex items-center gap-3 rounded-2xl bg-[var(--obsidian)] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[var(--sky)] hover:shadow-xl hover:shadow-[var(--sky)]/20 active:scale-95"
              >
                Explore Full Reach
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* Stats Grid - Ultra Responsive */}
          <div className="relative z-10 mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reachStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl border border-[var(--obsidian)]/5 bg-white/50 p-6 transition-all hover:bg-white hover:shadow-lg"
              >
                <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                  <div className="mb-2 rounded-xl bg-[var(--sky)]/5 p-3 text-[var(--sky)] transition-colors group-hover:bg-[var(--sky)] group-hover:text-white">
                    <s.icon size={24} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-3xl font-black tracking-tighter text-[var(--obsidian)] md:text-4xl">
                      {/* Assuming Counter component exists, otherwise use s.value */}
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--obsidian)]/40 group-hover:text-[var(--sky)] transition-colors">
                      {s.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple internal helper if you don't have a Counter component
function Counter({ to, suffix }: { to: number; suffix: string }) {
  // Replace this with your actual Counter component logic
  return (
    <>
      {to}
      {suffix}
    </>
  );
}

const cases = [
  {
    title: "Pan-India Metro Takeover",
    client: "FMCG Beverage Brand",
    img: "https://media.assettype.com/freepressjournal/2025-10-29/uem5shrv/Mumbai-Metro-3.jpg",
    tag: "Out-of-Home",
    metric: "12M+ Impressions",
    icon: BarChart3,
    desc: "A 6-week metro pillar & concourse takeover across 4 cities — synced with sampling squads at exit gates.",
  },
  {
    title: "Cinematic Product Launch",
    client: "Consumer Tech",
    img: "https://i.ytimg.com/vi/iXOEE-Kn3jw/maxresdefault.jpg",
    tag: "Brand Launch",
    metric: "38% Press Coverage",
    icon: Users,
    desc: "Stage design, AV, hospitality and post-event content for a flagship product reveal in Bengaluru.",
  },
  {
    title: "Pavilion Expo Stall",
    client: "B2B Industrial",
    img: "https://xs-worldwide.com/wp-content/uploads/2024/07/6th-pic-1920x1440.jpg",
    tag: "Expo Excellence",
    metric: "Ranked #1 Footfall",
    icon: Target,
    desc: "Architectural double-deck stall with live demo zones — engineered, fabricated and crewed end-to-end.",
  },
  {
    title: "Mall Storefront Rollout",
    client: "D2C Lifestyle",
    img: "https://s3.mortarr.com/images/project_gallery_images/architecture-design-collaborative-mall-storefront-design-1920x1920.jpeg",
    tag: "Retail Identity",
    metric: "42 Stores Live",
    icon: TrendingUp,
    desc: "Visual identity rollout across mall storefronts, in-store collateral and shopper journey signage.",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <span className="leading-tight">
                Engineering impact, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
                  one city at a time.
                </span>
              </span>
            }
            desc="Real briefs, real metrics — a snapshot of how we architect physical brand experiences."
          />
          <Link
            to="/case-studies"
            className="hidden md:flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[var(--obsidian)] group"
          >
            Explore Portfolio
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white border border-[var(--obsidian)]/5 overflow-hidden transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-[var(--sky)]/20"
            >
              {/* Image Container */}

              {/* FLOATING ORBS */}
              <motion.div
                aria-hidden
                animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 h-[320px] w-[320px] rounded-full blur-[120px] opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
                }}
              />

              <motion.div
                aria-hidden
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full blur-[140px] opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(52,211,153,0.30), transparent 70%)",
                }}
              />

              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] group">

                {/* 🌌 FLOATING BACKGROUND ORBS */}
                <motion.div
                  aria-hidden
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-20 -left-20 h-[320px] w-[320px] rounded-full blur-[120px] opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
                  }}
                />

                <motion.div
                  aria-hidden
                  animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full blur-[140px] opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(52,211,153,0.30), transparent 70%)",
                  }}
                />

                {/* IMAGE */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/60 via-[var(--obsidian)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 🌟 FLOATING GLASS BADGE (UPGRADED) */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 left-6"
                >
                  <div className="
      relative flex items-center gap-2
      rounded-full px-4 py-1.5
      bg-white/15
      backdrop-blur-2xl
      border border-white/25
      shadow-[0_15px_50px_rgba(0,0,0,0.25)]
      overflow-hidden
    ">

                    {/* LIGHT SHEEN */}
                    <div className="
        absolute inset-0
        bg-gradient-to-r from-white/20 via-transparent to-white/10
        opacity-60
      " />

                    {/* PULSE DOT */}
                    <div className="h-2 w-2 rounded-full bg-[var(--sky)] animate-pulse relative z-10" />

                    {/* TAG */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white relative z-10">
                      {c.tag}
                    </span>

                    {/* OUTER GLOW */}
                    <div className="absolute -inset-2 rounded-full bg-[var(--sky)]/10 blur-xl opacity-50" />

                  </div>
                </motion.div>

                {/* HOVER CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-lg font-bold">{c.title}</h3>
                  <p className="text-white/70 text-sm mt-1">
                    Immersive real-world brand activation experience.
                  </p>
                </div>

              </div>

              {/* Content Container */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--sky)] mb-2">
                      {c.client}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--obsidian)] leading-none">
                      {c.title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--obsidian)]/5 bg-slate-50 transition-all group-hover:bg-[var(--obsidian)] group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="text-base text-[var(--obsidian)]/60 leading-relaxed mb-8">
                  {c.desc}
                </p>

                {/* Metric Bento Pill */}
                <div className="mt-auto inline-flex items-center gap-3 rounded-2xl bg-[var(--ice)]/40 border border-[var(--sky)]/10 p-4 transition-all group-hover:bg-[var(--sky)]/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-[var(--sky)]">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--obsidian)]/40 leading-none mb-1">
                      Campaign Impact
                    </p>
                    <p className="text-lg font-black text-[var(--obsidian)] leading-none">
                      {c.metric}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link
            to="/case-studies"
            className="btn-magnetic w-full py-4 text-center"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Soft Background Orbs */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--sky)]/10 to-[var(--parrot)]/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/60 px-8 py-16 text-center backdrop-blur-xl shadow-2xl shadow-[var(--sky)]/5 md:px-20 md:py-20"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sky)]/10 text-[var(--sky)] mb-6"
          >
            <Zap size={28} fill="currentColor" />
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--obsidian)] md:text-6xl">
            Let's build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sky)] to-[var(--parrot)]">
              unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-lg text-[var(--obsidian)]/60">
            From single-city activations to pan-India rollouts—bring the
            ambition, we'll engineer the physical reality.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full bg-[var(--obsidian)] px-10 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-[var(--sky)]/20 active:scale-95"
            >
              Start a Project
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--obsidian)]/40">
              <span className="flex items-center gap-1.5">
                <Send size={14} /> 2hr Response
              </span>
              <span className="h-3 w-px bg-[var(--obsidian)]/10" />
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} /> India-Wide
              </span>
            </div>
          </div>

          {/* Clean Grid Overlay */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[grid-line:var(--obsidian)] [background-size:30px_30px]" />
        </motion.div>
      </div>
    </section>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-widest text-primary font-semibold">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-lg text-foreground/65 max-w-2xl">{desc}</p>
      )}
    </div>
  );
}
