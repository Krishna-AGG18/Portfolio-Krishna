import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(Object.keys)]);
  return Object.fromEntries(
    [...keys].map(key => [
      key,
      [from[key], ...steps.map(step => step[key])]
    ])
  );
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = useMemo(() => 
    animateBy === 'words' ? text.split(' ') : text.split(''), 
    [text, animateBy]
  );

  const defaultFrom = useMemo(() => ({
    filter: 'blur(10px)',
    opacity: 0,
    y: direction === 'top' ? -50 : 50
  }), [direction]);

  const defaultTo = useMemo(() => [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      y: direction === 'top' ? 5 : -5
    },
    { filter: 'blur(0px)', opacity: 1, y: 0 }
  ], [direction]);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [threshold, rootMargin]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const keyframes = useMemo(() => 
    buildKeyframes(fromSnapshot, toSnapshots), 
    [fromSnapshot, toSnapshots]
  );

  const transition = useMemo(() => {
    const stepCount = toSnapshots.length + 1;
    return {
      duration: stepDuration * (stepCount - 1),
      times: Array.from({ length: stepCount }, (_, i) => 
        stepCount === 1 ? 0 : i / (stepCount - 1)
      ),
      ease: easing
    };
  }, [toSnapshots, stepDuration, easing]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p ref={ref} className={`blur-text ${className} flex flex-wrap text-center items-center justify-center`}>
        {elements.map((segment, index) => (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? keyframes : fromSnapshot}
            transition={{ ...transition, delay: (index * delay) / 1000 }}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default BlurText; 