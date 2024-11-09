import Footer from '../layout/Footer/Footer';
import NavigationBar from '../layout/Navbar/NavigationBar';

const TripReschedule = () => {
  return (
    <div className="booking-details">
      <NavigationBar />
      <div className="px-4 py-40 md:py-48 md:px-10 lg:px-28">
        <div className="details-container max-w-full mt-8 md:mt-10 flex flex-col justify-between lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:items-start">
          <div className="details-section bg-white drop-shadow-xl shadow-xl px-4 text-valgee-gray">
            <h1>Reschedule Booking</h1>
          </div>
          <div className="img-container lg:w-9/12 lg:justify-self-end">
            <img className="w-full" src="\assets\images\payment.png" alt="payment" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TripReschedule;
