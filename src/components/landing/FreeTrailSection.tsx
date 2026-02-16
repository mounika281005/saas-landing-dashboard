import Image from "next/image";

export default function FreeTrialSection() {
  return (
    <section className="-mt-70 py-20 px-6 flex justify-center">

      {/* ===== Gradient Card ===== */}
      <div
        className="relative overflow-hidden rounded-[40px]
                   bg-gradient-to-r from-[#FF9898] to-[#8054FF]
                   w-full max-w-[1100px]
                   px-16 py-24
                   flex flex-col md:flex-row
                   items-center justify-between"
      >

        {/* ===== LEFT CONTENT ===== */}
        <div className="relative z-10 max-w-lg">

          <p className="text-white/80 text-sm mb-4">
            Love our Tool?
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Fell Free to Join our <br />
            15 Days Free Trial
          </h2>

          <div className="mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Download Template
            </button>
          </div>

        </div>

        {/* ===== RIGHT WORLD IMAGE ===== */}
        <div className="relative mt-12 md:mt-0 md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 opacity-95">

          <Image
            src="/icons/world.png"
            alt="World"
            width={580}
            height={420}
            className="object-contain"
          />

        </div>

      </div>

    </section>
  );
}
