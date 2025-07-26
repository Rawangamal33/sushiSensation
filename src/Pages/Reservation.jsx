import React from "react";
import ReservationLeft from "../Components/Reservation/ReservationLeft";
import ReservationRight from "../Components/Reservation/ReservationRight";
import Footer from "../Components/Footer/Footer";

const Reservation = () => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 gap-3">
      <ReservationLeft />
      <div>
        <ReservationRight />
        <Footer />
      </div>
    </div>
  );
};

export default Reservation;
