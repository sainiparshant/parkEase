import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#10B981] to-[#3B82F6] rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
         <Link
          href="/">
           <span className="text-xl font-bold bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">
            ParkEase
          </span>
         </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-600 dark:text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#solutions"
            className="text-gray-600 dark:text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#tech"
            className="text-gray-600 dark:text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Technology
          </Link>
          <Link
            href="/find"
            className="text-gray-600 dark:text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Find
          </Link>
        </div>
        <Link
          href="/sign-up"
          className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
