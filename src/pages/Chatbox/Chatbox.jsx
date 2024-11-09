/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { sendReply, fetchSingleTicket } from '../../reducers/ticket/ticketSlice';

const Chatbox = ({ singleTicket }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    body: '',
    ticket_id: 0,
  });
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (singleTicket && singleTicket.ticket_replies) {
      setConversation(
        singleTicket.ticket_replies.map((reply) => ({
          sender: reply.user != null ? reply.user.name : 'Staff',
          message: reply.body,
          createdAt: reply.created_at,
        }))
      );
    }
  }, [singleTicket]);

  console.log(singleTicket);
  console.log(conversation);

  const handleChange = (value) => {
    setMessage({ ...message, body: value, ticket_id: singleTicket.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.body.trim() !== '') {
      dispatch(sendReply(message)).then(() => {
        dispatch(fetchSingleTicket(singleTicket.id));
      });
      setConversation([
        ...conversation,
        {
          sender: 'User',
          message: message.body,
          createdAt: new Date().toISOString(),
        },
      ]);
      setMessage({ ...message, body: '' });
    }
  };

  const modules = {
    toolbar: [[{ header: '1' }, { header: '2' }, { font: [] }], [{ size: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['link', 'image'], ['clean']],
  };

  return (
    <div className="chatbox">
      <div className="conversation-view border pt-3" style={{ maxHeight: '500px', overflowY: 'auto', marginBottom: '20px' }}>
        {conversation.map((msg, index) => (
          <div key={index} className='w-100 d-flex justify-content-center'>
            <div className={`mb-4 d-flex align-items-center ${msg.sender === 'Staff' ? 'flex-row-reverse' : 'flex-row'}`} style={{ width: '95%' }}>
              <div className="mb-3 bg-dark d-flex justify-content-center align-items-center rounded-circle flex-shrink-0" style={{ width: '3rem', height: '3rem' }}>
                <img className="w-75 pt-2 pe-1" src="/assets/images/logo2.png" alt="logo" />
              </div>
              <div className={`d-flex flex-column ${msg.sender === 'Staff' ? 'text-end align-items-end' : 'align-items-start'} flex-grow-1`}>
                <div className={`rounded  p-3 mx-3 mb-1 ${msg.sender === 'Staff' ? 'bg-valgee-red text-white' : 'bg-valgee-gray text-black'}`} style={{ width: '90%', fontSize: '1rem' }}>
                  <strong className="d-block mb-2">{msg.sender}:</strong>
                  <div className={`d-flex ${msg.sender === 'Staff' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <ReactQuill value={msg.message} readOnly={true} modules={{ toolbar: false }} formats={['bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image']} />
                  </div>
                </div>
                <p className="pb-0 mb-0 mx-3 text-muted" style={{ fontSize: '0.8rem' }}>
                  {msg.createdAt && new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <ReactQuill value={message.body} onChange={handleChange} placeholder="Type your message here..." modules={modules} className="custom-quill" />

        <div className="mb-5 d-flex justify-content-end textarea-bottom">
          <button disabled={message.body.trim() === ''} className="btn btn-danger fw-semibold mt-3" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbox;
