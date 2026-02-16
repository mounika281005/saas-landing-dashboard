import Image from "next/image";

export default function FeatureBoxes() {
  const features = [
    { title: "Fully Customizable", icon: "/icons/feature-1.png" },
    { title: "Fully Customizable", icon: "/icons/feature-3.png" },
    { title: "Fully Customizable", icon: "/icons/feature.png", gradient: true },
    { title: "Fully Customizable", icon: "/icons/feature-2.png" },
    { title: "Fully Customizable", icon: "/icons/feature-4.png" },
    { title: "Fully Customizable", icon: "/icons/feature-5.png" },
  ];

  return (
    <section className="relative mt-50 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Left aligned heading */}
        <h3 className="text-4xl font-semibold">
          Feature Boxes
        </h3>

        <p className="mt-4 text-[#9E9E9E] max-w-xl">
          A good design is not only aesthetically pleasing, but also
          <br />
          functional. It should be able to solve the problem.
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#18181C] p-8 border border-[#18181C] hover:border-[#2a2d3a] transition"
            >

              {/* Icon Centered */}
              <div className="flex justify-center">
                <div
                  className={`h-16 w-16 rounded-xl flex items-center justify-center
                  ${feature.gradient
                      ? "bg-gradient-to-br from-[#FF9898] to-[#8054FF]"
                      : "bg-[#222228]"
                  }`}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={26}
                    height={26}
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className="mt-6 text-lg font-medium text-center">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="mt-4 text-[#9E9E9E] text-sm leading-relaxed text-center">
                A good design is not only aesthetically
                <br />
                pleasing, but also functional. It should be 
                <br />
                able to solve the problem.
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
