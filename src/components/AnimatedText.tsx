"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [index, text]);

  return (
    <span className={className}>
      {displayText}
      {index < text.length && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default AnimatedText;
