import { useState } from "react";
import ConfettiEffect from "../components/ConfettiEffect";
import { motion } from "framer-motion";

export default function Surprise() {
  const [yes, setYes] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {yes && <ConfettiEffect />}

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Mau lanjut sampai tua bareng aku? ❤️
      </motion.h1>

      {!yes ? (
        <div className="flex gap-6">
          <button
            onClick={() => setYes(true)}
            className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg shadow-2xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Iya ❤️
          </button>

          <button
            onClick={() => alert("Hehe, nggak boleh nolak 😜")}
            className="px-8 py-4 bg-gray-800 text-white border-2 border-gray-600 rounded-full text-lg shadow-2xl hover:bg-gray-700 transition-colors"
          >
            Nggak 🙈
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-10 text-white text-xl"
        >
          Makasih sudah memilih aku 💕  
          <br />
          Aku sayang kamu.
        </motion.div>
      )}
    </div>
  );
}