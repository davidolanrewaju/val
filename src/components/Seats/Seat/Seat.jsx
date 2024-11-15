/* eslint-disable react/prop-types */

const Seat = ({ seat, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(seat.seat_no);
  };

  return seat.availability === 'Available' ? (
    <div className={`seat-img ${isSelected ? 'border border-secondary' : 'border-0'}`} style={{ width: '4rem', height: '4rem' }} onClick={handleClick}>
      <div className={isSelected ? 'selected-seat shadow-lg' : ''}>
        <img src={`/assets/images/seats/seat${seat.seat_no}.png`} className="w-100" alt={`seat${seat.seat_no}`} />
      </div>
    </div>
  ) : (
    <div className="border-0" style={{ width: '4rem', height: '4rem' }}>
      <img src="/assets/images/seats/taken.png" className="w-100" alt="taken" />
    </div>
  );
};

export default Seat;
