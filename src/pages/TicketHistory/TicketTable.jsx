import PropTypes from 'prop-types';
import TicketRow from './TicketRow';
import { useMemo } from 'react';

const TicketTable = ({ tickets }) => {
  const memoizedRows = useMemo(() => tickets.map((ticket) => <TicketRow key={ticket.id} ticket={ticket} />), [tickets]);

  return (
    <div className="table-responsive mb-5">
      <table className="table table-striped" aria-label="Ticket history">
        <thead>
          <tr>
            {['Id', 'Status', 'Date', 'Subject', 'Action'].map((header) => (
              <th key={header} className="border p-3 align-middle text-secondary">
                <strong>{header}</strong>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{memoizedRows}</tbody>
      </table>
    </div>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TicketTable;
