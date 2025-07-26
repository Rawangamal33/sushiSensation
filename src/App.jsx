import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Reservation from "./Pages/Reservation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AnimationPage from "./Animation/AnimationPage";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AnimationPage>
                <Home />
              </AnimationPage>
            }
          />
          <Route
            path="menu"
            element={
              <AnimationPage>
                <Menu />
              </AnimationPage>
            }
          />
          <Route
            path="reservation"
            element={
              <AnimationPage>
                <Reservation />
              </AnimationPage>
            }
          />
          <Route
            path="about"
            element={
              <AnimationPage>
                <About />
              </AnimationPage>
            }
          />
          <Route
            path="contact"
            element={
              <AnimationPage>
                <Contact />
              </AnimationPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
