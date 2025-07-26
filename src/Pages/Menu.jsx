import Footer from "../Components/Footer/Footer";
import MenuLeft from "../Components/Menu/MenuLeft";
import MenuRightItems from "../Components/Menu/MenuRightItems";

const Menu = () => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 gap-3">
      <MenuLeft />
      <div>
        <MenuRightItems />
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
