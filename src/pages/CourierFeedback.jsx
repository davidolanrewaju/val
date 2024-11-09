import Footer from '../layout/Footer/Footer';
import NavigationBar from '../layout/Navbar/NavigationBar';

const CourierFeedback = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container px-md-5 padding-top">
        <h2 className="mb-0" style={{ color: '#303030', fontSize: '30px', textTransform: 'uppercase' }}>
          Tell Us About Your Valgee Courier Experience
        </h2>
        <form style={{ marginTop: '80px' }}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="mb-3">
                <label htmlFor="username" className="form-label text-muted">
                  Name:
                </label>
                <input type="text" className="booking-form" id="username" name="username" placeholder="e.g Sandra Paul" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-muted">
                  Phone:
                </label>
                <input type="tel" className="booking-form" id="phone" name="phone" placeholder="e.g 07012345678" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted">
                  Email (Optional):
                </label>
                <input type="email" className="booking-form" id="email" name="email" placeholder="e.g name@mail.com" />
              </div>
              <div className="mb-3">
                <p className="text-muted mb-2">What was your parcel route?</p>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="origin" className="form-label text-muted">
                      From Where?
                    </label>
                    <select className="booking-form" id="origin" name="origin">
                      <option value="">Select Departure Terminal</option>
                      <option>F.C.T =&gt; Abuja</option>
                      <option>Plateau =&gt; Jos</option>
                      <option>Benue =&gt; Markurdi</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="destination" className="form-label text-muted">
                      To Where?
                    </label>
                    <select className="booking-form" id="destination" name="destination">
                      <option value="">Select Departure Terminal</option>
                      <option>F.C.T =&gt; Abuja</option>
                      <option>Plateau =&gt; Jos</option>
                      <option>Benue =&gt; Markurdi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="parcelDate" className="form-label text-muted">
                  When did you send your parcel?
                </label>
                <input type="date" className="booking-form" id="parcelDate" name="parcelDate" />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="mb-3">
                <label htmlFor="courierCode" className="form-label text-muted">
                  Enter your courier code
                </label>
                <input type="text" className="booking-form" id="courierCode" name="courierCode" placeholder="e.g V12345" />
              </div>
              <div className="mb-3">
                <label htmlFor="staffTreatment" className="form-label text-muted">
                  How were you treated at the terminal by staff?
                </label>
                <select className="booking-form" id="staffTreatment" name="staff-treatment">
                  <option value="">Select one</option>
                  <option value="Excellent">Excellent, I was treated properly</option>
                  <option value="Good">Good, I am okay with the service</option>
                  <option value="Fair">Fair, I am not impressed but its alright</option>
                  <option value="Poor">Poor, It didnt meet up to my expectations</option>
                  <option value="Bad">Bad, Totally unacceptable</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="parcelCondition" className="form-label text-muted">
                  How was the condition of the parcel on receival?
                </label>
                <select className="booking-form" id="parcelCondition" name="parcel-condition">
                  <option value="">Select one</option>
                  <option value="Excellent">Excellent, I met the parcel in a good condition</option>
                  <option value="Good">Good, I am okay with the service</option>
                  <option value="Fair">Fair, I am not impressed but its alright</option>
                  <option value="Poor">Poor, It didnt meet up to my expectations</option>
                  <option value="Bad">Bad, Totally unacceptable</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="overallExperience" className="form-label text-muted">
                  Please rate your overall experience?
                </label>
                <select className="booking-form" id="overallExperience" name="overall-experience">
                  <option value="">Select one</option>
                  <option value="Excellent">Excellent, one of a kind</option>
                  <option value="Good">Good, I am okay with it</option>
                  <option value="Fair">Fair, Its not so wonderful</option>
                  <option value="Poor">Poor, there is a lot to improve here</option>
                  <option value="Bad">Bad, Totally unacceptable</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="additionalFeedback" className="form-label text-muted">
                  Is there something else you would want to tell us in detail?
                </label>
                <textarea className="booking-form" id="additionalFeedback" name="detail" rows="4"></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="red-btn" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CourierFeedback;
