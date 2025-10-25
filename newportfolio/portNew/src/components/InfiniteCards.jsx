import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteCards = ({ cards, duration = 20, delay = 0 }) => {
  const controls = useAnimation();
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Dynamically duplicate cards based on screen width
  const duplicatedCards = useMemo(() => {
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const cardWidth = 80 + 8 * 2; // w-80 + p-4 (1rem = 16px)
    const cardsPerSet = cards.length;
    const setsNeeded = Math.ceil(viewportWidth / (cardWidth * cardsPerSet)) + 1;
    return Array.from({ length: setsNeeded }).flatMap(() => cards);
  }, [cards]);

  useLayoutEffect(() => {
    let isMounted = true;

    const startAnimation = () => {
      if (carouselRef.current && isMounted && !isPaused) {
        const totalWidth = carouselRef.current.scrollWidth;
        const singleSetWidth =
          totalWidth / (duplicatedCards.length / cards.length);

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
      controls.stop();
    };
  }, [controls, duplicatedCards, duration, cards.length, isPaused]);

  // Handle pause/resume with delay
  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsPaused(false), delay * 1000);
  };

  return (
    <div
      className="overflow-hidden relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={carouselRef}
        className="flex gap-2"
        animate={controls}
        style={{ willChange: "transform" }}
      >
        {duplicatedCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-80 p-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-6 w-80 h-72 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-300 mt-2 line-clamp-3">
                  {card.description}
                </p>
              </div>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2 mt-3">
                {card.stack.map((tech, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-[#615fff] text-white text-sm rounded-lg"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href={card.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#615fff] font-medium hover:underline"
                >
                  Live
                </a>
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b2b2ce] font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCards;
