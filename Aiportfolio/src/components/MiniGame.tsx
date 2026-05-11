"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaRedo, FaMousePointer } from "react-icons/fa";

type GameState = "autoplay" | "playing" | "gameover";

export function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>("autoplay");
  const gameStateRef = useRef<GameState>("autoplay");
  const [score, setScore] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Sync ref with state for the game loop to access latest state without restarting
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
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
    let bullets: { x: number; y: number }[] = [];
    let enemies: { x: number; y: number; speed: number; size: number; hp: number }[] = [];
    
    let lastShootTime = 0;
    let enemySpawnRate = 60; 
    let frameCount = 0;
    let currentScore = 0;
    let isDead = false;

    // User Interaction to take control
    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      if (gameStateRef.current === "gameover") return;
      
      // If we are in autoplay, switch to playing mode
      if (gameStateRef.current === "autoplay") {
        setGameState("playing");
      }
      
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      playerX = clientX - rect.left;
      
      // Clamp player position
      if (playerX < playerWidth / 2) playerX = playerWidth / 2;
      if (playerX > canvas.width - playerWidth / 2) playerX = canvas.width - playerWidth / 2;
    };

    // Attach listeners to the canvas wrapper so it only triggers when hovering the game
    const canvasContainer = canvas.parentElement;
    if (canvasContainer) {
      canvasContainer.addEventListener("mousemove", handleInteraction);
      canvasContainer.addEventListener("touchmove", handleInteraction, { passive: false });
    }

    const drawShip = (x: number, y: number) => {
      ctx.fillStyle = gameStateRef.current === "autoplay" ? "#a855f7" : "#3b82f6"; // Purple in AI mode, Blue when user controls
      ctx.beginPath();
      ctx.moveTo(x, y - playerHeight / 2);
      ctx.lineTo(x + playerWidth / 2, y + playerHeight / 2);
      ctx.lineTo(x - playerWidth / 2, y + playerHeight / 2);
      ctx.closePath();
      ctx.fill();
    };

    const resetGameVariables = () => {
      playerX = canvas.width / 2;
      bullets = [];
      enemies = [];
      currentScore = 0;
      setScore(0);
      enemySpawnRate = 60;
      isDead = false;
    };

    const loop = () => {
      // If dead and waiting for user to restart
      if (isDead && gameStateRef.current === "gameover") {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const playerY = canvas.height - 30;

      // Autoplay AI Logic
      if (gameStateRef.current === "autoplay" && !isDead) {
        if (enemies.length > 0) {
          // Find the lowest enemy (closest to bottom)
          let target = enemies[0];
          for (let e of enemies) {
            if (e.y > target.y) target = e;
          }
          // Move towards target smoothly
          const speed = 4;
          if (playerX < target.x - speed) playerX += speed;
          else if (playerX > target.x + speed) playerX -= speed;
          else playerX = target.x;
          
          // Keep in bounds
          if (playerX < playerWidth / 2) playerX = playerWidth / 2;
          if (playerX > canvas.width - playerWidth / 2) playerX = canvas.width - playerWidth / 2;
        }
      }

      // Auto shoot
      const now = Date.now();
      if (now - lastShootTime > 250 && !isDead) {
        bullets.push({ x: playerX, y: playerY - playerHeight });
        lastShootTime = now;
      }

      // Update & Draw Bullets
      ctx.fillStyle = "#8b5cf6"; 
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y -= 7; 
        ctx.fillRect(b.x - 2, b.y, 4, 10);
        if (b.y < 0) bullets.splice(i, 1);
      }

      // Spawn Enemies
      frameCount++;
      if (frameCount % enemySpawnRate === 0 && !isDead) {
        const size = Math.random() * 20 + 15;
        enemies.push({
          x: Math.random() * (canvas.width - size) + size / 2,
          y: -size,
          speed: Math.random() * 1.5 + 1 + currentScore / 500, 
          size: size,
          hp: size > 25 ? 2 : 1,
        });
        if (enemySpawnRate > 20) enemySpawnRate -= 1;
      }

      // Update & Draw Enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        e.y += e.speed;

        ctx.fillStyle = e.hp > 1 ? "#ef4444" : "#f59e0b"; 
        ctx.fillRect(e.x - e.size / 2, e.y - e.size / 2, e.size, e.size);

        // Check collision with bottom
        if (e.y > canvas.height + e.size) {
          handleDeath();
          enemies.splice(i, 1);
          continue;
        }

        // Check collision with player
        if (!isDead) {
          const dx = e.x - playerX;
          const dy = e.y - playerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < e.size / 2 + playerWidth / 2) {
            handleDeath();
          }
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

      // Draw Player if not dead
      if (!isDead) {
        drawShip(playerX, playerY);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    const handleDeath = () => {
      isDead = true;
      if (gameStateRef.current === "autoplay") {
        // Silently restart after a brief moment in AI mode
        setTimeout(() => {
          resetGameVariables();
        }, 1000);
      } else {
        // Show game over overlay for user
        setGameState("gameover");
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      if (canvasContainer) {
        canvasContainer.removeEventListener("mousemove", handleInteraction);
        canvasContainer.removeEventListener("touchmove", handleInteraction);
      }
    };
  }, [resetTrigger]); // Re-run effect when user triggers restart

  const handleRestart = () => {
    setGameState("playing");
    setScore(0);
    setResetTrigger((prev) => prev + 1);
  };

  const enableAutoplay = () => {
    setGameState("autoplay");
    setScore(0);
    setResetTrigger((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border rounded-xl overflow-hidden relative shadow-lg">
      <div className="p-3 bg-secondary/50 border-b border-border flex justify-between items-center text-sm font-mono">
        <span className="text-muted-foreground font-semibold flex items-center gap-2">
          👾 Block Shooter
        </span>
        <div className="flex items-center gap-4">
          {gameState === "autoplay" && (
             <span className="text-xs text-purple-500 font-bold animate-pulse hidden sm:block">AI AUTOPLAY</span>
          )}
          <span className="text-foreground font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            SCORE: {score}
          </span>
        </div>
      </div>
      
      <div className="relative h-48 sm:h-56 w-full bg-background/50 overflow-hidden cursor-crosshair">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
        />

        {/* Floating instruction when in autoplay */}
        <AnimatePresence>
          {gameState === "autoplay" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 pointer-events-none"
            >
              <FaMousePointer className="text-blue-500 w-3 h-3" />
              <span className="text-xs font-medium text-foreground">Hover to take control</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Over Screen */}
        <AnimatePresence>
          {gameState === "gameover" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10"
            >
              <div className="text-destructive font-bold text-2xl mb-1">GAME OVER</div>
              <div className="text-muted-foreground text-sm mb-6">Final Score: {score}</div>
              <div className="flex gap-3">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
                >
                  <FaRedo /> Try Again
                </button>
                <button
                  onClick={enableAutoplay}
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium hover:bg-secondary/80 transition-transform hover:scale-105 active:scale-95"
                >
                  <FaPlay /> Watch AI
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
