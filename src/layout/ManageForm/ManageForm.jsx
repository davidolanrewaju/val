import { useState } from 'react';

import Button from '../../components/Button/Button';
// import TextInput from '../../components/Forms/TextInput';

const ManageForm = () => {
  const [referenceNo, setReferenceNo] = useState('');

  const handleReferenceNoChange = (e) => {
    setReferenceNo(e.target.value);
  };
  return (
    <div className="col-12 col-lg-5">
      <div className="section-heading" style={{ marginBottom: '40px' }}>
        <h2 className="section-heading" style={{ textTransform: 'uppercase' }}>
          Manage Your Booking
        </h2>
        <p className="font-medium" style={{ marginBottom: '5px' }}>
          Verify | Rescheduling | Cancellations
        </p>
      </div>

      <div className="contact-form-area" style={{ marginBottom: '100px' }}>
        <form>
          <div className="row mt-3">
            <div className="col-12 col-sm-10">
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className='mb-0 text-muted fw-medium' style={{ marginBottom: '10px', fontSize: '18px' }}>Enter Reference No</label>
                <input type="text" className="booking-form manage-booking" name="reference" placeholder="e.g VTSCD141857078969" required="" value={referenceNo} onChange={handleReferenceNoChange} />
              </div>
            </div>
            <div className="col-12 col-sm-10 pb-3">
              <Button btnName="Search Booking" containerClassName='d-flex justify-content-end' className="btn rounded-1" style={{ marginTop: '15px', padding:'10px 20px', backgroundColor: '#F82827', color: '#fff', fontSize: '16px', textTransform: 'uppercase', fontWeight: '600' }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageForm;
