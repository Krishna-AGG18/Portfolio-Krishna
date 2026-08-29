"use client";

import { useState } from "react";
import { NodeId, ThreeDeveloperCore } from "./ThreeDeveloperCore";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FOCUS_DATA: Record<NodeId, { label: string; status: "PRIMARY" | "WORKING" | "EXPLORING", colors: { border: string, text: string, bg: string, label: string } }> = {
  fullstack: { label: "FULL-STACK DEVELOPMENT", status: "PRIMARY", colors: { border: "border-pink-500/50", text: "text-pink-400", bg: "bg-pink-500/20", label: "text-pink-100" } },
  backend: { label: "BACKEND ENGINEERING", status: "PRIMARY", colors: { border: "border-yellow-500/50", text: "text-yellow-400", bg: "bg-yellow-500/20", label: "text-yellow-100" } },
  systemdesign: { label: "SYSTEM DESIGN", status: "WORKING", colors: { border: "border-orange-500/50", text: "text-orange-400", bg: "bg-orange-500/20", label: "text-orange-100" } },
  aiml: { label: "AI / MACHINE LEARNING", status: "EXPLORING", colors: { border: "border-emerald-500/50", text: "text-emerald-400", bg: "bg-emerald-500/20", label: "text-emerald-100" } },
  nlp: { label: "NATURAL LANGUAGE PROCESSING", status: "EXPLORING", colors: { border: "border-purple-500/50", text: "text-purple-400", bg: "bg-purple-500/20", label: "text-purple-100" } },
};

function FocusItem({ 
  id, 
  data, 
  isActive, 
  isHovered 
}: { 
  id: NodeId; 
  data: typeof FOCUS_DATA[NodeId]; 
  isActive: boolean; 
  isHovered: boolean;
}) {
  const highlight = isActive || isHovered;
  
  return (
    <div className={cn(
      "flex items-center justify-between py-3 border-b transition-all duration-300",
      highlight ? data.colors.border : "border-white/5"
    )}>
      <span className={cn(
        "text-sm tracking-wider transition-colors duration-300",
        highlight ? `font-medium ${data.colors.label}` : "text-zinc-400"
      )}>
        {data.label}
      </span>
      <span className={cn(
        "text-[10px] font-mono tracking-widest px-2 py-1 rounded-sm transition-all duration-300",
        highlight ? `${data.colors.bg} ${data.colors.text}` : "bg-white/5 text-zinc-500"
      )}>
        {data.status}
      </span>
    </div>
  );
}

export function DeveloperCommandCenter() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);

  // Derive dynamic content based on active node
  const activeFocus = activeNode ? FOCUS_DATA[activeNode] : null;

  return (
    <div className="about-card mt-6 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      
      {/* HEADER */}
      <div className="mb-12 border-b border-white/5 pb-8">
        <span className="font-mono text-xs text-cyan-500 tracking-widest mb-4 block">02 / DEVELOPER COMMAND CENTER</span>
        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-2">Inside the developer core.</h3>
        <p className="text-zinc-400 text-sm max-w-xl">A visual snapshot of what I'm building, exploring, and learning.</p>
      </div>
      
      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[500px]">
        
        {/* LEFT: 3D CORE */}
        <div className="relative w-full h-full rounded-2xl bg-black/20 border border-white/5 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
          <ThreeDeveloperCore 
            activeNode={activeNode} 
            setActiveNode={setActiveNode} 
            hoveredNode={hoveredNode} 
            setHoveredNode={setHoveredNode} 
          />
          
          {/* Subtle floating labels */}
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-500 tracking-widest pointer-events-none">
            SYS.ONLINE_
          </div>
          <div className="absolute top-4 right-4 font-mono text-[10px] text-cyan-500/50 tracking-widest pointer-events-none flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            LIVE
          </div>
        </div>
        
        {/* RIGHT: INFO PANEL */}
        <div className="flex flex-col h-full justify-center space-y-12">
          
          {/* CURRENT FOCUS LIST */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">DEVELOPER STATUS</h4>
              <span className="text-[10px] font-mono text-cyan-500/50 tracking-widest">
                {activeNode ? `NODE:${activeNode.toUpperCase()}` : "IDLE_MODE"}
              </span>
            </div>
            
            <div className="space-y-1">
              {(Object.keys(FOCUS_DATA) as NodeId[]).map((id) => (
                <div 
                  key={id}
                  onMouseEnter={() => setHoveredNode(id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveNode(activeNode === id ? null : id)}
                  className="cursor-pointer"
                >
                  <FocusItem 
                    id={id} 
                    data={FOCUS_DATA[id]} 
                    isActive={activeNode === id} 
                    isHovered={hoveredNode === id} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CURRENTLY BUILDING */}
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">CURRENTLY BUILDING</h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-0.5">›</span> AI-powered applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-0.5">›</span> Production-ready full-stack systems
                </li>
              </ul>
            </div>
            
            {/* NEXT UP */}
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">NEXT UP</h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-0.5">›</span> System Design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-0.5">›</span> Advanced Backend
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-0.5">›</span> Machine Learning
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
