import { useState, useEffect } from 'react';
import Footer from '../../layout/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import MiniNav from '../../layout/Navbar/MiniNav/MiniNav';
import NavigationBar from '../../layout/Navbar/NavigationBar';
import CreateTicket from '../../layout/ContactEnquiryModals/CreateTicket';
import { fetchTickets } from '../../reducers/ticket/ticketSlice';
import TicketTable from './TicketTable';

const TicketHistory = () => {
  const [toggleCreateModal, setToggleCreateModal] = useState(false);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const { tickets, loading } = useSelector((state) => state.ticket);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading && tickets.length === 0) {
      dispatch(fetchTickets())
        .unwrap()
        .catch((err) => setError(err));
    }
  }, [dispatch, loading, tickets.length]);

  return (
    <>
      <NavigationBar />
      {token ? (
        <div className="container px-md-5 padding-top">
          <MiniNav />
          <h2 className="fw-medium mt-5 mb-4">Customer Support</h2>
          <div>
            <button onClick={() => setToggleCreateModal(true)} className="btn btn-danger mt-3 mb-5" aria-label="Create new ticket">
              Create Ticket
            </button>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div>
            <p className="h4 mb-3">Ticket History</p>
            {loading ? <p className="mb-5">Loading tickets...</p> : tickets.length > 0 ? <TicketTable tickets={tickets} /> : <p className="mb-5">No tickets available.</p>}
          </div>
        </div>
      ) : (
        <div className="container py-5">
          <h1>Please log in to view your ticket history.</h1>
        </div>
      )}
      <Footer />
      <CreateTicket toggle={toggleCreateModal} setToggle={setToggleCreateModal} />
    </>
  );
};

export default TicketHistory;
