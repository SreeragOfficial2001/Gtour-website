import React from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const TypingTextAnimation = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
   
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words]);

  return (
    <motion.div className="text-2xl font-bold text-yellow-500 mt-10">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-6 bg-white ml-1"
      ></motion.span>
    </motion.div>
  );
};

export default TypingTextAnimation;
