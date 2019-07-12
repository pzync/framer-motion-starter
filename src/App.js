import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div
        className="Box"
        whileTap={{ scale: 0.85, borderRadius: `50%` }}
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        animate={{
          scale: [1, 0.6, 1.2, 1],
          borderRadius: [`15%`, `50%`, `50%`, `15%`],
          rotate: [0, 180, -180, 0]
        }}
      />
    </div>
  );
}

export default App;
