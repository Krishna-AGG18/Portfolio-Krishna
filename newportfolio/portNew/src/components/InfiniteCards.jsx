import { useLayoutEffect, useMemo, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteCards = ({ cards, duration = 20 }) => {
  const controls = useAnimation();
  const carouselRef = useRef(null);

  // Dynamically calculate duplicates based on viewport (at least 2 sets, more for wide screens)
  const duplicatedCards = useMemo(() => {
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const cardWidth = 80 + 8 * 2; // w-80 + p-4 (assuming 1rem=16px)
    const cardsPerSet = cards.length;
    const setsNeeded = Math.ceil(viewportWidth / (cardWidth * cardsPerSet)) + 1; // +1 for safety
    return Array.from({ length: setsNeeded }).flatMap(() => cards);
  }, [cards]);

  useLayoutEffect(() => {
    let isMounted = true;
    const startAnimation = () => {
      if (carouselRef.current && isMounted) {
        const totalWidth = carouselRef.current.scrollWidth;
        const singleSetWidth = totalWidth / (duplicatedCards.length / cards.length);

        controls.start({
          x: -singleSetWidth,
          transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          },
        });
      }
    };

    startAnimation();

    return () => {
      isMounted = false;
      controls.stop(); // Cleanup to stop animation on unmount
    };
  }, [controls, duplicatedCards, duration, cards.length]);

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={controls}
        style={{ willChange: "transform" }}
      >
        {duplicatedCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-80 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-gray-600">{card.content}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCards;
