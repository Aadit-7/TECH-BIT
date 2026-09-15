import { IndianRupee, QrCode, ShieldCheck } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

function PaymentSection({ totalFee, register, errors }) {
  return (
    <section className="border-t border-white/8 pt-10">
      <SectionTitle
        number="05"
        eyebrow="Payment"
        title="Complete your payment"
        description="Pay the registration fee using the QR code and enter your transaction details below."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        {/* QR CODE */}
        <div>
          <div className="border border-white/10 bg-white p-4">
            <img
              src="/payment-qr.png"
              alt="TECH BIT payment QR code"
              className="aspect-square w-full object-contain"
            />
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/25">
            <QrCode size={13} />
            Scan to Pay
          </div>
        </div>

        {/* PAYMENT DETAILS */}
        <div>
          {/* Total */}
          <div className="border border-white/8 bg-white/[0.015] p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/25">
              Total Registration Fee
            </p>

            <div className="mt-2 flex items-center gap-1">
              <IndianRupee size={22} className="text-blue-400" />

              <span className="text-3xl font-bold tracking-tight text-white">
                {totalFee}
              </span>
            </div>
          </div>

          {/* Transaction ID */}
          <div className="mt-5">
            <label
              htmlFor="transactionId"
              className="mb-2 block text-xs font-medium text-white/50"
            >
              Transaction ID / UTR
              <span className="ml-1 text-blue-400">*</span>
            </label>

            <input
              id="transactionId"
              type="text"
              placeholder="Enter your transaction ID or UTR"
              {...register("transactionId", {
                required: "Transaction ID / UTR is required",
                minLength: {
                  value: 6,
                  message: "Please enter a valid transaction ID / UTR",
                },
              })}
              className={`h-11 w-full border bg-white/[0.02] px-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/50 focus:bg-white/[0.035] ${
                errors.transactionId ? "border-red-400/50" : "border-white/10"
              }`}
            />

            {errors.transactionId && (
              <p className="mt-1.5 text-[11px] text-red-400">
                {errors.transactionId.message}
              </p>
            )}
          </div>

          {/* Verification Notice */}
          <div className="mt-5 flex gap-3 border border-yellow-400/10 bg-yellow-400/[0.025] p-4">
            <ShieldCheck
              size={17}
              className="mt-0.5 shrink-0 text-yellow-400/70"
            />

            <div>
              <p className="text-xs font-medium text-yellow-400/80">
                Payment verification
              </p>

              <p className="mt-1 text-xs leading-5 text-white/30">
                Your payment will be verified manually by the administrator.
                Your registration will remain pending until the payment is
                verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSection;
