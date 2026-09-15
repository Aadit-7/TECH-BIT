import { Check } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

function Declaration({ register, errors }) {
  return (
    <section className="border-t border-white/8 pt-10">
      <SectionTitle
        number="06"
        eyebrow="Declaration"
        title="One final confirmation"
        description="Please confirm that the information you have provided is accurate."
      />

      <label
        htmlFor="declaration"
        className={`mt-8 flex cursor-pointer gap-4 border p-5 transition ${
          errors.declaration
            ? "border-red-400/40 bg-red-400/[0.02]"
            : "border-white/8 bg-white/[0.015] hover:border-white/15"
        }`}
      >
        {/* Custom checkbox */}
        <div className="relative mt-0.5 shrink-0">
          <input
            id="declaration"
            type="checkbox"
            {...register("declaration", {
              required: "You must accept the declaration before submitting",
            })}
            className="peer absolute h-5 w-5 cursor-pointer opacity-0"
          />

          <div className="flex h-5 w-5 items-center justify-center border border-white/20 transition peer-checked:border-blue-400 peer-checked:bg-blue-400">
            <Check
              size={13}
              strokeWidth={3}
              className="text-black opacity-0 transition peer-checked:opacity-100"
            />
          </div>
        </div>

        {/* Declaration text */}
        <div>
          <p className="text-sm leading-6 text-white/55">
            I hereby declare that all the information provided by me is correct
            and complete. I agree to follow the rules, regulations, and
            instructions of TECH BIT 2K26 and understand that incorrect
            information may result in cancellation of my registration.
          </p>

          <p className="mt-2 text-xs text-white/25">
            This declaration is mandatory.
          </p>
        </div>
      </label>

      {errors.declaration && (
        <p className="mt-2 text-[11px] text-red-400">
          {errors.declaration.message}
        </p>
      )}
    </section>
  );
}

export default Declaration;
