import bookImg from "../../assets/Image (6).png";
const ReservationLeft = () => {
  return (
    <div className="relative lg:h-fit h-[400px]">
      <img
        src={bookImg}
        alt="reservation image"
        className="w-full h-full object-cover rounded-[16px]"
      />
      <div className="absolute lg:bottom-15 lg:left-10 bottom-9 left-8">
        <span className="leading-18 lg:text-7xl text-5xl lg:tracking-[0.17em] tracking-[0.1em] ">
          BOOK
          <br />A TABLE
        </span>
      </div>
    </div>
  );
};

export default ReservationLeft;
