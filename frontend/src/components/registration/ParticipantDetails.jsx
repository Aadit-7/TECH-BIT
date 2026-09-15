import SectionTitle from "../common/SectionTitle";

function ParticipantDetails({ register, errors, department, setValue }) {
  /* =========================================================
     BRANCH OPTIONS
  ========================================================= */

  const branchOptions = [
    "Computer Engineering",
    "Information Technology",
    "Electronics & Telecommunication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
  ];

  /* =========================================================
     YEAR OPTIONS
  ========================================================= */

  const yearOptions = {
    Degree: ["1st Year", "2nd Year", "3rd Year", "4th Year"],

    Diploma: ["1st Year", "2nd Year"],

    BCA: ["1st Year", "2nd Year", "3rd Year"],
  };

  /* =========================================================
     DEPARTMENT CHANGE
  ========================================================= */

  function handleDepartmentChange(event) {
    const value = event.target.value;

    /*
      Update department
    */
    setValue("department", value, {
      shouldValidate: true,
    });

    /*
      Reset branch
    */
    setValue("branch", "", {
      shouldValidate: true,
    });

    /*
      Reset year
    */
    setValue("year", "", {
      shouldValidate: true,
    });
  }

  return (
    <section className="border-t border-white/8 pt-10">
      {/* =====================================================
          SECTION TITLE
      ====================================================== */}

      <SectionTitle
        number="02"
        eyebrow="Participant"
        title="Your details"
        description="Enter your personal and academic information."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* =====================================================
            FULL NAME
        ====================================================== */}

        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          register={register}
          error={errors.fullName}
          required
        />

        {/* =====================================================
            COLLEGE
        ====================================================== */}

        <FormInput
          label="College / Institute Name"
          name="college"
          placeholder="Enter your college or institute"
          register={register}
          error={errors.college}
          required
        />

        {/* =====================================================
            DEPARTMENT
        ====================================================== */}

        <div>
          <label
            htmlFor="department"
            className="mb-2 block text-xs font-medium text-white/50"
          >
            Department
            <span className="ml-1 text-blue-400">*</span>
          </label>

          <select
            id="department"
            {...register("department", {
              required: "Please select your department",
            })}
            onChange={handleDepartmentChange}
            className={`h-11 w-full border bg-white/[0.02] px-3 text-sm text-white outline-none transition focus:border-blue-400/50 ${
              errors.department ? "border-red-400/50" : "border-white/10"
            }`}
          >
            <option value="">Select department</option>

            <option value="Degree">Degree</option>

            <option value="Diploma">Diploma</option>

            <option value="BCA">BCA</option>
          </select>

          {errors.department && (
            <ErrorMessage message={errors.department.message} />
          )}
        </div>

        {/* =====================================================
            BRANCH
            Hidden for BCA
        ====================================================== */}

        {department !== "BCA" && (
          <div>
            <label
              htmlFor="branch"
              className="mb-2 block text-xs font-medium text-white/50"
            >
              Branch
              {department && <span className="ml-1 text-blue-400">*</span>}
            </label>

            <select
              id="branch"
              {...register("branch", {
                required: department ? "Please select your branch" : false,
              })}
              disabled={!department}
              className={`h-11 w-full border bg-white/[0.02] px-3 text-sm text-white outline-none transition focus:border-blue-400/50 disabled:cursor-not-allowed disabled:opacity-30 ${
                errors.branch ? "border-red-400/50" : "border-white/10"
              }`}
            >
              <option value="">
                {!department ? "Select department first" : "Select branch"}
              </option>

              {department &&
                branchOptions.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
            </select>

            {errors.branch && <ErrorMessage message={errors.branch.message} />}
          </div>
        )}

        {/* =====================================================
            YEAR / CLASS
        ====================================================== */}

        <div>
          <label
            htmlFor="year"
            className="mb-2 block text-xs font-medium text-white/50"
          >
            Year / Class
            <span className="ml-1 text-blue-400">*</span>
          </label>

          <select
            id="year"
            {...register("year", {
              required: "Please select your year / class",
            })}
            disabled={!department}
            className={`h-11 w-full border bg-white/[0.02] px-3 text-sm text-white outline-none transition focus:border-blue-400/50 disabled:cursor-not-allowed disabled:opacity-30 ${
              errors.year ? "border-red-400/50" : "border-white/10"
            }`}
          >
            <option value="">
              {!department ? "Select department first" : "Select year / class"}
            </option>

            {yearOptions[department]?.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          {errors.year && <ErrorMessage message={errors.year.message} />}
        </div>

        {/* =====================================================
            MOBILE
        ====================================================== */}

        <FormInput
          label="Mobile Number"
          name="mobile"
          type="tel"
          placeholder="Enter 10-digit mobile number"
          register={register}
          error={errors.mobile}
          required
          validation={{
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
        />

        {/* =====================================================
            EMAIL
        ====================================================== */}

        <FormInput
          label="Email ID"
          name="email"
          type="email"
          placeholder="Enter your email address"
          register={register}
          error={errors.email}
          required
          validation={{
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
        />
      </div>
    </section>
  );
}

/* =========================================================
   FORM INPUT
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

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}

/* =========================================================
   ERROR MESSAGE
========================================================= */

function ErrorMessage({ message }) {
  return <p className="mt-1.5 text-[11px] text-red-400">{message}</p>;
}

export default ParticipantDetails;
