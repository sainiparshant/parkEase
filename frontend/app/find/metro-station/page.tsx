"use client"

import React, { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MetroStationPage() {
  const [query, setQuery] = useState("")

  const mockStations = useMemo(
    () => [
      { id: 1, name: "Central Station", walkingMin: 4, connections: ["Blue Line"] },
      { id: 2, name: "Park Street", walkingMin: 8, connections: ["Green Line", "Red Line"] },
      { id: 3, name: "Riverside Metro", walkingMin: 12, connections: ["Yellow Line"] },
    ],
    []
  )

  const results = useMemo(() => {
    if (!query) return mockStations
    return mockStations.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, mockStations])

  return (
    <div className="min-h-screen p-8 bg-white text-[#1F2937]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Find nearby metro stations</h1>
          <p className="mt-2 text-sm text-[#475569]">Locate metro stations and see walking times and line connections. Combine with parking for first/last mile.</p>
        </header>

        <div className="flex gap-4 items-center mb-6">
          <Input value={query} onChange={(e) => setQuery((e.target as HTMLInputElement).value)} placeholder="Search station or area" className="flex-1" />
          <Button onClick={() => {}} className="bg-[#F59E0B]">Search</Button>
        </div>

        <div className="space-y-4">
          {results.map((s) => (
            <div key={s.id} className="p-4 border rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-[#6B7280]">{s.walkingMin} min walk • {s.connections.join(', ')}</div>
              </div>
              <div className="text-right">
                <div className="text-[#475569] text-sm">Combine with nearby parking</div>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm">View map</Button>
                  <Button size="sm" className="bg-[#10B981]">Find parking</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
