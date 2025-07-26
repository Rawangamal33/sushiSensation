import React from "react";
import ContactLeft from "../Components/Contact/ContactLeft";
import ContactRight from "../Components/Contact/ContactRight";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 gap-3">
      <ContactLeft />
      <div>
        <ContactRight />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
