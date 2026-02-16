import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* LEFT GLOW */}
      <div className="absolute top-110 -left-10 w-[180px] h-[180px] opacity-75 pointer-events-none z-0">
        <Image
          src="/icons/glow-left.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* CENTER GLOW */}
      <div className="absolute top-20 right-150 w-[100px] h-[100px] opacity-75 pointer-events-none z-0">
        <Image
          src="/icons/glow-center.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* RIGHT GLOW */}
      <div className="absolute top-80 -right-10 w-[150px] h-[150px] opacity-75 pointer-events-none z-0">
        <Image
          src="/icons/glow-right.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>



      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= NAVBAR ================= */}
        <nav className="flex justify-between items-center py-8">
          
          <div className="flex items-center gap-3">
            <Image
              src="/icons/logo.png"
              alt="Squid Logo"
              width={100}
              height={32}
            />
          </div>

          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-purple-400 transition">
              Home
            </Link>

            <Link href="/signup">
              <Button>Download Template</Button>
            </Link>
          </div>

        </nav>

        {/* ================= HERO CONTENT ================= */}
        <div className="text-center pt-24 pb-48">

          <h1 className="text-6xl md:text-7xl font-semibold leading-[1.15] tracking-tight max-w-4xl mx-auto">
            Beautiful Landing Page
            <br />
            Design for You
          </h1>

          <p className="mt-8 text-[#9E9E9E] max-w-2xl mx-auto text-lg">
            A good design is not only aesthetically pleasing, but also
            <br />
            functional. It should be able to solve the problem.
          </p>

          <div className="mt-10">
            <Link href="/signup">
              <Button>Download Template</Button>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
