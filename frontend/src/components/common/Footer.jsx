function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#111111]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.15em] text-white">
            TECH BIT
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
            Competition 2K26
          </p>
        </div>

        <p className="text-xs text-white/25">
          © 2026 TECH BIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
