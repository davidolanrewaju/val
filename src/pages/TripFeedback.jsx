import Footer from '../layout/Footer/Footer';
import Button from '../components/Button/Button';
import TextInput from '../components/Forms/TextInput';
import SelectInput from '../components/Forms/SelectInput';
import NavigationBar from '../layout/Navbar/NavigationBar';
import CalendarInput from '../components/Forms/CalendarInput';

const TripFeedback = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container px-md-5 padding-top" style={{ marginBottom: '100px' }}>
        <h2 className='mb-0' style={{ color: '#303030', fontSize: '30px', textTransform: 'uppercase' }}>Tell Us About Your Valgee Experience</h2>
        <form style={{ marginTop: '80px' }}>
          <div className="row g-4">
            <div className="col-md-6">
              <TextInput label="Name:" placeholder="e.g Sandra Paul" labelClassName="text-muted" containerClassName="mb-3" className="booking-form" type="text" name="username" required={true} />
              <TextInput label="Phone:" placeholder="e.g 07012345678" labelClassName="text-muted" containerClassName="mb-3" className="booking-form" type="tel" name="phone" required={true}/>
              <TextInput label="Email (Optional):" placeholder="e.g name@mail.com" labelClassName="text-muted" containerClassName="mb-3" className="booking-form" type="email" name="email" />
              <div className="mb-3">
                <p className="text-muted mb-2">What was your route?</p>
                <div className="row">
                  <div className="col-6">
                    <SelectInput name="origin" label="From Where?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                      <option value="">Select Departure Terminal</option>
                      <option>F.C.T =&gt; Abuja</option>
                      <option>Plateau =&gt; Jos</option>
                      <option>Benue =&gt; Markurdi</option>
                    </SelectInput>
                  </div>
                  <div className="col-6">
                    <SelectInput name="destination" label="To Where?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                      <option value="">Select Departure Terminal</option>
                      <option>F.C.T =&gt; Abuja</option>
                      <option>Plateau =&gt; Jos</option>
                      <option>Benue =&gt; Markurdi</option>
                    </SelectInput>
                  </div>
                </div>
              </div>
              <CalendarInput label="When did you travel?" labelClassName="text-muted" containerClassName="mb-3" className="booking-form" />
              <SelectInput name="booking" label="How was your booking experience on the website?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Booked Offline">I did not book online</option>
                <option value="Simple and Fast">It was Simple and Fast</option>
                <option value="Hard to Understand">It was Hard to Understand</option>
                <option value="Seat issues">I Couldbooking-form seats</option>
                <option value="Payment Challeges">I had Payment Challenges</option>
              </SelectInput>
              <SelectInput name="staff-treatment" label="How were you treated at the terminal by staff?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, Staff were Friendly and respectable</option>
                <option value="Good">Good, I am okay with the service</option>
                <option value="Fair">Fair, I am not impressed but its alright</option>
                <option value="Poor">Poor, The Service did not meet up to my expectations</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
            </div>
            <div className="col-md-6">
              <SelectInput name="vehicles" label="How would you rate the vehicles?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, Clean, Sound and Comfortable</option>
                <option value="Good">Good, I am okay with the service</option>
                <option value="Fair">Fair, I am not impressed but its alright</option>
                <option value="Poor">Poor, It didnt meet up to my expectations</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
              <SelectInput name="air-conditoning" label="How was the air conditioning system?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, worked all through</option>
                <option value="Good">Good, I am okay with the service</option>
                <option value="Fair">Fair, I am not impressed but its alright</option>
                <option value="Poor">Poor, It didnt meet up to my expectations</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
              <SelectInput name="driver-behaviour" label="How was the driver's behaviour?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, driver was Friendly and respectable</option>
                <option value="Good">Good, I am okay with his/her performance</option>
                <option value="Fair">Fair, I am not impressed but its alright</option>
                <option value="Poor">Poor, His/Her Service did not meet up to my expectations</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
              <SelectInput name="driver-skill" label="How was their driving skill?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, Very experienced</option>
                <option value="Good">Good, I am okay with the service</option>
                <option value="Fair">Fair, it could be better than this</option>
                <option value="Poor">Poor, He/She didnt meet up to my expectations</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
              <SelectInput name="road-knowledge" label="How was his knowledge of the road and route?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, Apt knowledge of the road</option>
                <option value="Good">Good, I am okay with his/her performannce</option>
                <option value="Fair">Fair, I am not impressed but its alright</option>
                <option value="Poor">Poor, He/She seemed confused many times</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
              <SelectInput name="overall-experience" label="Please rate your overall experience?" containerClassName="mb-3" labelClassName="text-muted" className="booking-form">
                <option value="">Select one</option>
                <option value="Excellent">Excellent, one of a kind</option>
                <option value="Good">Good, I am okay with it</option>
                <option value="Fair">Fair, Its not so wonderful</option>
                <option value="Poor">Poor, there is a lot to improve here</option>
                <option value="Bad">Bad, Totally unacceptable</option>
              </SelectInput>
              <div className="mb-3">
                <label htmlFor="detail" className="form-label text-muted">
                  Is there something else you would want to tell us in detail?
                </label>
                <textarea name="detail" id="detail" className="booking-form" rows="5"></textarea>
              </div>
              <div className="col-md-6">
                <Button btnName="Send Feedback" className="red-btn" style={{ paddingTop: '15px', paddingBottom: '15px' }} />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default TripFeedback;
