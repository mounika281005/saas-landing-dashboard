import Image from "next/image";
import Button from "@/components/ui/Button";

export default function GetInTouchSection() {
  return (
    <section className="relative -mt-20 py-32 px-6 bg-black text-white overflow-hidden">
      
      {/* ================= FLOATING CIRCLES ================= */}
      <Image
        src="/icons/Ellipse-4.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-20 left-20 opacity-80"
      />

      <Image
        src="/icons/Ellipse-5.png"
        alt=""
        width={200}
        height={200}
        className="absolute bottom-5 right-150 opacity-90"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT GLOBE ================= */}
        <div className="relative flex justify-center">
          <Image
            src="/icons/globe.png"
            alt="Globe"
            width={500}
            height={500}
            className="opacity-100"
          />
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="ml-10 md:ml-10">

          <h2 className="text-xl md:text-6xl font-semibold">
            Get In Touch
          </h2>

          <p className="mt-5 text-[#9E9E9E] max-w-md">
            A good design is not only aesthetically pleasing, but
            <br />
            also functional. It should be able to solve the problem
          </p>

          {/* Form */}
          <div className="mt-8 space-y-5 max-w-[350px]">

            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-12 px-4 rounded-lg bg-[#18181C] border border-[#18181C] focus:outline-none"
            />

            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 px-4 rounded-lg bg-[#18181C] border border-[#18181C] focus:outline-none"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-4 rounded-lg bg-[#18181C] border border-[#18181C] focus:outline-none resize-none"
            />

            <Button className="mt-4">
              Get in Touch
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}
