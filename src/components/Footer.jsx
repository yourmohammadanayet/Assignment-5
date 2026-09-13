function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#F1F5F9] bg-white pb-12 pt-14 lg:pt-[65px]"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Desktop Footer Content */}
        <div className="hidden grid-cols-5 gap-10 lg:grid">

          {/* Brand */}
          <div className="col-span-2 pr-4">
            <a
              href="#"
              className="flex items-center gap-[10px]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#EC4899] to-[#7C3AED] text-[12px] font-extrabold text-white">
                DS
              </div>

              <div className="text-[18px] font-bold leading-7">
                <span className="text-[#0F172A]">
                  Dev{" "}
                </span>

                <span className="font-extrabold text-[#DB2777]">
                  Stack
                </span>
              </div>
            </a>

            <p className="mt-3 max-w-[384px] text-[12px] leading-[19.5px] text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="#"
                className="text-[12px] font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] font-semibold text-[#475569] hover:text-[#DB2777]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.6px] text-[#0F172A]">
              PRODUCT
            </h4>

            <div className="mt-4 flex flex-col gap-[10px]">
              <a
                href="#"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.6px] text-[#0F172A]">
              COMPANY
            </h4>

            <div className="mt-4 flex flex-col gap-[10px]">
              <a
                href="#about"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.6px] text-[#0F172A]">
              LEGAL
            </h4>

            <div className="mt-4 flex flex-col gap-[10px]">
              <a
                href="#"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[12px] text-[#64748B] hover:text-[#DB2777]"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>


        {/* Mobile Footer */}
        <div className="flex flex-col items-center text-center lg:hidden">

          <a
            href="#"
            className="flex items-center gap-[10px]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#EC4899] to-[#7C3AED] text-sm font-extrabold text-white">
              DS
            </div>

            <div className="text-[24px] font-bold">
              <span className="text-[#0F172A]">
                Dev{" "}
              </span>

              <span className="font-extrabold text-[#DB2777]">
                Stack
              </span>
            </div>
          </a>

          <p className="mt-5 max-w-[330px] text-[14px] leading-6 text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-[14px] font-semibold text-[#475569]">
            <a href="#">
              GitHub
            </a>

            <span>•</span>

            <a href="#">
              Twitter
            </a>

            <span>•</span>

            <a href="#">
              LinkedIn
            </a>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#F1F5F9] pt-[33px] md:flex-row md:items-center md:justify-between">

          <p className="text-center text-[12px] text-[#94A3B8] md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-6 text-[12px] text-[#94A3B8]">
            <a
              href="#"
              className="hover:text-[#64748B]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-[#64748B]"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;