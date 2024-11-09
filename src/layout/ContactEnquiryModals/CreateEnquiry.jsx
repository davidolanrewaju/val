import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../../components/Button/Button';
import TextInput from '../../components/Forms/TextInput';
import SelectInput from '../../components/Forms/SelectInput';

const CreateEnquiry = ({ toggle, setToggle }) => {
  const [createEnquiryDetails, setCreateEnquiryDetails] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    enquiry_detail: '',
  });

  const handleCreateEnquiryDetails = (e) => {
    const { name, value } = e.target;
    setCreateEnquiryDetails({ ...createEnquiryDetails, [name]: value });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    // dispatch(userLogin(loginDetails));
    // setLoginDetails({ email: "", password: "" }); // Reset form after submission
  };

  return (
    <div className={`${toggle ? 'show' : 'd-none'} modal fade`} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title fs-3 py-2 fw-semibold">Verify Your Identity</h5>
            <button type="button" className="btn-close btn-close-white" onClick={() => setToggle(false)}></button>
          </div>
          <form onSubmit={handleUserLogin} className="modal-body">
            <TextInput label="Fullname:" labelClassName="fw-semibold text-muted" containerClassName="w-100 mb-3" className="py-2 ps-2 mt-1 w-100 rounded border" type="text" name="fullname" value={createEnquiryDetails.fullname} onChange={handleCreateEnquiryDetails} />

            <TextInput label="Phone Number:" labelClassName="fw-semibold text-muted" containerClassName="w-100 mb-3" className="py-2 ps-2 mt-1 w-100 rounded border" type="text" name="phone" value={createEnquiryDetails.phone} onChange={handleCreateEnquiryDetails} />

            <TextInput label="Email:" labelClassName="fw-semibold text-muted" containerClassName="w-100 mb-3" className="py-2 ps-2 mt-1 w-100 rounded border" type="email" name="email" value={createEnquiryDetails.email} onChange={handleCreateEnquiryDetails} />

            <SelectInput name="subject" label="Subject" containerClassName="w-100 mb-3" labelClassName="fw-semibold text-muted" className="py-3 ps-2 mt-1 w-100 rounded border" value={createEnquiryDetails.subject} onChange={handleCreateEnquiryDetails}>
              <option>Select</option>
              <option value="rescheduling">Rescheduling</option>
              <option value="cancellation">Cancellation</option>
              <option value="refunds">Refunds</option>
              <option value="booking-challenges">Booking Challenges</option>
              <option value="trip-complaints">Trip Complaints</option>
              <option value="courier-enquiries">Courier/Express Enquiries</option>
              <option value="services-complaints">Complaints about Services</option>
              <option value="other-enquiries">Other Enquiries</option>
            </SelectInput>

            <div className="mb-3">
              <label className="fw-semibold text-muted">Your enquiry in detail:</label>
              <textarea name="enquiry_detail" placeholder='Message' className="p-2 mt-1 w-100 rounded" rows="5" cols="20"></textarea>
            </div>

            <div className="mt-4 d-flex justify-content-start">
            <Button
              btnName="Send message"
              className="float-left btn mt-15 rounded-1 px-3 py-2"
              style = {{ backgroundColor: "#F82827", color: "#fff", fontSize: "18px", textTransform: "uppercase", fontWeight: "600" }}
            />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateEnquiry.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default CreateEnquiry;
