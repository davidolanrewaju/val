import PropTypes from 'prop-types';
import useFormatDate from '../../hooks/useFormatDate';
import { NavLink } from 'react-router-dom';

const TicketRow = ({ ticket }) => {
  const formattedDate = useFormatDate(ticket.created_at, 'with-time');
  return (
    <tr>
      <td className="align-top p-2">#{ticket.id}</td>
      <td className="align-top p-2">
        <button className={`btn btn-sm ${ticket.status.color === 'blue' ? 'btn-primary' : 'btn-secondary'}`}>{ticket.status.name}</button>
      </td>
      <td className="align-top p-2">{formattedDate}</td>
      <td className="text-capitalize align-top p-2">{ticket.title}</td>
      <td className="align-top p-2">
        <NavLink to={`/ticket/index/${ticket.id}`} className="fw-semibold text-danger text-decoration-none">
          View Replies
        </NavLink>
      </td>
    </tr>
  );
};

TicketRow.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketRow;
