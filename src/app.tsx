// src/App.tsx

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "./components/Loadingscreen"; // Ensure this path is correct

import { HomePage } from "./pages";
import { CaseStudiesPage } from "./pages/case-studies";
import { ContactPage } from "./pages/contact";
import { ReachPage } from "./pages/reach";
import About from "./pages/about";

import BrandLaunches from "./pages/brand-launches";
import ExpoStalls from "./pages/expo-stalls";
import RetailBranding from "./pages/retail-branding";
import Printing from "./pages/Printing";
import Packaging from "./pages/Packaging";
import MallBranding from "./pages/Mall-College";
import RwaCorporateActivations from "./pages/Rwa-Corporate-Activations";
import SamplingWorkforce from "./pages/Sampling-Workforce";
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. MOUNT LOADING SCREEN FIRST */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onDone={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT WRAPPER */}
      {/* We keep the main UI mounted but hidden or just conditionally render it */}
      <div className={`min-h-screen bg-white text-[var(--obsidian)] transition-opacity duration-700 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar />

        {/* AUTO SCROLL TOP */}
        <ScrollToTop />

        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/brand-launches" element={<BrandLaunches />} />
            <Route path="/services/expo-stalls" element={<ExpoStalls />} />
            <Route path="/services/retail-branding" element={<RetailBranding />} />
            <Route path="/services/sampling-workforce" element={<SamplingWorkforce />} />
            <Route path="/services/printing-merchandising" element={<Printing />} />
            <Route path="/services/packaging-gifting" element={<Packaging />} />
            <Route path="/services/mall-college" element={<MallBranding />} />
            <Route path="/services/rwa-corporate" element={<RwaCorporateActivations />} />
            
            <Route path="/reach" element={<ReachPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/about" element={<About />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="flex min-h-[60vh] flex-col items-center justify-center">
                  <h1 className="text-6xl font-black">404</h1>
                  <p className="mt-4 text-foreground/60 font-bold">Page not found</p>
                </div>
              }
            />
          </Routes>
        </main>

        <FloatingWhatsApp />
        <Footer />
      </div>
    </>
  );
}