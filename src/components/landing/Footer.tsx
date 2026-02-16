import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#18181C] text-white pt-20">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12">

        {/* ===== LEFT SIDE ===== */}
        <div>

          {/* Logo */}
          <Image
            src="/icons/squid.png"
            alt="Logo"
            width={40}
            height={40}
          />

          <p className="mt-6 text-[#9E9E9E] max-w-xs leading-relaxed">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="grid grid-cols-3 gap-10 text-sm">

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-3 text-[#9E9E9E]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Section One</Link></li>
              <li><Link href="/">Section Two</Link></li>
              <li><Link href="/">Section Three</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 invisible">Sections</h4>
            <ul className="space-y-3 text-[#9E9E9E]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Section One</Link></li>
              <li><Link href="/">Section Two</Link></li>
              <li><Link href="/">Section Three</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 invisible">Sections</h4>
            <ul className="space-y-3 text-[#9E9E9E]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Section One</Link></li>
              <li><Link href="/">Section Two</Link></li>
              <li><Link href="/">Section Three</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="bg-black border-t border-[#1f2230]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">

          {/* Copyright */}
          <p className="text-sm text-[#9E9E9E]">
            All Rights Reserved linky.com 2022
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0 md:mr-20">
              <Image src="/icons/snap.png" alt="Snapchat" width={40} height={40} />
              <Image src="/icons/link.png" alt="LinkedIn" width={40} height={40} />
              <Image src="/icons/discord.png" alt="Discord" width={40} height={40} />

          </div>

        </div>
      </div>


    </footer>
  );
}
