import { MessageSquareHeart, TrendingUp } from "lucide-react";

export default function SolvedDoubtsWidget() {
  const totalSolved = 42;
  const thisMonth = 12;
  const growth = "+15%";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col h-full relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full transition-opacity opacity-50 group-hover:opacity-100" />

      <div className="flex justify-between items-start mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <MessageSquareHeart size={20} className="text-emerald-400" />
          Doubts Solved
        </h3>
        <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg text-xs font-medium">
          <TrendingUp size={14} /> {growth}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="text-center mb-6">
          <span className="text-5xl font-black text-white">{totalSolved}</span>
          <p className="text-sm text-slate-400 mt-1">Total Contributions</p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/30 flex justify-between items-center">
          <span className="text-sm text-slate-300">This Month</span>
          <span className="text-lg font-bold text-emerald-400">{thisMonth}</span>
        </div>
      </div>
    </div>
  );
}
