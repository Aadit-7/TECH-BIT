import { Check, IndianRupee, Trash2 } from "lucide-react";
import { EVENTS } from "../../data/events";

function EventSelection({ selectedEvents, onEventToggle, onEventRemove }) {
  const totalFee = selectedEvents.reduce((total, eventId) => {
    const event = EVENTS.find((item) => item.id === eventId);

    return total + (event?.fee || 0);
  }, 0);

  return (
    <section className="border-t border-white/8 pt-10">
      {/* Section heading */}
      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
          01 / Events
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Choose your events
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
          Select one or more events you want to participate in. Your total
          registration fee will update automatically.
        </p>
      </div>

      {/* Event cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {EVENTS.map((event) => {
          const isSelected = selectedEvents.includes(event.id);

          return (
            <button
              key={event.id}
              type="button"
              onClick={() => onEventToggle(event.id)}
              className={`group relative flex min-h-24 items-center justify-between border p-4 text-left transition-all duration-200 ${
                isSelected
                  ? "border-blue-400/60 bg-blue-400/[0.07]"
                  : "border-white/8 bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.03]"
              }`}
            >
              <div className="min-w-0">
                <p
                  className={`truncate text-sm font-semibold transition ${
                    isSelected
                      ? "text-white"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {event.name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                  {event.category}
                </p>
              </div>

              <div className="ml-4 flex shrink-0 items-center gap-4">
                <div className="flex items-center gap-0.5 text-sm font-semibold text-white/70">
                  <IndianRupee size={13} />
                  {event.fee}
                </div>

                <div
                  className={`flex h-5 w-5 items-center justify-center border transition ${
                    isSelected
                      ? "border-blue-400 bg-blue-400 text-black"
                      : "border-white/15 text-transparent"
                  }`}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected events */}
      <div className="mt-6 border border-white/8 bg-white/[0.015]">
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Selected Events
            </p>

            <p className="mt-1 text-xs text-white/25">
              {selectedEvents.length === 0
                ? "Nothing selected yet"
                : `${selectedEvents.length} event${
                    selectedEvents.length > 1 ? "s" : ""
                  } selected`}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Total
            </p>

            <p className="mt-0.5 text-lg font-bold text-white">₹{totalFee}</p>
          </div>
        </div>

        {selectedEvents.length === 0 ? (
          <div className="px-4 py-6">
            <p className="text-center text-xs text-white/25">
              Select an event from above.
            </p>
          </div>
        ) : (
          <div>
            {selectedEvents.map((eventId) => {
              const event = EVENTS.find((item) => item.id === eventId);

              if (!event) return null;

              return (
                <div
                  key={event.id}
                  className="flex items-center justify-between border-b border-white/5 px-4 py-3 last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-blue-400">
                      <Check size={12} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm text-white/75">
                        {event.name}
                      </p>

                      <p className="text-[10px] text-white/25">
                        {event.category}
                      </p>
                    </div>
                  </div>

                  <div className="ml-4 flex shrink-0 items-center gap-4">
                    <span className="text-sm font-medium text-white/60">
                      ₹{event.fee}
                    </span>

                    <button
                      type="button"
                      onClick={() => onEventRemove(event.id)}
                      className="text-white/20 transition hover:text-red-400"
                      aria-label={`Remove ${event.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default EventSelection;
