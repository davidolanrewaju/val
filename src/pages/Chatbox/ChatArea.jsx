import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Chatbox from './Chatbox';
import Footer from '../../layout/Footer/Footer';
import MiniNav from '../../layout/Navbar/MiniNav/MiniNav';
import NavigationBar from '../../layout/Navbar/NavigationBar';
import useFormatDate from '../../hooks/useFormatDate';

import { fetchSingleTicket } from '../../reducers/ticket/ticketSlice';

const ChatArea = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const { singleTicket } = useSelector((state) => state.ticket);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleTicket(id));
  }, [dispatch, id]);
  

  const formattedDate = useFormatDate(singleTicket.created_at, 'with-time');

  return (
    <>
      <NavigationBar />
      {token ? (
        <div className="container px-md-5 padding-top">
          <MiniNav />
          <h2 className="fw-medium mt-5 mb-4">Customer Support</h2>
          <div className="py-4">
            <p className="lead">
              Ticket: <span className="fw-bold">#{id}</span>
            </p>
            <p className="text-capitalize fs-5 pt-2">{singleTicket.title}</p>
            <p className="fw-bold text-success pt-2">{formattedDate}</p>
          </div>

          <div>
            <Chatbox singleTicket={singleTicket} />
          </div>
        </div>
      ) : (
        <div className="container py-5">
          <h1>Please log in to view your ticket history.</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ChatArea;
