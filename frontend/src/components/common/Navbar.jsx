import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="border-b border-white/8 bg-[#141414]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-white text-xs font-black text-black">
              TB
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.15em] text-white">
                TECH BIT
              </p>

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                2K26
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/45 transition hover:text-white"
            >
              Home
            </Link>

            <a
              href="/#rules"
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/45 transition hover:text-white"
            >
              Rules
            </a>

            <Link
              to="/register"
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/45 transition hover:text-white"
            >
              Events
            </Link>

            <Link
              to="/register"
              className="bg-[#3E3E3E] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#113BC5]/90"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/8 bg-[#141414] md:hidden">
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              <div className="flex flex-col">
                {/* Home */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="border-b border-white/5 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white/60"
                >
                  Home
                </Link>

                {/* Rules */}
                <a
                  href="/#rules"
                  onClick={closeMenu}
                  className="border-b border-white/5 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white/60"
                >
                  Rules
                </a>

                {/* Events */}
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="border-b border-white/5 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white/60"
                >
                  Events
                </Link>

                {/* Register */}
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="mt-4 bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-black"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
