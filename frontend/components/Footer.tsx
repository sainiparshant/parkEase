import Link from "next/link";
import { Home, FileText, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 text-sm text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} ParkEase. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-[#10B981] inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#10B981] inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy</span>
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#10B981] inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Terms</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8  text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            ParkEase • Built with Next.js & Supabase — open to contributions.
          </p>
        </div>
      </div>
    </footer>
  );
}
