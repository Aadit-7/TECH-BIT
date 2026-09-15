import { Minus, Plus, Users } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

function TeamDetails({
  register,
  errors,
  teamMemberCount,
  setTeamMemberCount,
}) {
  const MIN_MEMBERS = 1;
  const MAX_MEMBERS = 10;

  function decreaseMembers() {
    setTeamMemberCount((current) => Math.max(MIN_MEMBERS, current - 1));
  }

  function increaseMembers() {
    setTeamMemberCount((current) => Math.min(MAX_MEMBERS, current + 1));
  }

  return (
    <section className="border-t border-white/8 pt-10">
      <SectionTitle
        number="04"
        eyebrow="Team"
        title="Team details"
        description="Enter your team information and the names of all participating members."
      />

      {/* Basic Team Details */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <FormInput
          label="Team Name"
          name="teamName"
          placeholder="Enter your team name"
          register={register}
          error={errors.teamName}
          required
        />

        <FormInput
          label="Team Leader Name"
          name="teamLeaderName"
          placeholder="Enter team leader name"
          register={register}
          error={errors.teamLeaderName}
          required
        />

        <FormInput
          label="Team Leader Mobile"
          name="teamLeaderMobile"
          type="tel"
          placeholder="Enter 10-digit mobile number"
          register={register}
          error={errors.teamLeaderMobile}
          required
          validation={{
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
        />

        {/* Team Member Count */}
        <div>
          <label className="mb-2 block text-xs font-medium text-white/50">
            Number of Team Members
            <span className="ml-1 text-blue-400">*</span>
          </label>

          <div className="flex h-11 items-center justify-between border border-white/10 bg-white/[0.02] px-3">
            <button
              type="button"
              onClick={decreaseMembers}
              disabled={teamMemberCount <= MIN_MEMBERS}
              className="flex h-7 w-7 items-center justify-center border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
              aria-label="Decrease team members"
            >
              <Minus size={14} />
            </button>

            <div className="flex items-center gap-2">
              <Users size={14} className="text-blue-400" />

              <span className="text-sm font-semibold text-white">
                {teamMemberCount}
              </span>
            </div>

            <button
              type="button"
              onClick={increaseMembers}
              disabled={teamMemberCount >= MAX_MEMBERS}
              className="flex h-7 w-7 items-center justify-center border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
              aria-label="Increase team members"
            >
              <Plus size={14} />
            </button>
          </div>

          <p className="mt-1.5 text-[10px] text-white/20">
            Maximum {MAX_MEMBERS} members
          </p>
        </div>
      </div>

      {/* Member Names */}
      <div className="mt-8">
        <div className="mb-5 flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-sm font-semibold text-white/70">Team Members</p>

            <p className="mt-1 text-xs text-white/25">
              Enter the name of each participating member.
            </p>
          </div>

          <span className="text-xs text-white/25">
            {teamMemberCount} {teamMemberCount === 1 ? "member" : "members"}
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {Array.from({ length: teamMemberCount }, (_, index) => (
            <div key={index}>
              <label
                htmlFor={`teamMembers.${index}.name`}
                className="mb-2 block text-xs font-medium text-white/50"
              >
                Member {index + 1} Name
                <span className="ml-1 text-blue-400">*</span>
              </label>

              <input
                id={`teamMembers.${index}.name`}
                type="text"
                placeholder={`Enter member ${index + 1} name`}
                {...register(`teamMembers.${index}.name`, {
                  required: `Member ${index + 1} name is required`,
                })}
                className={`h-11 w-full border bg-white/[0.02] px-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/50 focus:bg-white/[0.035] ${
                  errors.teamMembers?.[index]?.name
                    ? "border-red-400/50"
                    : "border-white/10"
                }`}
              />

              {errors.teamMembers?.[index]?.name && (
                <p className="mt-1.5 text-[11px] text-red-400">
                  {errors.teamMembers[index].name.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE INPUT
========================================================= */

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  required = false,
  validation = {},
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium text-white/50"
      >
        {label}

        {required && <span className="ml-1 text-blue-400">*</span>}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          ...(required && {
            required: `${label} is required`,
          }),
          ...validation,
        })}
        className={`h-11 w-full border bg-white/[0.02] px-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/50 focus:bg-white/[0.035] ${
          error ? "border-red-400/50" : "border-white/10"
        }`}
      />

      {error && (
        <p className="mt-1.5 text-[11px] text-red-400">{error.message}</p>
      )}
    </div>
  );
}

export default TeamDetails;
