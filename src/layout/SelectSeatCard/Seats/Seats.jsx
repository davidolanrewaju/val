/* eslint-disable react/prop-types */
import FiveSeater from '../Seats/FiveSeater/FiveSeater';
import NineSeater from '../Seats/NineSeater/NineSeater';
import TwelveSeater from '../Seats/TwelveSeater/TwelveSeater';

const Seats = (props) => {
  const { trip_type, handleSelectedSeat, updatedData } = props;

  if (trip_type === '5 seater') {
    return <FiveSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  } else if (trip_type === '9 seater') {
    return <NineSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  } else if (trip_type === '12 seater') {
    return <TwelveSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  }
};

export default Seats;
