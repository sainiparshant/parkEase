import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 rounded-full px-4 py-2 shadow-sm mb-6">
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Live in 15+ cities
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0f172a] dark:text-white leading-tight">
                Smart Parking,{" "}
                <span className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>

              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                End the frustration of finding parking. Real-time availability,
                instant booking, cashless payments, and AI-powered optimization
                in one seamless platform.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span>Start Parking Smart</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>

                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 py-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f172a] dark:text-white">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Cities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f172a] dark:text-white">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Spots
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f172a] dark:text-white">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Uptime
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#10B981]/20 to-[#3B82F6]/20 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Available Spots
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">Live</div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((spot) => (
                      <div
                        key={spot}
                        className={`aspect-square rounded-lg flex items-center justify-center ${
                          spot % 3 === 0
                            ? "bg-red-100 text-red-600"
                            : "bg-[#10B981]/20 text-[#10B981]"
                        }`}
                      >
                        {spot % 3 === 0 ? "🚗" : "P"}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Available
                      </span>
                      <span className="font-semibold text-[#10B981]">
                        6 spots
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        EV Ready
                      </span>
                      <span className="font-semibold text-[#3B82F6]">
                        2 spots
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 w-32">
                <div className="text-xs text-gray-500">Booking Confirmed</div>
                <div className="font-semibold text-green-600">Spot #B4</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 w-32">
                <div className="text-xs text-gray-500">EV Charging</div>
                <div className="font-semibold text-blue-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white/50 dark:bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] dark:text-white mb-4">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">
                Stress-Free Parking
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From real-time availability to AI-powered optimization, ParkEase
              handles every aspect of modern parking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔄"
              title="Real-Time Availability"
              description="Live updates of every parking spot with occupancy status and EV readiness"
              color="from-[#10B981] to-[#22d3ee]"
            />
            <FeatureCard
              icon="📱"
              title="Smart Booking"
              description="Reserve your spot before arrival with guaranteed availability"
              color="from-[#3B82F6] to-[#8b5cf6]"
            />
            <FeatureCard
              icon="💳"
              title="Cashless Payments"
              description="Seamless payments with UPI, cards, and Razorpay integration"
              color="from-[#8b5cf6] to-[#ec4899]"
            />
            <FeatureCard
              icon="⚡"
              title="EV Ready"
              description="Dedicated EV spots with real-time charger status and availability"
              color="from-[#f59e0b] to-[#84cc16]"
            />
            <FeatureCard
              icon="🛡️"
              title="Security Alerts"
              description="Anti-theft notifications and booking expiration alerts"
              color="from-[#ef4444] to-[#f59e0b]"
            />
            <FeatureCard
              icon="🤖"
              title="AI Optimization"
              description="Predictive analytics for demand forecasting and dynamic pricing"
              color="from-[#06b6d4] to-[#3B82F6]"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] dark:text-white mb-4">
              Built with Modern{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Next.js", purpose: "Frontend" },
              { name: "Supabase", purpose: "Backend & Auth" },
              { name: "PostgreSQL", purpose: "Database" },
              { name: "Vercel", purpose: "Hosting" },
              { name: "Razorpay", purpose: "Payments" },
              { name: "AI/ML", purpose: "Optimization" },
              { name: "WebSocket", purpose: "Real-time" },
              { name: "TypeScript", purpose: "Type Safety" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-2xl font-bold text-[#0f172a] dark:text-white mb-2">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.purpose}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#10B981] to-[#3B82F6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Parking Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of smart drivers and cities using ParkEase to
            eliminate parking frustration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white text-[#10B981] px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>Get Started Free</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-all"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1F2937] text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            ParkEase • Built with Next.js & Supabase — open to contributions.
          </p>
        </div>
      </footer>
    </main>
  );
}
