"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface SkillCard {
  id: number;
  name: string;
  category: string;
  level: number;
  color: string;
}

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

interface SkillStackProps {
  skills: SkillCard[];
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: any, info: any) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function SkillStack({
  skills,
  randomRotation = true,
  sensitivity = 150,
  cardDimensions = { width: 280, height: 160 },
}: SkillStackProps) {
  const [cards, setCards] = useState<SkillCard[]>(skills);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      if (index > 0) {
        const [card] = newCards.splice(index, 1);
        newCards.unshift(card);
      }
      return newCards;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div
        className="relative mx-auto"
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
          perspective: 1000,
        }}
      >
        {cards.map((card, index) => {
          const randomRotate = randomRotation ? Math.random() * 6 - 3 : 0;

          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
            >
              <motion.div
                className={`rounded-xl overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 bg-gradient-to-br from-gray-900 to-gray-950 p-4 flex flex-col justify-center items-center cursor-pointer hover:border-cyan-300/80 transition-colors cursor-target`}
                onClick={() => sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 3 + randomRotate,
                  scale: 1 + index * 0.04 - cards.length * 0.04,
                  y: index * 8,
                  transformOrigin: "50% 50%",
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                style={{
                  width: cardDimensions.width,
                  height: cardDimensions.height,
                }}
              >
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl">{card.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">{card.category}</p>
                </div>
              </motion.div>
            </CardRotate>
          );
        })}
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-gray-400 text-sm">
          Drag cards to reveal more skills • Click to shuffle
        </p>
        <p className="text-cyan-400/60 text-xs mt-1">
          {cards.length} skills in stack
        </p>
      </motion.div>
    </div>
  );
}
