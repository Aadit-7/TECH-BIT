import { useState } from "react";
import { ArrowRight, IndianRupee, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

import SectionTitle from "../common/SectionTitle";
import { EVENTS } from "../../data/events";

function RulesSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  function openEvent(event) {
    setSelectedEvent(event);
  }

  function closeEvent() {
    setSelectedEvent(null);
  }

  return (
    <>
      {/* =====================================================
          RULES & FEE SECTION
      ====================================================== */}

      <section
        id="rules"
        className="border-y border-white/8 bg-[#111111] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* =================================================
              SECTION TITLE
          ================================================= */}

          <SectionTitle
            number="01"
            eyebrow="Before You Register"
            title="Rules & Fee Structure"
            description="A few things you should know before choosing your events and submitting your registration."
          />

          {/* =================================================
              RULES
          ================================================= */}

          <div className="mt-16 grid border-t border-white/8 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Accurate Information",
                description:
                  "Participants must provide correct personal, academic, and contact information during registration.",
              },
              {
                number: "02",
                title: "Event Rules",
                description:
                  "Every participant must follow the specific rules and guidelines applicable to their selected event.",
              },
              {
                number: "03",
                title: "Payment Verification",
                description:
                  "Registration remains pending until the submitted transaction ID or UTR is verified by the administrator.",
              },
              {
                number: "04",
                title: "Confirmation",
                description:
                  "Only verified and approved registrations will be considered confirmed for participation.",
              },
              {
                number: "05",
                title: "Organizer's Decision",
                description:
                  "The organizing committee reserves the right to reject invalid registrations or take decisions regarding event participation.",
              },
              {
                number: "06",
                title: "Reporting Time",
                description:
                  "Participants must report to the venue before the scheduled start time of their selected event.",
              },
            ].map((rule, index) => (
              <motion.div
                key={rule.number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`group border-b border-white/8 py-7 md:px-6 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                }`}
              >
                <div className="flex gap-5">
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.2em] text-blue-400/60">
                    {rule.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-white transition group-hover:text-blue-300">
                      {rule.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              REGISTRATION FEES
          ================================================= */}

          <div className="mt-20">
            {/* =================================================
                FEE HEADER
            ================================================= */}

            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <IndianRupee size={15} className="text-blue-400" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">
                    Registration Fees
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Choose what you want to compete in.
                </h3>
              </div>

              <p className="max-w-xs text-xs leading-5 text-white/25 sm:text-right">
                Click any event to view its details before registering.
              </p>
            </div>

            {/* =================================================
                EVENT GRID
            ================================================= */}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EVENTS.map((event, index) => (
                <motion.button
                  key={event.id}
                  type="button"
                  onClick={() => openEvent(event)}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="group flex min-h-32 w-full flex-col justify-between rounded-lg border border-white/8 bg-white/[0.015] p-5 text-left transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.03]"
                >
                  {/* =================================================
                      EVENT TOP
                  ================================================= */}

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowRight
                      size={14}
                      className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </div>

                  {/* =================================================
                      EVENT DETAILS
                  ================================================= */}

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-white/80 transition group-hover:text-white">
                      {event.name}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                        {event.category}
                      </p>

                      <span className="flex items-center gap-0.5 text-sm font-semibold text-white">
                        <IndianRupee size={12} />
                        {event.fee}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* =================================================
                NOTE
            ================================================= */}

            <div className="mt-6 flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

              <p className="text-xs leading-5 text-white/25">
                Event fees and rules should be verified before final submission.
                The final amount will depend on the events you select.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENT DETAILS MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeEvent}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#151515] shadow-2xl"
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div className="flex items-start justify-between border-b border-white/8 px-6 py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                    {selectedEvent.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {selectedEvent.name}
                  </h3>
                </div>

                {/* Close */}

                <button
                  type="button"
                  onClick={closeEvent}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-[#113BC5] text-white transition hover:bg-[#113BC5]/90"
                  aria-label="Close event details"
                >
                  <X size={16} />
                </button>
              </div>

              {/* =================================================
                  MODAL CONTENT
              ================================================= */}

              <div className="px-6 py-6">
                {/* Fee + Category */}

                <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-5 py-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                      Registration Fee
                    </p>

                    <div className="mt-1 flex items-center gap-1">
                      <IndianRupee size={17} className="text-blue-400" />

                      <span className="text-xl font-bold text-white">
                        {selectedEvent.fee}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                      Category
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/60">
                      {selectedEvent.category}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    EVENT DETAILS
                ================================================= */}

                <div className="mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
                    Event Details
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    Detailed information about this event, including
                    eligibility, rules, format, and participation guidelines
                    will be displayed here.
                  </p>
                </div>
              </div>

              {/* =================================================
                  MODAL FOOTER
              ================================================= */}

              <div className="flex flex-col gap-3 border-t border-white/8 px-6 py-5 sm:flex-row sm:justify-end">
                {/* Close */}

                <button
                  type="button"
                  onClick={closeEvent}
                  className="rounded-md bg-[#113BC5] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#113BC5]/90"
                >
                  Close
                </button>

                {/* Register */}

                <Link
                  to="/register"
                  onClick={closeEvent}
                  className="group flex items-center justify-center gap-2 rounded-md bg-[#113BC5] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#113BC5]/90"
                >
                  Register for this Event
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default RulesSection;
