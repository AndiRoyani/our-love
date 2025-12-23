/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function TimelineCard({ year, title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* CARD CONTAINER - Polaroid Style */}
      <div className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-lg shadow-2xl transform hover:scale-[1.02] transition-all duration-500 max-w-2xl mx-auto">
        
        {/* FOTO POLAROID */}
        <div className="relative overflow-hidden rounded-md mb-6 shadow-xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* YEAR BADGE */}
        <div className="absolute top-8 right-8 bg-black text-white px-6 py-2 rounded-full shadow-lg font-bold text-lg">
          {year}
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-4">
          {/* TITLE dengan decorative line */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
              {title}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-gray-400 rounded-full" />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed text-base font-light italic">
            "{description}"
          </p>
        </div>

        {/* DECORATIVE HEARTS */}
        <div className="absolute bottom-4 right-6 flex gap-1 opacity-20">
          <span className="text-2xl">♥</span>
          <span className="text-xl">♥</span>
          <span className="text-sm">♥</span>
        </div>
      </div>

      {/* TAPE EFFECT - untuk kesan scrapbook */}
      <div className="absolute -top-3 left-1/4 w-24 h-8 bg-gray-300/40 backdrop-blur-sm transform -rotate-2 shadow-md" />
      <div className="absolute -top-3 right-1/4 w-24 h-8 bg-gray-300/40 backdrop-blur-sm transform rotate-2 shadow-md" />
    </motion.div>
  );
}