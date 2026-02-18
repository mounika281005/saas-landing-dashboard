import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="relative -mt-28 px-6">

      <div className="relative z-20 mx-auto max-w-4xl rounded-[32px] bg-[#18181C] p-10 md:p-12 border border-[#18181C] shadow-[0_60px_140px_rgba(0,0,0,0.8)]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* ================= LEFT PANEL ================= */}
          <div className="relative rounded-2xl bg-[#222228] p-6 border border-[#222228] flex flex-col items-center">

            {/* Vector Top Center */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <Image
                src="/icons/vector.png"
                alt=""
                width={40}
                height={30}
              />
            </div>

            {/* Content */}
            <div className="mt-14 flex flex-col items-center gap-6 w-full">

              <Image
                src="/icons/LineLeft.png"
                alt=""
                width={140}
                height={8}
              />

              {/* Reduced left lines */}
              {[1,2,3,4,5].map((i) => (
                <Image
                  key={i}
                  src="/icons/left-lines.png"
                  alt=""
                  width={150}
                  height={120}
                />
              ))}

              {/* Avatar centered */}
              <Image
                src="/icons/left-avatar.png"
                alt=""
                width={100}
                height={70}
                className="mt-2"
              />
            </div>
          </div>


          {/* ================= CENTER PANEL ================= */}
          <div className="flex flex-col gap-6">

            {/* Circle Chart */}
            <div className="rounded-2xl bg-[#222228] p-6 border border-[#222228] flex items-center justify-center">
              <Image
                src="/icons/chart-circle.png"
                alt=""
                width={180}
                height={180}
              />
            </div>

            {/* Bar Chart */}
            <div className="rounded-2xl bg-[#222228] p-6 border border-[#222228] flex flex-col gap-4">

              <Image
                src="/icons/right-lines.png"
                alt=""
                width={220}
                height={20}
              />

              <Image
                src="/icons/LineCenter.png"
                alt=""
                width={180}
                height={10}
              />

              <div className="flex justify-center pt-2">
                <Image
                  src="/icons/bars-chart.png"
                  alt=""
                  width={190}
                  height={110}
                />
              </div>

            </div>
          </div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-6">

            {/* ===== TOP RIGHT CARD ===== */}
            <div className="relative rounded-2xl bg-[#222228] p-6 border border-[#222228] flex flex-col gap-3 overflow-hidden">

              <Image
                src="/icons/right-lines.png"
                alt=""
                width={200}
                height={20}
              />

              {/* Reduced avatar size */}
              {[1,2,3,4].map((i) => (
                <Image
                  key={i}
                  src={`/icons/avatar-${i}.png`}
                  alt=""
                  width={180}
                  height={60}
                />
              ))}

              {/* Blur overlay bottom 1/4 */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#18181C] via-[#222228]/90 to-transparent pointer-events-none" />

            </div>

            {/* ===== SECOND RIGHT CARD ===== */}
            <div className="rounded-2xl bg-[#222228] border border-[#222228] h-22" />

          </div>

        </div>
      </div>

      {/* ================= WAVE ================= */}
      <div className="absolute left-0 right-0 -bottom-40 z-10">
        <Image
          src="/icons/wave-gradient.png"
          alt=""
          width={1920}
          height={400}
          className="w-full"
        />
      </div>

    </section>
  );
}
