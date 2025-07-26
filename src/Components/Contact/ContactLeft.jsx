import contactMainImg from "../../assets/Image (9).png";

const ContactLeft = () => {
  return (
    <div className="relative lg:h-fit h-[400px]">
      <img
        src={contactMainImg}
        alt=" contact image"
        className="w-full h-full object-cover rounded-[16px]"
      />
      <div className="absolute lg:bottom-15 lg:left-10 bottom-9 left-8">
        <span className="lg:text-7xl text-5xl  tracking-wide ">CONTACT</span>
      </div>
    </div>
  );
};

export default ContactLeft;
