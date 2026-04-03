import BookingCard from "./BookingCard";
import bhutanMap from "../assets/bhutan-map.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Go anywhere with Uber</h1>
        <p>Request a ride, hop in, and go.</p>
        <BookingCard />
      </div>

      <div className="map-section">
        <img src={bhutanMap} alt="Bhutan map" />
      </div>
    </section>
  );
}

export default Hero;