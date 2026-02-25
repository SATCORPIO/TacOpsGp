import { motion } from "framer-motion";

export default function CommandHeader() {
  return (
    <header className="border-b border-[#9F8750] bg-[#0B0F14] px-4 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-xs tracking-widest text-[#9F8750]">SATCORP COMMAND</h1>
        <p className="text-sm text-[#E5E7EB] uppercase">NETWORK SECURE</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#6B7280]">LIVE CLOCK</span>
        <Clock />
        <StatusDot />
      </div>
    </header>
  );
}

function Clock() {
  return (
    <motion.span
      className="text-xs text-[#E5E7EB]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {new Date().toLocaleTimeString()}
    </motion.span>
  );
}

function StatusDot() {
  return (
    <span className="h-2 w-2 rounded-full bg-[#1F5133] animate-pulse" />
  );
}
