"use client"

import React, { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Simple client-only mock page for finding parking routes
export default function ParkingRoutePage() {
  const [query, setQuery] = useState("")

  const mockSpots = useMemo(
    () => [
      { id: 1, name: "Central Park Garage", distanceKm: 0.6, ETAmin: 3, available: 12 },
      { id: 2, name: "Riverside Lot", distanceKm: 1.4, ETAmin: 6, available: 4 },
      { id: 3, name: "Mall Parking", distanceKm: 2.2, ETAmin: 9, available: 0 },
    ],
    []
  )

  const results = useMemo(() => {
    if (!query) return mockSpots
    return mockSpots.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, mockSpots])

  return (
    <div className="min-h-screen p-8 bg-white text-[#1F2937]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Find a parking route</h1>
          <p className="mt-2 text-sm text-[#475569]">Enter your destination to see nearby parking options and quick route estimations.</p>
        </header>

        <div className="flex gap-4 items-center mb-6">
          <Input
            value={query}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            placeholder="Search address or place (e.g. Central Park)"
            className="flex-1"
          />
          <Button onClick={() => {}} className="bg-[#10B981]">Find Route</Button>
        </div>

        <section className="space-y-4">
          {results.map((spot) => (
            <div key={spot.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <div>
                <div className="font-medium text-lg">{spot.name}</div>
                <div className="text-sm text-[#6B7280]">{spot.distanceKm} km • {spot.ETAmin} min</div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${spot.available > 0 ? "text-[#10B981]" : "text-[#F59E0B]"}`}>
                  {spot.available} spots
                </div>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm">View on map</Button>
                  <Button size="sm" className="bg-[#3B82F6]">Navigate</Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
