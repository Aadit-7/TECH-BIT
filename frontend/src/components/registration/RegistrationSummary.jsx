import { ArrowRight, Check, IndianRupee } from "lucide-react";
import { EVENTS } from "../../data/events";

function RegistrationSummary({
  selectedEvents,
  totalFee,
  isSubmitting = false,
}) {
  return (
    <section className="border-t border-white/8 pt-10">
      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
          07 / Submit
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Review your registration
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
          Check your selected events and registration fee before submitting the
          form.
        </p>
      </div>

      {/* Summary */}
      <div className="border border-white/8 bg-white/[0.015]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Selected Events
            </p>

            <p className="mt-1 text-xs text-white/25">
              {selectedEvents.length}{" "}
              {selectedEvents.length === 1 ? "event" : "events"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Total
            </p>

            <div className="mt-0.5 flex items-center justify-end gap-0.5">
              <IndianRupee size={15} className="text-blue-400" />

              <span className="text-xl font-bold text-white">{totalFee}</span>
            </div>
          </div>
        </div>

        {/* Event list */}
        {selectedEvents.length > 0 && (
          <div>
            {selectedEvents.map((eventId) => {
              const event = EVENTS.find((item) => item.id === eventId);

              if (!event) return null;

              return (
                <div
                  key={event.id}
                  className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400/10 text-blue-400">
                      <Check size={12} />
                    </div>

                    <div>
                      <p className="text-sm text-white/75">{event.name}</p>

                      <p className="mt-0.5 text-[10px] text-white/25">
                        {event.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-white/60">
                    ₹{event.fee}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {selectedEvents.length === 0 && (
          <div className="px-5 py-7 text-center">
            <p className="text-xs text-white/25">
              No events have been selected.
            </p>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || selectedEvents.length === 0}
        className="group mt-5 flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Registration
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[10px] leading-5 text-white/20">
        By submitting, you confirm that the information provided above is
        accurate.
      </p>
    </section>
  );
}

export default RegistrationSummary;
