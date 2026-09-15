import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import SectionTitle from "../components/common/SectionTitle";

import EventSelection from "../components/registration/EventSelection";
import ParticipantDetails from "../components/registration/ParticipantDetails";
import ParticipationType from "../components/registration/ParticipationType";
import TeamDetails from "../components/registration/TeamDetails";
import PaymentSection from "../components/registration/PaymentSection";
import Declaration from "../components/registration/Declaration";
import RegistrationSummary from "../components/registration/RegistrationSummary";

import { EVENTS } from "../data/events";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [selectedEvents, setSelectedEvents] = useState([]);
  const [participationType, setParticipationType] = useState("individual");
  const [teamMemberCount, setTeamMemberCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      fullName: "",
      college: "",
      department: "",
      branch: "",
      year: "",
      mobile: "",
      email: "",

      teamName: "",
      teamLeaderName: "",
      teamLeaderMobile: "",

      transactionId: "",

      declaration: false,
    },
  });

  /* =========================================================
     DEPARTMENT
  ========================================================= */

  const department = watch("department");

  /* =========================================================
     TOTAL FEE
  ========================================================= */

  const totalFee = selectedEvents.reduce((total, eventId) => {
    const event = EVENTS.find((item) => item.id === eventId);

    return total + (event?.fee || 0);
  }, 0);

  /* =========================================================
     EVENT SELECTION
  ========================================================= */

  function handleEventToggle(eventId) {
    setSelectedEvents((current) => {
      if (current.includes(eventId)) {
        return current.filter((id) => id !== eventId);
      }

      return [...current, eventId];
    });

    setSubmitError("");
  }

  function handleEventRemove(eventId) {
    setSelectedEvents((current) => current.filter((id) => id !== eventId));

    setSubmitError("");
  }

  /* =========================================================
     PARTICIPATION TYPE
  ========================================================= */

  function handleParticipationChange(type) {
    setParticipationType(type);

    if (type === "individual") {
      setTeamMemberCount(1);
    }

    setSubmitError("");
  }

  /* =========================================================
     SUBMIT
  ========================================================= */

  async function onSubmit(data) {
    setSubmitError("");

    /* ---------------------------------------------------------
       EVENT VALIDATION
    --------------------------------------------------------- */

    if (selectedEvents.length === 0) {
      setSubmitError("Please select at least one event before submitting.");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const registrationData = {
        ...data,

        events: selectedEvents,

        participationType,

        teamMemberCount: participationType === "team" ? teamMemberCount : 0,

        totalFee,
      };

      const response = await api.post("/registrations", registrationData);

      /*
        Expected backend response:

        {
          success: true,
          registrationId: "TB2K26-0001"
        }
      */

      const registrationId = response.data?.registrationId;

      navigate("/registration-success", {
        state: {
          registrationId,
        },
      });
    } catch (error) {
      console.error("Registration submission failed:", error);

      const message =
        error.response?.data?.message ||
        "Unable to submit your registration. Please try again.";

      setSubmitError(message);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  /* =========================================================
     UI
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#141414] px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <SectionTitle
          number="02"
          eyebrow="TECH BIT 2K26"
          title="Registration"
          description="Choose your events, enter your details, complete the payment, and submit your registration."
        />

        {/* =================================================
            SUBMISSION ERROR
        ================================================= */}

        {submitError && (
          <div className="mt-8 border border-red-400/20 bg-red-400/[0.04] px-5 py-4">
            <p className="text-sm text-red-400">{submitError}</p>
          </div>
        )}

        {/* =================================================
            FORM
        ================================================= */}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-14" noValidate>
          {/* =================================================
              01 — EVENTS
          ================================================= */}

          <EventSelection
            selectedEvents={selectedEvents}
            onEventToggle={handleEventToggle}
            onEventRemove={handleEventRemove}
          />

          {/* =================================================
              02 — PARTICIPANT
          ================================================= */}

          <ParticipantDetails
            register={register}
            errors={errors}
            department={department}
            setValue={setValue}
          />

          {/* =================================================
              03 — PARTICIPATION TYPE
          ================================================= */}

          <ParticipationType
            value={participationType}
            onChange={handleParticipationChange}
          />

          {/* =================================================
              04 — TEAM
          ================================================= */}

          {participationType === "team" && (
            <TeamDetails
              register={register}
              errors={errors}
              teamMemberCount={teamMemberCount}
              setTeamMemberCount={setTeamMemberCount}
            />
          )}

          {/* =================================================
              05 — PAYMENT
          ================================================= */}

          <PaymentSection
            totalFee={totalFee}
            register={register}
            errors={errors}
          />

          {/* =================================================
              06 — DECLARATION
          ================================================= */}

          <Declaration register={register} errors={errors} />

          {/* =================================================
              07 — SUMMARY
          ================================================= */}

          <RegistrationSummary
            selectedEvents={selectedEvents}
            totalFee={totalFee}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </main>
  );
}

export default Register;
