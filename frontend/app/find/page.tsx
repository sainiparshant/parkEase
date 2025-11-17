import Link from "next/link"

export default function FindIndexPage() {
  return (
    <div className="min-h-screen bg-white p-8 text-[#1F2937]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Find — ParkEase</h1>
          <p className="mt-2 text-sm text-[#475569]">Choose a finder tool: parking routes, EV charging stations, or nearby metro stations.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/find/parking-route" className="block p-6 rounded-lg border shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold">Parking Route</h2>
            <p className="mt-2 text-sm text-[#6B7280]">Quick route suggestions and nearby parking availability.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white bg-[#10B981] px-3 py-1 rounded">
              Open tool →
            </div>
          </Link>

          <Link href="/find/ev-charging" className="block p-6 rounded-lg border shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold">EV Charging</h2>
            <p className="mt-2 text-sm text-[#6B7280]">Find chargers, plug types and real-time availability.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white bg-[#3B82F6] px-3 py-1 rounded">
              Open tool →
            </div>
          </Link>

          <Link href="/find/metro-station" className="block p-6 rounded-lg border shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold">Metro Stations</h2>
            <p className="mt-2 text-sm text-[#6B7280]">Locate nearby metro stops and walking times.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1F2937] bg-[#F59E0B] px-3 py-1 rounded">
              Open tool →
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
