/* eslint-disable react/prop-types */

import { useState } from 'react';
import Row from '../../../../components/Seats/Row/Row';

const FiveSeater = ({ handleSelectedSeat, updatedData }) => {
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
      amount: updatedSelectedSeats.length * updatedData.amount, // Multiply by the amount per seat
      trip_id: updatedData.trip.id,
    };
    handleSelectedSeat(seatInfo);
  };

  return (
    <div className="five-seater px-2 pt-2 d-flex flex-column gap-2 border border-dark rounded-top-4">
      <Row seats={[updatedData.seats[0]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} includeDriverSeat />
      <Row seats={[updatedData.seats[1], updatedData.seats[2]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
      <Row seats={[updatedData.seats[3], updatedData.seats[4]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
    </div>
  );
};

export default FiveSeater;
