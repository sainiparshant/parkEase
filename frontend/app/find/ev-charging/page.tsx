"use client"

import React, { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EvChargingPage() {
  const [query, setQuery] = useState("")

  const mockStations = useMemo(
    () => [
      { id: 1, name: "GreenCharge Station A", plugs: 6, available: 3, type: "Type2" },
      { id: 2, name: "BlueCharge Hub", plugs: 10, available: 0, type: "CCS" },
      { id: 3, name: "Mall EV Point", plugs: 4, available: 1, type: "Type2" },
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
          <h1 className="text-4xl font-bold">Find EV charging stations</h1>
          <p className="mt-2 text-sm text-[#475569]">Search for EV chargers near your destination, see plug types and availability.</p>
        </header>

        <div className="flex gap-4 items-center mb-6">
          <Input value={query} onChange={(e) => setQuery((e.target as HTMLInputElement).value)} placeholder="Search station or area" className="flex-1" />
          <Button onClick={() => {}} className="bg-[#3B82F6]">Search</Button>
        </div>

        <div className="space-y-4">
          {results.map((s) => (
            <div key={s.id} className="p-4 border rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-[#6B7280]">{s.plugs} plugs • {s.type}</div>
              </div>
              <div className="text-right">
                <div className={`${s.available > 0 ? "text-[#10B981]" : "text-[#F59E0B]"} font-semibold`}>
                  {s.available} available
                </div>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm">Details</Button>
                  <Button size="sm" className="bg-[#10B981]">Navigate</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
