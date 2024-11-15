/* eslint-disable react/prop-types */

import Seat from '../Seat/Seat';

const Row = ({ seats, selectedSeats, onSeatClick, includeDriverSeat, includeEmptySeatBefore, includeEmptySeatAfter }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      {includeDriverSeat && (
        <div style={{ width: '4rem', height: '4rem' }}>
          <img src="/assets/images/seats/driver.png" className="w-100 border" alt="driver" />
        </div>
      )}
      {includeEmptySeatBefore && (
        <div style={{ width: '4rem', height: '4rem' }}>
          <div className="w-100"></div>
        </div>
      )}
      {seats.map((seat) => (
        <Seat key={seat.seat_no} seat={seat} isSelected={selectedSeats.includes(seat.seat_no)} onClick={onSeatClick} />
      ))}
      {includeEmptySeatAfter && (
        <div style={{ width: '4rem', height: '4rem' }}>
          <div className="w-100"></div>
        </div>
      )}
    </div>
  );
};

export default Row;
