import React, { useState } from "react";
const options = [
  "Fine, you can text your ex",
  "Do 20 jumping jacks",
  "Take a 10-minute walk",
  "Try a YouTube dance workout",
  "Attempt a yoga pose you’ve never done",
  "Go outside and touch some grass",
  "Stretch like a cat",
  "Take a cold shower",
  "Do a TikTok mobility routine",
  "Run around the block once",
  "Learn how to do a cartwheel",
  "Make a pottery class booking",
  "Doodle your ex as a cartoon villain",
  "Write a haiku about healing",
  "Create a breakup playlist",
  "Paint your feelings in 5 minutes",
  "Take an aesthetic pic of something random",
  "Try writing a one-minute song about moving on",
  "Make a meme about your last situationship",
  "Collage your ideal partner",
  "DIY something with whatever’s around you",
  "Compliment a stranger",
  "Donate $1 to the Red Cross",
  "Text someone you miss (who’s not your ex)",
  "Send love to a friend you haven’t spoken to in a while",
  "Leave a nice comment on someone’s post",
  "Volunteer online for 15 minutes",
  "Send your mom or dad a silly selfie",
  "Pay it forward—buy a coffee for someone",
  "Write a list of things you’re grateful for",
  "Share a resource or tip online that helped you",
  "Journal for 5 minutes",
  "Meditate with your eyes closed for 2 minutes",
  "Reframe a toxic thought into a positive one",
  "Make a list of red flags",
  "Write down 5 things you love about yourself",
  "Name 3 lessons your ex taught you",
  "Shout into a pillow (seriously)",
  "Visualize your dream relationship",
  "Do a guided breathwork video",
  "Hug yourself for 30 seconds",
  "Block your ex again for good measure",
  "Screenshot your DMs and delete your ex’s thread",
  "Update your dating profile bio",
  "Write a fake apology text from them",
  "Change your ex’s name in your phone to ‘Nope’",
  "Google “hot people doing amazing things”",
  "Read a Reddit thread on glow-ups",
  "Make a list of all the things they sucked at",
  "Reorganize your camera roll—delete the memories",
  "Save a quote that makes you feel like a god",
  "Learn how to say “I’m over you” in Japanese",
  "Try a Duolingo lesson",
  "Watch a 5-minute TED talk",
  "Try drawing with your non-dominant hand",
  "Take an online quiz (MBTI, Enneagram, etc.)",
  "Set up your LinkedIn profile",
  "Update your resume",
  "Sign up for a free online course",
  "Read the intro of a self-help book",
  "Watch a cooking tutorial",
  "Turn off your phone for 15 minutes",
  "Delete one app you don’t need",
  "Clean up your home screen",
  "Set a screen time limit",
  "Make a new lock screen that inspires you",
  "Archive your old Instagram stories",
  "Send a meme to someone who makes you laugh",
  "Play a game that makes your brain work",
  "Turn airplane mode on and leave it",
  "Unsubscribe from three emails",
  "Eat a fruit slowly and mindfully",
  "Light a scented candle",
  "Put on your best outfit for no reason",
  "Try on your favorite lipstick",
  "Watch a clip of your comfort show",
  "Listen to a confidence-boosting playlist",
  "Try a new tea or coffee combo",
  "Make a smoothie",
  "Eat dessert first",
  "Make your bed like you’re in a hotel",
  "Write your ex’s name backwards 20x",
  "Walk backwards for 1 minute",
  "Pretend you’re the main character and narrate your day",
  "Speak in a British accent for 5 minutes",
  "Do one thing you’ve been procrastinating",
  "Start a timer and declutter your bag in 3 minutes",
  "Dance to a cringe song you secretly love",
  "Watch one ASMR video",
  "Eat something spicy and cry it out",
  "Try to balance a book on your head for 1 minute",
  "Message a mentor or someone inspiring",
  "Sign up for a class or workshop",
  "Create a mood board for your future",
  "Write a letter to future you",
  "Research your dream job",
  "Plan your next solo trip",
  "Budget your week",
  "Look at how far you’ve come this year",
  "Say out loud: “I’m not texting my ex because I’m busy living my best life.”"
];

const sliceColors = ["#D8B4FE"];

function getRandomOption() {
  const rand = Math.random();
  return rand < 0.01 ? options[0] : options[Math.floor(Math.random() * (options.length - 1)) + 1];
}

import React from "react";

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
      setResult(getRandomOption());
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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-yellow-100 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Anything But Your Ex</h1>
      <p className="mb-4 text-lg">You have a 1% chance to be allowed to text your ex. Spin the wheel and see what destiny decides. 🎯</p>

      <div className="relative mb-6">
        <svg
          viewBox="0 0 300 300"
          width="300"
          height="300"
          style={{ transform: `rotate(${rotation}deg)`, transition: "transform 3s ease-out" }}
        >
          <path
            d="M150,150 L150,10 A140,140 0 1,1 149.99,10 Z"
            fill={sliceColors[0]}
          />
          <text
            x="150"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fill="#000"
          >
            Fine, you can text your ex
          </text>
        </svg>
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-black"></div>
        </div>
      </div>

      <button onClick={handleSpin} disabled={spinning} className="mb-4">
        {spinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {result && (
        <div className="max-w-md w-full mb-4 bg-white p-6 rounded-lg shadow">
          <p className="text-2xl font-semibold mb-2">
            {result === options[0] ? "Fine, you got permission — but think twice! 🫣" : result}
          </p>
          <p className="text-sm text-gray-600">
            Share proof with your friends to show you're okay and thriving! 🎉
          </p>
        </div>
      )}

      {result && (
        <button onClick={handleShare} className="bg-white border border-black px-4 py-2 rounded-md">
          Share Proof
        </button>
      )}
    </div>
  );
}
