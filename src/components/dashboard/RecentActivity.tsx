import { Activity, BookOpen, CheckCircle, MessageCircle } from "lucide-react";

const activities = [
  {
    id: "1",
    title: "Completed React Basics Session",
    time: "2 hours ago",
    icon: <CheckCircle size={16} className="text-emerald-400" />,
    color: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: "2",
    title: "Uploaded JavaScript Notes",
    time: "5 hours ago",
    icon: <BookOpen size={16} className="text-blue-400" />,
    color: "bg-blue-400/10 border-blue-400/20",
  },
  {
    id: "3",
    title: "Answered 5 Community Questions",
    time: "Yesterday",
    icon: <MessageCircle size={16} className="text-purple-400" />,
    color: "bg-purple-400/10 border-purple-400/20",
  },
  {
    id: "4",
    title: "Joined UI/UX Discussion",
    time: "Yesterday",
    icon: <Activity size={16} className="text-cyan-400" />,
    color: "bg-cyan-400/10 border-cyan-400/20",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Activity size={20} className="text-emerald-400" />
          Recent Activity
        </h3>
      </div>

      <div className="space-y-4 flex-1 relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-800" />

        {activities.map((activity) => (
          <div key={activity.id} className="relative pl-12 group cursor-pointer">
            {/* Icon circle on timeline */}
            <div
              className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center border z-10 ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 hover:bg-slate-800/60 transition-colors">
              <p className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                {activity.title}
              </p>
              <span className="text-xs text-slate-500 mt-1 block">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}