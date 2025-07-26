import React from "react";
import { GoDiamond } from "react-icons/go";
import { useForm, ValidationError } from "@formspree/react";
import H1com from "../ReusedComponents/H1com";

const ReservationRight = () => {
  const [state, handleSubmit] = useForm("xzzvrzkr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="text-mainTextColor/90 borderStyles lg:mt-0 mt-4.5 py-14 px-18 flex flex-col items-center">
      <H1com title="RESERVATION" />
      <p className="max-w-[400px] text-mainTextColor/80 text-center tracking-wide mb-17">
        Secure your spot at Qitchen, where exceptional sushi and a remarkable
        dining experience await.
      </p>
      <form
        action="https://formspree.io/f/xzzvrzkr"
        method="POST"
        className="flex flex-col justify-center items-center gap-4"
        nSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className="inputStyles"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          type="number"
          placeholder="Phone Number"
          className="inputStyles"
          name="phone"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <input
          type="email"
          placeholder="Email"
          className="inputStyles"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="flex justify-evenly items-center gap-4">
          <input
            type="number"
            placeholder="Guests"
            className="inputStyles w-[189px]"
            name="guests"
          />
          <ValidationError
            prefix="Guests"
            field="guests"
            errors={state.errors}
          />
          <input
            type="date"
            placeholder="Date"
            className="inputStyles w-[189px]"
            name="date"
          />
          <ValidationError prefix="Date" field="date" errors={state.errors} />
          <input
            type="time"
            placeholder="Time"
            className="inputStyles w-[189px]"
            name="time"
          />
          <ValidationError prefix="Time" field="time" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="inputStyles text-[16px] bg-mainTextColor text-mainBackGroundColor"
        >
          RESERVE
        </button>
      </form>
    </div>
  );
};

export default ReservationRight;
