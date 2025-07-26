import aboutimg from "../../assets/Image (7).png";
const AboutLeft = () => {
  return (
    <div className="relative lg:h-fit h-[400px]">
      <img
        src={aboutimg}
        alt="about image"
        className="w-full h-full object-cover rounded-[16px]"
      />
      <div className="absolute lg:bottom-15 lg:left-10 bottom-9 left-8">
        <span className="lg:text-7xl text-5xl lg:tracking-[0.17em] tracking-[0.08em] ">
          ABOUT
        </span>
      </div>
    </div>
  );
};

export default AboutLeft;
