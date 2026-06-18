import { motion } from "framer-motion";
import { Award, Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

// Mock data since we don't have a backend table yet
const mockBadges: Badge[] = [
  {
    id: "1",
    name: "Early Bird",
    description: "Joined within the first month of launch.",
    icon: "🌅",
    unlocked: true,
    unlockedAt: "2023-10-01",
  },
  {
    id: "2",
    name: "First Session",
    description: "Attended your first learning session.",
    icon: "🎓",
    unlocked: true,
    unlockedAt: "2023-10-05",
  },
  {
    id: "3",
    name: "Problem Solver",
    description: "Solved 10 community doubts.",
    icon: "💡",
    unlocked: false,
  },
  {
    id: "4",
    name: "Streak Master",
    description: "Maintained a 30-day streak.",
    icon: "🔥",
    unlocked: false,
  },
  {
    id: "5",
    name: "Top Contributor",
    description: "Ranked in the top 10 on the leaderboard.",
    icon: "⭐",
    unlocked: false,
  },
];

export default function BadgesGridWidget() {
  const unlockedCount = mockBadges.filter((b) => b.unlocked).length;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Award size={20} className="text-yellow-400" />
          Earned Badges
        </h3>
        <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
          {unlockedCount} / {mockBadges.length} Unlocked
        </span>
      </div>

      <TooltipProvider delayDuration={200}>
        <div className="grid grid-cols-5 gap-3">
          {mockBadges.map((badge, index) => (
            <Tooltip key={badge.id}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    aspect-square rounded-2xl flex items-center justify-center text-3xl
                    cursor-pointer transition-all border
                    ${
                      badge.unlocked
                        ? "bg-gradient-to-br from-yellow-400/20 to-orange-500/10 border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)]"
                        : "bg-slate-800/50 border-slate-700/50 grayscale opacity-50"
                    }
                  `}
                >
                  {badge.unlocked ? (
                    badge.icon
                  ) : (
                    <Lock size={24} className="text-slate-500" />
                  )}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-slate-800 border-slate-700 text-slate-200"
              >
                <div className="text-sm font-semibold mb-1 flex items-center gap-2">
                  {badge.icon} {badge.name}
                </div>
                <p className="text-xs text-slate-400">{badge.description}</p>
                {badge.unlockedAt && (
                  <p className="text-[10px] text-slate-500 mt-2">
                    Unlocked: {new Date(badge.unlockedAt).toLocaleDateString()}
                  </p>
                )}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
