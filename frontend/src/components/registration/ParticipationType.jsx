import { User, Users } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

function ParticipationType({ value, onChange }) {
  return (
    <section className="border-t border-white/8 pt-10">
      <SectionTitle
        number="03"
        eyebrow="Participation"
        title="How are you participating?"
        description="Choose whether you are participating individually or as a team."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {/* Individual */}
        <button
          type="button"
          onClick={() => onChange("individual")}
          className={`group flex items-center gap-4 border p-5 text-left transition-all duration-200 ${
            value === "individual"
              ? "border-blue-400/60 bg-blue-400/[0.07]"
              : "border-white/8 bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.03]"
          }`}
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center transition ${
              value === "individual"
                ? "bg-blue-400 text-black"
                : "bg-white/5 text-white/30 group-hover:text-white/60"
            }`}
          >
            <User size={18} />
          </div>

          <div className="flex-1">
            <p
              className={`text-sm font-semibold ${
                value === "individual"
                  ? "text-white"
                  : "text-white/70 group-hover:text-white"
              }`}
            >
              Individual
            </p>

            <p className="mt-1 text-xs text-white/25">
              Participate on your own
            </p>
          </div>

          <SelectionIndicator selected={value === "individual"} />
        </button>

        {/* Team */}
        <button
          type="button"
          onClick={() => onChange("team")}
          className={`group flex items-center gap-4 border p-5 text-left transition-all duration-200 ${
            value === "team"
              ? "border-blue-400/60 bg-blue-400/[0.07]"
              : "border-white/8 bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.03]"
          }`}
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center transition ${
              value === "team"
                ? "bg-blue-400 text-black"
                : "bg-white/5 text-white/30 group-hover:text-white/60"
            }`}
          >
            <Users size={18} />
          </div>

          <div className="flex-1">
            <p
              className={`text-sm font-semibold ${
                value === "team"
                  ? "text-white"
                  : "text-white/70 group-hover:text-white"
              }`}
            >
              Team
            </p>

            <p className="mt-1 text-xs text-white/25">
              Participate with your team
            </p>
          </div>

          <SelectionIndicator selected={value === "team"} />
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   SELECTION INDICATOR
========================================================= */

function SelectionIndicator({ selected }) {
  return (
    <div
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
        selected ? "border-blue-400 bg-blue-400" : "border-white/15"
      }`}
    >
      {selected && <div className="h-2 w-2 rounded-full bg-black" />}
    </div>
  );
}

export default ParticipationType;
