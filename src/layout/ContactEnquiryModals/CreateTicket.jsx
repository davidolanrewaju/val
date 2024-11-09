import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TICKET_SUBJECTS } from '../../utils/ticketTitleOptions.js';
import SelectInput from '../../components/Forms/SelectInput';
import { createTicket } from '../../reducers/ticket/ticketSlice';

const CreateTicket = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.authentication.token);
  const [ticketMessage, setTicketMessage] = useState({
    title: '',
    body: '',
  });

  const handleCreateTicket = (e) => {
    const { name, value } = e.target;
    setTicketMessage({ ...ticketMessage, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await dispatch(createTicket({ ...ticketMessage, token })).unwrap();
      setToggle(false);
      setTicketMessage({ title: '', body: '' });
    } catch (err) {
      setError(err);
      setTimeout(() => setToggle(false), 2000);
    }
  };

  return (
    <>
      <div className={`modal ${toggle ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h3 className="modal-title fs-5">Send Message</h3>
              <button onClick={() => setToggle(!toggle)} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleFormSubmit}>
              <div className="modal-body">
                <SelectInput name="title" label="Subject" containerClassName="mb-3" labelClassName="form-label" className="form-select" value={createTicket.title} onChange={handleCreateTicket}>
                  <option value="">Select</option>
                  {TICKET_SUBJECTS.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                      {subject.label}
                    </option>
                  ))}
                </SelectInput>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="body" className="form-control" rows="5" value={ticketMessage.body} onChange={handleCreateTicket}></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={() => setToggle(!toggle)} type="button" className="btn btn-outline-secondary">
                  Close
                </button>
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

CreateTicket.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default CreateTicket;
