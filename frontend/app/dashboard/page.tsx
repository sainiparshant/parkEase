"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    totalBookings: 24,
    activeBookings: 1,
    savedSpots: 3,
  }

  // Mock offers
  const offers = [
    {
      id: 1,
      title: "50% Off EV Charging",
      description: "Book any EV charging slot this week and save 50%",
      bgColor: "bg-gradient-to-r from-[#3B82F6] to-[#10B981]",
      validUntil: "Dec 31, 2025",
    },
    {
      id: 2,
      title: "Weekend Parking Pass",
      description: "Unlimited weekend parking at select locations",
      bgColor: "bg-gradient-to-r from-[#F59E0B] to-[#10B981]",
      validUntil: "Dec 15, 2025",
    },
  ]

  // Mock recent activities
  const activities = [
    {
      id: 1,
      type: "booking",
      location: "Central Park Garage",
      time: "2 hours ago",
      status: "Active",
      statusColor: "text-[#10B981]",
    },
    {
      id: 2,
      type: "payment",
      location: "Riverside Lot",
      time: "Yesterday",
      status: "Completed",
      statusColor: "text-[#6B7280]",
    },
    {
      id: 3,
      type: "booking",
      location: "Mall Parking",
      time: "3 days ago",
      status: "Completed",
      statusColor: "text-[#6B7280]",
    },
  ]

  // Quick actions
  const quickActions = [
    { label: "Find Parking", href: "/find/parking-route", color: "bg-[#10B981]" },
    { label: "EV Charging", href: "/find/ev-charging", color: "bg-[#3B82F6]" },
    { label: "Metro Stations", href: "/find/metro-station", color: "bg-[#F59E0B]" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#1F2937]">Welcome back, {user.name}!</h1>
          <p className="mt-2 text-[#6B7280]">Here's what's happening with your parking today.</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">Total Bookings</p>
                <p className="text-3xl font-bold text-[#1F2937] mt-1">{user.totalBookings}</p>
              </div>
              <div className="w-12 h-12 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🅿️</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">Active Now</p>
                <p className="text-3xl font-bold text-[#10B981] mt-1">{user.activeBookings}</p>
              </div>
              <div className="w-12 h-12 bg-[#3B82F6] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">Saved Spots</p>
                <p className="text-3xl font-bold text-[#1F2937] mt-1">{user.savedSpots}</p>
              </div>
              <div className="w-12 h-12 bg-[#F59E0B] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Banner Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className={`${offer.bgColor} rounded-xl p-6 text-white shadow-lg`}>
                <h3 className="text-xl font-bold">{offer.title}</h3>
                <p className="mt-2 text-sm opacity-90">{offer.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs opacity-75">Valid until {offer.validUntil}</span>
                  <Button size="sm" variant="outline" className="bg-white text-[#1F2937] hover:bg-gray-100">
                    Claim Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center">
                      {activity.type === "booking" ? "🅿️" : "💳"}
                    </div>
                    <div>
                      <p className="font-medium text-[#1F2937]">{activity.location}</p>
                      <p className="text-sm text-[#6B7280]">{activity.time}</p>
                    </div>
                  </div>
                  <span className={`font-semibold ${activity.statusColor}`}>{activity.status}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </section>

          {/* Quick Actions */}
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, idx) => (
                <Link key={idx} href={action.href}>
                  <Button className={`w-full ${action.color} text-white hover:opacity-90 mb-1`}>
                    {action.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-[#1F2937] mb-3">My Account</h3>
              <div className="space-y-2 text-sm">
                <p className="text-[#6B7280]">
                  <span className="font-medium text-[#1F2937]">Email:</span> {user.email}
                </p>
                <Link href="/settings" className="block text-[#3B82F6] hover:underline">
                  Edit Profile →
                </Link>
                <Link href="/payment-methods" className="block text-[#3B82F6] hover:underline">
                  Payment Methods →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
