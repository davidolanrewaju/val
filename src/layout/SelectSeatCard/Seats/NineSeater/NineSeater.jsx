/* eslint-disable react/prop-types */
import { useState } from 'react';
import Row from '../../../../components/Seats/Row/Row';

const NineSeater = ({ handleSelectedSeat, updatedData }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelectClick = (seatNumber) => {
    let updatedSelectedSeats;
    if (selectedSeats.includes(seatNumber)) {
      updatedSelectedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
    } else {
      updatedSelectedSeats = [...selectedSeats, seatNumber];
    }
    setSelectedSeats(updatedSelectedSeats);

    const seatInfo = {
      seats: updatedSelectedSeats,
      no_of_seats: updatedSelectedSeats.length,
      amount: updatedSelectedSeats.length * updatedData.amount,
      trip_id: updatedData.trip.id,
    };
    handleSelectedSeat(seatInfo);
  };

  return (
    <div className="nine-seater d-flex flex-column border border-dark" style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
      <Row seats={[updatedData.seats[0]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} includeDriverSeat />
      <Row seats={[updatedData.seats[1], updatedData.seats[2]]} includeEmptySeatAfter selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
      <Row seats={[updatedData.seats[3], updatedData.seats[4]]} includeEmptySeatAfter selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
      <Row seats={[updatedData.seats[5], updatedData.seats[6]]} includeEmptySeatAfter selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
      <Row seats={[updatedData.seats[7], updatedData.seats[8]]} includeEmptySeatBefore selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
    </div>
  );
};
export default NineSeater;
