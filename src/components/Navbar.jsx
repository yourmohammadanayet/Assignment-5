import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#F1F5F9] bg-white">
      <nav className="mx-auto max-w-[1280px] px-4 md:px-8">

        {/* Desktop Navbar */}
        <div className="hidden h-20 items-center justify-between md:flex">

          {/* Logo */}
          <a href="#" className="flex items-center gap-[10px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#EC4899] to-[#7C3AED] text-sm font-extrabold text-white shadow-sm">
              DS
            </div>

            <span className="text-xl font-bold tracking-[-0.5px]">
              <span className="text-[#0F172A]">
                Dev{" "}
              </span>

              <span className="font-extrabold text-[#DB2777]">
                Stack
              </span>
            </span>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-[29px]">
            <a
              href="#"
              className="text-sm font-semibold text-[#DB2777]"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-[#475569] transition hover:text-[#DB2777]"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-[#475569] transition hover:text-[#DB2777]"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#475569] transition hover:text-[#DB2777]"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-[#475569] transition hover:text-[#DB2777]"
            >
              Contact
            </a>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-5">
            <button className="text-sm font-medium text-[#334155]">
              Sign In
            </button>

            <button className="rounded-full bg-[#D91B7E] px-5 py-[10px] text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="grid h-16 grid-cols-[40px_1fr_auto] items-center gap-2 md:hidden">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-[5px]">
              <span className="block h-[2px] w-5 rounded bg-[#475569]"></span>
              <span className="block h-[2px] w-5 rounded bg-[#475569]"></span>
              <span className="block h-[2px] w-5 rounded bg-[#475569]"></span>
            </div>
          </button>

          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#EC4899] to-[#7C3AED] text-sm font-extrabold text-white">
              DS
            </div>

            <span className="whitespace-nowrap text-base font-bold">
              <span className="text-[#0F172A]">
                Dev
              </span>

              <span className="font-extrabold text-[#DB2777]">
                Stack
              </span>
            </span>
          </a>

          <div className="flex items-center justify-end gap-2">
            <button className="whitespace-nowrap text-[11px] font-medium text-[#334155]">
              Sign In
            </button>

            <button className="whitespace-nowrap rounded-full bg-[#D91B7E] px-3.5 py-2 text-[11px] font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-[#F1F5F9] py-4 md:hidden">
            <div className="flex flex-col gap-1">

              <a
                href="#"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#DB2777]"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] hover:bg-slate-50"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] hover:bg-slate-50"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] hover:bg-slate-50"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] hover:bg-slate-50"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;