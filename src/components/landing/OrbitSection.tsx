import Image from "next/image";
import Button from "@/components/ui/Button";

export default function OrbitSection() {
  return (
    <section className="relative mt-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ORBIT ================= */}
        <div className="flex justify-center">
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">

            {/* ===== ORBIT RINGS ===== */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/20" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-white/20" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-white/20" />

            {/* ===== CENTER DARK CIRCLE ===== */}
            <div className="absolute w-[120px] h-[120px] rounded-full bg-[#222228] border border-[#222228] flex items-center justify-center shadow-inner">
              <Image
                src="/icons/squid.png"
                alt=""
                width={50}
                height={50}
              />
            </div>

            {/* ================================================= */}
            {/* ===== ALL ICONS ON MIDDLE ORBIT (radius 160px) ===== */}
            {/* Middle ring = 320px => radius = 160px */}
            {/* ================================================= */}

            <div className="absolute w-full h-full">

              {/* ICON 1 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[315deg]">
                <div className="-translate-y-[160px] rotate-[0deg]">
                  <Image src="/icons/Ellipse-2.png" alt="" width={50} height={50} />
                </div>
              </div>

              {/* ICON 2 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[75deg]">
                <div className="-translate-y-[160px] rotate-[-60deg]">
                  <Image src="/icons/Ellipse-1.png" alt="" width={50} height={50} />
                </div>
              </div>

              {/* ICON 3 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[195deg]">
                <div className="-translate-y-[160px] rotate-[-120deg]">
                  <Image src="/icons/Ellipse-3.png" alt="" width={50} height={50} />
                </div>
              </div>

              {/* DOT 1 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[15deg]">
                <div className="-translate-y-[150px] rotate-[-180deg]">
                  <Image src="/icons/dot.png" alt="" width={28} height={28} />
                </div>
              </div>

              {/* DOT 2 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]">
                <div className="-translate-y-[150px] rotate-[-240deg]">
                  <Image src="/icons/dot.png" alt="" width={28} height={28} />
                </div>
              </div>

              {/* DOT 3 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[255deg]">
                <div className="-translate-y-[150px] rotate-[-300deg]">
                  <Image src="/icons/dot.png" alt="" width={28} height={28} />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ================= RIGHT TEXT ================= */}
        <div className="md:pl-16">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            We're here to
            <br />
            guide and help
            <br />
            you at all times
          </h2>

          <p className="mt-6 text-[#9E9E9E] max-w-md">
            A good design is not only aesthetically 
            <br />
            pleasing, but also functional. It should be 
            <br />
            able to solve the problem
          </p>

          <div className="mt-8">
            <Button>Download</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
