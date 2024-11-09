/* eslint-disable react/prop-types */

import { useState } from 'react';
import Row from '../../../../components/Seats/Row/Row';

const TwelveSeater = ({ handleSelectedSeat, updatedData }) => {
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
    <div className="twelve-seater container d-flex flex-column border border-dark rounded-top">
      <Row seats={[updatedData.seats[0]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} includeDriverSeat includeEmptySeatBefore />
      <Row seats={[updatedData.seats[1], updatedData.seats[2]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} includeEmptySeatAfter />
      <Row seats={[updatedData.seats[3], updatedData.seats[4], updatedData.seats[5]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
      <Row seats={[updatedData.seats[6], updatedData.seats[7], updatedData.seats[8]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
      <Row seats={[updatedData.seats[9], updatedData.seats[10], updatedData.seats[11]]} selectedSeats={selectedSeats} onSeatClick={handleSelectClick} />
    </div>
  );
};

export default TwelveSeater;
