"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaRedo } from "react-icons/fa";

export function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!isPlaying || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to physical pixels to avoid blur
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    let animationFrameId: number;
    let playerX = canvas.width / 2;
    const playerWidth = 30;
    const playerHeight = 20;
    const bullets: { x: number; y: number }[] = [];
    const enemies: { x: number; y: number; speed: number; size: number; hp: number }[] = [];
    
    let lastShootTime = 0;
    let enemySpawnRate = 60; // frames
    let frameCount = 0;
    let currentScore = 0;
    let isGameOver = false;

    // Mouse/Touch control
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      playerX = clientX - rect.left;
      // Clamp player position
      if (playerX < playerWidth / 2) playerX = playerWidth / 2;
      if (playerX > canvas.width - playerWidth / 2) playerX = canvas.width - playerWidth / 2;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: false });

    const drawShip = (x: number, y: number) => {
      ctx.fillStyle = "#3b82f6"; // Blue ship
      ctx.beginPath();
      ctx.moveTo(x, y - playerHeight / 2);
      ctx.lineTo(x + playerWidth / 2, y + playerHeight / 2);
      ctx.lineTo(x - playerWidth / 2, y + playerHeight / 2);
      ctx.closePath();
      ctx.fill();
    };

    const loop = () => {
      if (isGameOver) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player y position (near bottom)
      const playerY = canvas.height - 30;

      // Auto shoot
      const now = Date.now();
      if (now - lastShootTime > 250) {
        bullets.push({ x: playerX, y: playerY - playerHeight });
        lastShootTime = now;
      }

      // Update & Draw Bullets
      ctx.fillStyle = "#8b5cf6"; // Purple bullets
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y -= 7; // Bullet speed
        ctx.fillRect(b.x - 2, b.y, 4, 10);
        if (b.y < 0) bullets.splice(i, 1);
      }

      // Spawn Enemies
      frameCount++;
      if (frameCount % enemySpawnRate === 0) {
        const size = Math.random() * 20 + 15;
        enemies.push({
          x: Math.random() * (canvas.width - size) + size / 2,
          y: -size,
          speed: Math.random() * 1.5 + 1 + currentScore / 500, // Speed increases with score
          size: size,
          hp: size > 25 ? 2 : 1,
        });
        // Increase difficulty
        if (enemySpawnRate > 20) enemySpawnRate -= 1;
      }

      // Update & Draw Enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        e.y += e.speed;

        // Draw asteroid (block)
        ctx.fillStyle = e.hp > 1 ? "#ef4444" : "#f59e0b"; // Red if tough, orange if normal
        ctx.fillRect(e.x - e.size / 2, e.y - e.size / 2, e.size, e.size);

        // Check collision with bottom
        if (e.y > canvas.height + e.size) {
          isGameOver = true;
          setGameOver(true);
          setIsPlaying(false);
          enemies.splice(i, 1);
          continue;
        }

        // Check collision with player
        const dx = e.x - playerX;
        const dy = e.y - playerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < e.size / 2 + playerWidth / 2) {
          isGameOver = true;
          setGameOver(true);
          setIsPlaying(false);
        }

        // Check collision with bullets
        for (let j = bullets.length - 1; j >= 0; j--) {
          const b = bullets[j];
          if (
            b.x > e.x - e.size / 2 &&
            b.x < e.x + e.size / 2 &&
            b.y > e.y - e.size / 2 &&
            b.y < e.y + e.size / 2
          ) {
            bullets.splice(j, 1);
            e.hp -= 1;
            if (e.hp <= 0) {
              enemies.splice(i, 1);
              currentScore += 10;
              setScore(currentScore);
            }
            break;
          }
        }
      }

      // Draw Player
      drawShip(playerX, playerY);

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [isPlaying]);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border rounded-xl overflow-hidden relative shadow-lg">
      <div className="p-3 bg-secondary/50 border-b border-border flex justify-between items-center text-sm font-mono">
        <span className="text-muted-foreground font-semibold flex items-center gap-2">
          👾 Block Shooter
        </span>
        <span className="text-foreground font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          SCORE: {score}
        </span>
      </div>
      
      <div className="relative h-48 sm:h-56 w-full bg-background/50 overflow-hidden cursor-crosshair">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
        />

        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10"
            >
              {gameOver ? (
                <>
                  <div className="text-destructive font-bold text-xl mb-1">GAME OVER</div>
                  <div className="text-muted-foreground text-sm mb-4">Final Score: {score}</div>
                  <button
                    onClick={startGame}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
                  >
                    <FaRedo /> Try Again
                  </button>
                </>
              ) : (
                <>
                  <div className="text-foreground font-bold text-lg mb-1">Defend the Portfolio!</div>
                  <div className="text-muted-foreground text-xs mb-4 text-center px-4">
                    Hover or touch the game area to move your ship. It fires automatically.
                  </div>
                  <button
                    onClick={startGame}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20"
                  >
                    <FaPlay /> Start Game
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
