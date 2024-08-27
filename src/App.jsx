import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewListingSignUp from "./components/NewListingSignUp";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewListingSignUp />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
