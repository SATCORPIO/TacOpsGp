import { motion } from "framer-motion";

export default function OperationsMap() {
  return (
    <div className="bg-[#0B0F14] border border-[#9F8750] p-4">
      <h2 className="text-xs uppercase text-[#9F8750] mb-4">
        Global Operations Grid
      </h2>

      <div className="relative h-48 bg-[#050507] border border-[#9F8750]">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-20">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="border border-[#9F8750]" />
          ))}
        </div>

        <motion.div
          className="absolute top-1/3 left-1/2 h-2 w-2 bg-[#5E0B12]"
          animate={{ scale: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </div>
  );
}
