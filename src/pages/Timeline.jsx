import { useState } from "react";
import TimelineCard from "../components/TimelineCard";
import { timelineData } from "../data/timeline";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < timelineData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-10 relative">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Cerita Cinta Kita ❤️
      </h1>

      <div className="max-w-4xl w-full mx-auto relative flex items-center justify-center">
        {/* TOMBOL PREVIOUS */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all
            ${
              currentIndex === 0
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-900 hover:bg-gray-100 shadow-2xl"
            }`}
        >
          ◄
        </button>

        {/* TIMELINE CARD */}
        <div className="w-full max-w-2xl mx-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TimelineCard
                year={timelineData[currentIndex].year}
                title={timelineData[currentIndex].title}
                description={timelineData[currentIndex].description}
                image={timelineData[currentIndex].image}
              />
            </motion.div>
          </AnimatePresence>

          {/* INDICATOR */}
          <div className="flex justify-center gap-2 mt-6">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TOMBOL NEXT */}
        <button
          onClick={handleNext}
          disabled={currentIndex === timelineData.length - 1}
          className={`absolute right-0 z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all
            ${
              currentIndex === timelineData.length - 1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-900 hover:bg-gray-100 shadow-2xl"
            }`}
        >
          ►
        </button>
      </div>

      {/* TOMBOL KE SURPRISE - Muncul di card terakhir */}
      {currentIndex === timelineData.length - 1 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate("/surprise")}
          className="mt-8 px-8 py-4 bg-white text-gray-900 rounded-full shadow-2xl font-semibold hover:bg-gray-100 transition-colors"
        >
          Satu Hal Terakhir 💌
        </motion.button>
      )}
    </div>
  );
}