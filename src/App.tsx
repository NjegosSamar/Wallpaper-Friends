import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Parallax from "./Parallax";
import Wallpapers from "./Wallpapers";

function App() {
  return (
    <div className="font-Poetsen-One bg-black">
      <Hero />
      <Parallax />
      <About />
      <Wallpapers />
      <Footer />
    </div>
  );
}

export default App;
