import LocationInput from "./LocationInput";

function BookingCard() {
  return (
    <div className="booking-card">
      <LocationInput placeholder="Enter pickup location" />
      <LocationInput placeholder="Enter destination" />

      <div className="buttons">
        <button className="request-btn">Request now</button>
        <button className="schedule-btn">Schedule for later</button>
      </div>
    </div>
  );
}

export default BookingCard;