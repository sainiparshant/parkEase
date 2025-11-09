export default function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
      <div
        className={`w-14 h-14 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}
      >
        {/* icon is a ReactNode (Lucide icon component) */}
        <div className="w-6 h-6 text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
