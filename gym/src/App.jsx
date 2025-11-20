import Navbar from "./componets/Navbar.jsx";
import HeroSection from "./componets/Hero.jsx";
import Content from "./componets/Trainer.jsx";
import Gym from "./componets/Gym.jsx";
import Service from "./componets/Service.jsx";
import Packages from "./componets/Packages.JSX";
import Protein from "./componets/Protein.jsx";
import FlowingMenu from "./componets/Flowing.jsx";
import About from "./componets/About.jsx";
import Footer from "./componets/Footer.jsx";
import EquipmentCube from "./componets/Cube.jsx"
 
 function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <Content />
      <Gym />
      <Packages />
      <FlowingMenu />  
      <Protein />
      <EquipmentCube />
      <About />
      <Footer />
    </>
  );
 }

export default App;
