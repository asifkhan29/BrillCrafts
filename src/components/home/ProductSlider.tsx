import BackgroundEffects from "@/pages/BackgroundEffects";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const AZURE = "#1D90FF";
const MINT = "#34D399"; // Light Green / Mint

const products = [
  { 
    name: "Glass Stands", 
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400", 
    desc: "Premium Acrylic Finish",
    tag: "Eco-Friendly"
  },
  { 
    name: "Premium Flasks", 
    img: "https://images.unsplash.com/photo-1602143307185-844470efe014?auto=format&fit=crop&q=80&w=400", 
    desc: "Laser Engraved Steel",
    tag: "Best Seller"
  },
  { 
    name: "Branded Mugs", 
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fbed50?auto=format&fit=crop&q=80&w=400", 
    desc: "Matte Ceramic Print",
    tag: "Corporate"
  },
  { 
    name: "Mobile Covers", 
    img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=400", 
    desc: "Durable Polycarbonate",
    tag: "Trending"
  },
  { 
    name: "Tablet Sleeves", 
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400", 
    desc: "Custom Fabric Totes",
    tag: "New Arrival"
  },
  { 
    name: "Desk Merch", 
    img: "https://images.unsplash.com/photo-1586075010633-24700bd61414?auto=format&fit=crop&q=80&w=400", 
    desc: "Executive Gift Set",
    tag: "Premium"
  },
];

const infiniteProducts = [...products, ...products, ...products, ...products];

export function ProductSlider() {
  return (
    <section className="relative w-full bg-[#FCFDFF] py-24 overflow-hidden">
      {/* Background layer stays at the very bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundEffects />
      </div>

      {/* Content layer forced to the top using z-10 */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="not-italic" /* Explicitly ensuring no italics */
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[3px] w-10 bg-emerald-400"></span>
                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-emerald-500">Inventory Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none italic-none">
                The Swag <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Universe</span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-md font-bold leading-relaxed">
                Precision branding on curated high-quality materials. From executive desks to daily essentials.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-3 px-6 py-3 rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-md shadow-sm cursor-pointer"
            >
              <ShieldCheck className="text-emerald-500" size={20} />
              <span className="text-sm font-black text-slate-700">ISO Certified Quality</span>
            </motion.div>
          </div>
        </div>

        {/* The Ultra-Modern Marquee */}
        <div className="relative group/marquee">
          <motion.div
            className="flex gap-10 px-6"
            animate={{ x: [0, -3200] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {infiniteProducts.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative flex flex-col w-[300px] md:w-[350px] shrink-0 rounded-[40px] bg-white border border-slate-100 overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(29,144,255,0.2)] transition-all duration-700"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-sm">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{item.tag}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>

                <div className="p-8 flex flex-col justify-between flex-1 relative bg-white">
                  <div>
                    <h4 className="text-2xl font-black text-slate-800 transition-colors group-hover:text-blue-600">
                      {item.name}
                    </h4>
                    <p className="text-sm font-bold text-slate-400 mt-2">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-black">
                            {String.fromCharCode(64 + i)}
                         </div>
                       ))}
                       <span className="ml-4 text-[10px] font-black text-slate-400 self-center">+1k Sold</span>
                    </div>
                    
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-emerald-500 font-black text-[11px] uppercase tracking-wider cursor-pointer"
                    >
                      Details <ArrowRight size={14} />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[40px] border-2 border-transparent group-hover:border-emerald-400/30 pointer-events-none transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Vignette Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#FCFDFF] via-[#FCFDFF]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#FCFDFF] via-[#FCFDFF]/80 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-20 border-t border-slate-100/50 pt-12">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 px-6 opacity-60">
             {['High Fidelity Print', 'Global Shipping', 'Bulk Discounting', 'Custom Packaging'].map((text) => (
               <div key={text} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{text}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}