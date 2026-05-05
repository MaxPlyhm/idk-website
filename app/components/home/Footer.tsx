import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[#E7D9C8]/60 bg-[#FEF9F2] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="IDK logo"
            className="h-8 w-8 rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-semibold text-[#533F2E]">IDK</span>
            <span className="text-xs text-[#8A7A67]">
              From popular to personal
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex gap-6 text-sm text-[#6A5A48]">
          <Link href="/about" className="hover:text-[#533F2E] transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-[#533F2E] transition">
            Contact
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-[#E7D9C8]/40 pt-6 text-xs text-[#8A7A67]">
        © {new Date().getFullYear()} IDK · The Merry Company Oy Ab
      </div>
    </footer>
  )
}