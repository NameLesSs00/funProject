"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [answers, setAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswers({ ...answers, [e.target.name]: e.target.value === "true" });
  }

  useEffect(() => {
    let vibrateInterval: number | undefined;
    if (submitted && navigator.vibrate) {
      // Start continuous vibration every 800ms
      navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200]);
      vibrateInterval = window.setInterval(() => {
        navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200]);
      }, 800);
    }
    return () => {
      if (vibrateInterval) {
        clearInterval(vibrateInterval);
        navigator.vibrate(0); // stop vibration
      }
    };
  }, [submitted]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setSubmitted(true);
    alert("Haha you got hacked!");
  }

  return (
    <>
      <AnimatePresence>
        {!submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, z: -50 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            exit={{ opacity: 0, scale: 0.5, z: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Fun Quiz</h2>

              <div className="mb-5">
                <p className="mb-2">Problem 1: Is React fun?</p>
                <label className="mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="true"
                    onChange={handleChange}
                    required
                    className="mr-1"
                  />
                  True
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="false"
                    onChange={handleChange}
                    className="mr-1"
                  />
                  False
                </label>
              </div>

              <div className="mb-5">
                <p className="mb-2">Problem 2: Does 2 + 2 = 5?</p>
                <label className="mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="true"
                    onChange={handleChange}
                    required
                    className="mr-1"
                  />
                  True
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="false"
                    onChange={handleChange}
                    className="mr-1"
                  />
                  False
                </label>
              </div>

              <div className="mb-6">
                <p className="mb-2">Problem 3: Is JavaScript awesome?</p>
                <label className="mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="q3"
                    value="true"
                    onChange={handleChange}
                    required
                    className="mr-1"
                  />
                  True
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="q3"
                    value="false"
                    onChange={handleChange}
                    className="mr-1"
                  />
                  False
                </label>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="w-full py-3 rounded-lg border border-green-500 text-green-400 font-semibold hover:bg-green-700 transition-colors"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        )}

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <h1 className="text-red-600 text-4xl font-bold animate-pulse">
              Haha you got hacked!
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
