import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E7D9C8]/60 bg-[#FEF9F2]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LEFT: Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="IDK logo"
            className="h-9 w-9 rounded-full shadow-sm"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-[#533F2E]">
              IDK
            </span>

            <span className="text-[10px] text-[#8A7A67] tracking-tight">
              from popular to personal
            </span>
          </div>
        </Link>

        {/* RIGHT: Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-[#6A5A48]">
          <Link href="/" className="hover:text-[#533F2E] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#533F2E] transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-[#533F2E] transition">
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-full bg-[#8E44AD] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  )
}