import HomeLeft from "../Components/Home/HomeLeft";
import HomeRoutes from "../Components/Home/HomeRoutes";

const Home = () => {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-[3fr_1fr] gap-3">
      <HomeLeft />
      <HomeRoutes />
    </div>
  );
};

export default Home;
