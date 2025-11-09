import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 text-sm text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} ParkEase. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#10B981]">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-[#10B981]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#10B981]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
