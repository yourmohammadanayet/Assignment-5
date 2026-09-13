import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="bg-white">

      {/* Desktop Hero */}
      <div className="mx-auto mt-[96px] hidden h-[420px] max-w-[1216px] grid-cols-12 gap-8 lg:grid">

        {/* Left Content */}
        <div className="col-span-7 flex items-center pr-8">
          <div>
            <h1 className="text-[60px] font-extrabold leading-[60px] tracking-[-1.5px] text-[#0F172A]">

              <span className="block whitespace-nowrap">
                Build Your Ideal
              </span>

              <span className="gradient-text block whitespace-nowrap">
                Development Stack
              </span>

            </h1>

            {/* Description */}
            <div className="mt-6 text-[18px] font-normal leading-[29.25px] text-[#475569]">

              <p className="whitespace-nowrap">
                Explore frontend, backend, database, and tooling options,
              </p>

              <p className="whitespace-nowrap">
                compare them side by side, and put together the stack that fits your
              </p>

              <p>
                next project.
              </p>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex w-[350px] items-center gap-3 pt-[12.7px]">

              <a
                href="#technologies"
                className="brand-gradient flex h-10 w-[168px] items-center justify-center rounded-lg text-[14px] font-semibold leading-4 text-white shadow-sm"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="flex h-[42px] w-[170px] items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[14px] font-normal leading-4 text-[#374151]"
              >
                Learn More
              </a>

            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-span-5 flex h-[420px] items-center justify-center">

          <div className="relative flex h-[350px] w-[350px] items-center justify-center">

            <img
              src={heroImage}
              alt="Dev Stack technology illustration"
              className="h-[320px] w-[350px] object-cover"
            />

          </div>

        </div>
      </div>


      {/* Mobile Hero */}
      <div className="flex flex-col items-center gap-[11px] px-5 pb-10 pt-8 lg:hidden">

        <h1 className="text-center text-[30px] font-bold leading-[37.5px] tracking-[-0.75px] text-[#030712]">

          <span className="block">
            Build Your Ideal
          </span>

          <span className="gradient-text block">
            Development Stack
          </span>

        </h1>

        <p className="max-w-[384px] text-center text-[14px] leading-[22.75px] text-[#4B5563]">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        <div className="flex w-full max-w-[350px] items-center justify-center gap-3 pt-3">

          <a
            href="#technologies"
            className="brand-gradient flex h-10 w-[168px] items-center justify-center rounded-lg text-[12px] text-white"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="flex h-[42px] w-[170px] items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[12px] text-[#374151]"
          >
            Learn More
          </a>

        </div>

        <div className="flex h-[296px] w-[264px] items-center justify-center pt-5">

          <img
            src={heroImage}
            alt="Dev Stack technology illustration"
            className="h-[299px] w-[327px] max-w-none object-cover"
          />

        </div>
      </div>

    </section>
  );
}

export default Hero;