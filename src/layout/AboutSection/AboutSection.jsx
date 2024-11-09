const AboutSection = () => {
  return (
    <div className="container px-5">
      <div className="row g-4 g-lg-5" style={{ paddingTop: '450px' }}>
        <section className="col-12 col-lg-6 d-flex flex-column gap-4 text-secondary">
          <div>
            <h1 className="fw-medium fs-2 text-uppercase mb-3">About Us</h1>
            <p>Valgee Transport Services (VTS) commenced car hire service on the 4th of June 2017. We are Strategically located in the urban area of Plateau State called Jos to meet the increasing the demand for charter services within the city and for trips to and from Jos.</p>
          </div>
          <p>
            We offer a unique service of transportation for those visiting Jos where safety, comfort, affordability and excellent customer service are our core values. We understand the need to travel in style, comfort and safety at all times. We are committed to maintaining the highest standards
            when it comes to car hire service with our professionally trained drivers. Whatever your plans are, our reliable vehicles are ready to give you a smooth road experience.
          </p>
        </section>
        <section className="col-12 col-lg-6 d-flex flex-column gap-4 text-secondary">
          <div>
            <h5 className="fs-4 fw-medium text-dark mb-2">Vision</h5>
            <p>To be the most innovative and preferred transport service organisation in Nigeria and beyond</p>
          </div>
          <div>
            <h5 className="fs-4 fw-medium text-dark mb-2">Mission</h5>
            <p>To deliver matchless transport service in Nigeria and beyond; through sustained innovation and continuous improvement of internal operations, leveraging on the state-of- the- art equipment and technology globally available thereby guaranteeing delight for all our stake holders</p>
          </div>
          <div>
            <h5 className="fs-4 fw-medium text-dark mb-2">Our Values</h5>
            <p>Innovation, Mutuality, Excellence, Integrity</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
