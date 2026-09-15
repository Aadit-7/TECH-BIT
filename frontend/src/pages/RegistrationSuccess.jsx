import { Check, Copy, Home, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useState } from "react";

function RegistrationSuccess() {
  const location = useLocation();

  const registrationId = location.state?.registrationId || "TB2K26-PENDING";

  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(registrationId);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy registration ID:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#141414] px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-2xl items-center justify-center">
        <div className="w-full">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center border border-blue-400/30 bg-blue-400/10 text-blue-400">
              <Check size={30} strokeWidth={2.5} />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-8 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-blue-400">
              Registration Complete
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              You're registered.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/35">
              Your registration has been submitted successfully. Please save
              your registration ID for future reference.
            </p>
          </div>

          {/* Registration ID */}
          <div className="mt-10 border border-white/8 bg-white/[0.015]">
            <div className="border-b border-white/8 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
                Registration ID
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-6">
              <p className="min-w-0 break-all text-xl font-bold tracking-[0.08em] text-white sm:text-2xl">
                {registrationId}
              </p>

              <button
                type="button"
                onClick={handleCopy}
                className="flex shrink-0 items-center gap-2 border border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40 transition hover:border-white/20 hover:text-white"
              >
                <Copy size={13} />

                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Pending notice */}
          <div className="mt-4 border border-yellow-400/10 bg-yellow-400/[0.025] px-5 py-4">
            <p className="text-xs font-medium text-yellow-400/80">
              Payment verification pending
            </p>

            <p className="mt-1 text-xs leading-5 text-white/30">
              Your registration will be confirmed after the submitted payment
              transaction is verified by the administrator.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="group flex flex-1 items-center justify-center gap-2 border border-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white/60 transition hover:border-white/20 hover:text-white"
            >
              <Home size={14} />
              Back to Home
            </Link>

            <Link
              to="/register"
              className="group flex flex-1 items-center justify-center gap-2 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
            >
              Register Another
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Footer text */}
          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-white/15">
            TECH BIT 2K26
          </p>
        </div>
      </div>
    </main>
  );
}

export default RegistrationSuccess;
