/* eslint-disable react/prop-types */

const Seat = ({ seat, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(seat.seat_no);
  };

  return seat.availability === 'Available' ? (
    <div className={`seat-img m-1 ${isSelected ? 'border border-secondary p-1' : 'border-0 p-1'}`} style={{ width: '6rem' }} onClick={handleClick}>
      <div className={isSelected ? 'selected-seat shadow-lg' : ''}>
        <img src={`/assets/images/seats/seat${seat.seat_no}.png`} className="w-100" alt={`seat${seat.seat_no}`} />
      </div>
    </div>
  ) : (
    <div className="m-1 border-0 p-1" style={{ width: '6rem' }}>
      <img src="/assets/images/seats/taken.png" className="w-100" alt="taken" />
    </div>
  );
};

export default Seat;
