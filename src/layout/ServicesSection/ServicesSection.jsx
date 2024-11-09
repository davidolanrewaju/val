import TextInput from '../../components/Forms/TextInput';
import Button from '../../components/Button/Button';

const ServicesSection = () => {
  return (
    <div className="container px-5 d-flex flex-column gap-5 text-secondary">
      <section className="text-center">
        <h1 className="h3 text-dark fw-normal text-uppercase">Our Services</h1>
        <p>We provide the perfect service for you</p>
      </section>
      <section className="row gy-5">
        <div className="col-lg-6 d-flex align-items-center gap-3">
          <div className="col-4 col-md-2 col-lg-3">
            <img src="/assets/icons/user.png" alt="" className="img-fluid" />
          </div>
          <div>
            <h5 className="h5 fw-medium text-dark mb-3">Hired Service</h5>
            <p>
              With VALGEE TRANSPORT SERVICES, hiring a car is not just about taking you from one place to another; it&apos;s a travel experience. We aim to help you create the most comfortable journey and unforgettable memories. Car hire service should never be a challenge, and with our affordable price
              and track record of great service and quality, we aim to make you a satisfied and happy customer. With years of experience in the car hire industry, we know exactly what is needed if you want a car that makes your trip swift and effortless.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center gap-3">
          <div className="col-4 col-md-2 col-lg-3">
            <img src="/assets/icons/users.png" alt="" className="img-fluid" />
          </div>
          <div>
            <h5 className="h5 fw-medium text-dark mb-3">Shared Service</h5>
            <p>
              With regular, reliable, scheduled and comfortable travel experience, there&apos;s never been a better time to travel with VTS. We have perfected the mini-bus travel experience to allow for relaxation and fun among friends and family. Our team of chauffeurs has the experience to get you
              where you need to be, while you enjoy your ride. We know the hassle of booking for a trip with scheduled time let us do the work! We are happy to work with you to find the perfect vehicle for you and your group on the dates that you need.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-5 row align-items-center">
        <div className="col-lg-6 mb-3 mb-lg-0">
          <h2 className="h3 text-dark fw-normal text-uppercase">Join the Newsletter</h2>
          <p>Subscribe to our newsletter and get notified about news and benefits</p>
        </div>
        <form className="col-lg-6 d-flex align-items-center">
          <TextInput type="email" name="subscribe-email" placeholder="Enter your email" containerClassName="flex-grow-1" className="booking-form border-0 background-white" />
          <Button btnName="Subscribe" className="red-btn m-0" />
        </form>
      </section>
    </div>
  );
};

export default ServicesSection;
