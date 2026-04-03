import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const features = [
    {
      title: "Ride with ease",
      description: "Book your trip quickly with a clean and simple interface.",
    },
    {
      title: "Plan ahead",
      description: "Schedule rides for later and manage your travel better laa.",
    },
    {
      title: "Bhutan focused",
      description: "This design uses a Bhutan map section for local relevance laa.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="features-section">
        <h2>Why choose this service</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;