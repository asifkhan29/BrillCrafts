// src/App.tsx

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { HomePage } from "./pages";
import { CaseStudiesPage } from "./pages/case-studies";
import { ContactPage } from "./pages/contact";
import { ReachPage } from "./pages/reach";
import About from "./pages/about";

import BrandLaunches from "./pages/brand-launches";
import ExpoStalls from "./pages/expo-stalls";
import RetailBranding from "./pages/retail-branding";
import Activations from "./pages/Sampling-Workforce";
import Printing from "./pages/Printing";
import Packaging from "./pages/Packaging";
import MallBranding from "./pages/Mall-College";
import CorporateEvents from "./pages/Rwa-Corporate-Activations";
import SamplingWorkforce from "./pages/Sampling-Workforce";
import RwaCorporateActivations from "./pages/Rwa-Corporate-Activations";
import { ServicesPage } from "./pages/services";
import FloatingWhatsApp from "./components/ui/Floating-Whatsapp";

/* =========================
   SCROLL TO TOP
========================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--obsidian)]">
      <Navbar />

      {/* AUTO SCROLL TOP */}
      <ScrollToTop />

      <main className="pt-24">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* SERVICES */}
           <Route
            path="/services"
            element={<ServicesPage />}
          />
          <Route
            path="/services/brand-launches"
            element={<BrandLaunches />}
          />

          <Route
            path="/services/expo-stalls"
            element={<ExpoStalls />}
          />

          <Route
            path="/services/retail-branding"
            element={<RetailBranding />}
          />

          <Route
            path="/services/sampling-workforce"
            element={<SamplingWorkforce />}
          />

          <Route
            path="/services/printing-merchandising"
            element={<Printing />}
          />

          <Route
            path="/services/packaging-gifting"
            element={<Packaging />}
          />

          <Route
            path="/services/mall-college"
            element={<MallBranding />}
          />

          <Route
            path="/services/rwa-corporate"
            element={<RwaCorporateActivations />}
          />

          {/* OTHER PAGES */}
          <Route path="/reach" element={<ReachPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/case-studies"
            element={<CaseStudiesPage />}
          />

          <Route path="/about" element={<About />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] flex-col items-center justify-center">
                <h1 className="text-6xl font-bold">404</h1>

                <p className="mt-4 text-foreground/60">
                  Page not found
                </p>
              </div>
            }
          />
        </Routes>
      </main>
     {/* FLOATING WHATSAPP */}
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}