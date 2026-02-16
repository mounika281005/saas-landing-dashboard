import Image from "next/image";

export default function CompaniesSection() {
  return (
    <section className="relative mt-20 pt-30 pb-70 px-6 bg-[#18181C] text-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Companies we Worked
          <br />
          With in Since 2015
        </h2>

        {/* Logo Boxes */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="w-[165px] h-[85px] 
                         bg-[#000000] 
                         rounded-lg 
                         border border-[#1f2230] 
                         flex items-center justify-center 
                         transition duration-300 
                         hover:border-[#3B3B42]"
            >
              <Image
                src={`/icons/Frame${item}.png`}
                alt=""
                width={90}
                height={40}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
