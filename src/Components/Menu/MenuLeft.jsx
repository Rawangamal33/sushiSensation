import menuImg from "../../assets/Image (4).png";

const MenuLeft = () => {
  return (
    <div className="relative lg:h-fit h-[400px]">
      <img
        src={menuImg}
        alt="menu image"
        className="w-full h-full object-cover rounded-[16px]"
      />
      <div className="absolute lg:bottom-15 lg:left-10 bottom-9 left-8">
        <span className=" lg:text-7xl text-5xl lg:tracking-[0.17em] tracking-[0.1em] ">
          MENU
        </span>
      </div>
    </div>
  );
};

export default MenuLeft;
