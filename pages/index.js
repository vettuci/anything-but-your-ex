import React, { useState } from "react";
import Head from "next/head";
import "../styles/globals.css";

const options = [
  "Fine, you can text your ex 🙈",
  "Do 20 jumping jacks",
  "Plan your next solo trip",
  "Make a smoothie",
  "Write a haiku about healing",
  "Block your ex again for good measure",
  "Call your best friend",
  "Eat dessert first",
  "Make your bed like you’re in a hotel",
  "Dance to a cringe song you secretly love"
];

const sliceColors = ["bg-purple-300", "bg-pink-200", "bg-yellow-200", "bg-green-200"];

export default function Home() {
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    const extraRotation = 360 * 5 + Math.random() * 360;
    setRotation(rotation + extraRotation);
    setSpinning(true);
    setResult("");
    setTimeout(() => {
      const rand = Math.random();
      const outcome = rand < 0.01 ? options[0] : options[Math.floor(Math.random() * (options.length - 1)) + 1];
      setResult(outcome);
      setSpinning(false);
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "I spun the wheel! 🎡",
        text: `I got '${result}' on Anything But Your Ex — I'm doing okay! 💪`,
        url: window.location.href
      });
    } else {
      alert("Sharing isn't supported. Take a screenshot and share the proof with your friends! 📸");
    }
  };

  return (
    <>
      <Head>
        <title>Anything But Your Ex</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-2">Anything But Your Ex</h1>
        <p className="text-lg mb-6">You have a 1% chance to text your ex. Spin the wheel and let fate decide. 🎯</p>

        <div className="w-64 h-64 rounded-full border-8 border-white shadow-lg flex items-center justify-center mb-4 transition-transform duration-[3000ms] ease-out" style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="text-sm font-medium">🎡 Fine, you can text your ex 🙈</div>
        </div>

        <button
          onClick={handleSpin}
          disabled={spinning}
          className="mb-4 px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
        >
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>

        {result && (
          <>
            <div className="max-w-md w-full mb-4 bg-white p-4 rounded-xl shadow-md">
              <p className="text-xl font-semibold mb-1">{result}</p>
              <p className="text-sm text-gray-600">Share proof with your friends to show you're okay and thriving! 🎉</p>
            </div>
            <button onClick={handleShare} className="border border-black px-4 py-2 rounded-md hover:bg-gray-100">
              Share Proof
            </button>
          </>
        )}
      </div>
    </>
  );
}
