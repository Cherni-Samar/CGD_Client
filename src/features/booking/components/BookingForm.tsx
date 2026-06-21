import { useState } from "react";
import { useQuote } from "../hooks/useQuote";
import { cities, vehicles, servicesList } from "../../../shared/constants/bookingData";

import type { Quote } from "../types/quote";
import "../styles/bookingForm.css";

export default function BookingForm() {
  const { submitQuote, loading } = useQuote();

  const [form, setForm] = useState<Quote>({
    firstName: "",
    phone: "",
    email: "",
    city: cities[0],
    vehicleType: vehicles[0],
    service: servicesList[0],
    date: "",
    time: "",
  });

  const [slots, setSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  /* ---------------- INPUT ---------------- */
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ---------------- DATE (FIX BUG + FORMAT SAFE) ---------------- */
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      date: value,
      time: "",
    }));

    generateSlots();
  };

  /* ---------------- SLOTS (CALENDLY STYLE) ---------------- */
  const generateSlots = () => {
    const arr: string[] = [];

    for (let h = 9; h <= 17; h++) {
      arr.push(`${h.toString().padStart(2, "0")}:00`);
      arr.push(`${h.toString().padStart(2, "0")}:30`);
    }

    setSlots(arr);
  };

  /* ---------------- TIME SELECT ---------------- */
  const selectTime = (time: string) => {
    setForm((prev) => ({
      ...prev,
      time,
    }));
  };

  /* ---------------- SUBMIT ---------------- */
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      await submitQuote(form);

      setStatus("success");

      setForm({
        firstName: "",
        phone: "",
        email: "",
        city: cities[0],
        vehicleType: vehicles[0],
        service: servicesList[0],
        date: "",
        time: "",
      });

      setSlots([]);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="booking-section" id="booking">

      <div className="booking-container">

        {/* LEFT SIDE */}
        <div className="booking-left">
          <div className="tag">Book Online</div>

          <h2>
            Get Your <span className="highlight">Free Quote</span>
          </h2>

          <p>
            Fill out the form and we will contact you within 2 hours.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="booking-right">

          <form onSubmit={submit}>

            {/* NAME + PHONE */}
            <div className="inputs-grid">
              <input
                className="pro-input"
                name="firstName"
                placeholder="Full Name"
                value={form.firstName}
                onChange={handle}
                required
              />

              <input
                className="pro-input"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handle}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="inputs-grid">
              <input
                className="pro-input full"
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handle}
                required
              />
            </div>

            {/* SELECTS */}
            <div className="inputs-grid">

              <select
                className="pro-input"
                name="vehicleType"
                value={form.vehicleType}
                onChange={handle}
              >
                {vehicles.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>

              <select
                className="pro-input"
                name="service"
                value={form.service}
                onChange={handle}
              >
                {servicesList.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <select
                className="pro-input"
                name="city"
                value={form.city}
                onChange={handle}
              >
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

            </div>

            {/* DATE */}
            <div className="calendar-container">
              <input
                type="date"
                className="pro-input"
                name="date"
                value={form.date}
                onChange={handleDate}
                required
              />
            </div>

            {/* TIME SLOTS */}
            {slots.length > 0 && (
              <div className="time-slots">

                <div className="slots-title">
                  Choose Time
                </div>

                <div className="slots-grid">

                  {slots.map((t) => (
                    <button
                      type="button"
                      key={t}
                      className={`time-slot ${
                        form.time === t ? "selected" : ""
                      }`}
                      onClick={() => selectTime(t)}
                    >
                      {t}
                    </button>
                  ))}

                </div>
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="btn-pro"
              disabled={loading || !form.time}
            >
              {loading ? "Sending..." : "→ Request My Free Quote"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="status">✅ Sent successfully</p>
            )}

            {status === "error" && (
              <p className="status">❌ Error sending request</p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}