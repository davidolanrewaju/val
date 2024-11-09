import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Components Import
import Button from '../../components/Button/Button';
import TextInput from '../../components/Forms/TextInput';
import SelectInput from '../../components/Forms/SelectInput';
import CalendarInput from '../../components/Forms/CalendarInput';

import { getHireVehicle } from '../../reducers/vehicleHire/vehicleHire';

const DirectBookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    origin: '',
    destination: '',
    date: '',
    time: '',
    trip_type_id: '',
  });
  const vehicles = useSelector((state) => state.vehicleType.vehiclesType.data);
  const hiredVehicleMessage = useSelector((state) => state.vehicleHire.message);
  console.log(hiredVehicleMessage);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getHireVehicle(formData));
    navigate('/');
    // { state: { message: hiredVehicleMessage } }
  };

  return (
    <div className="col-12 col-lg-10">
      <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
        <TextInput containerClassName="mb-3" className="booking-form" placeholder="Full Name" name="name" type="text" label="Passenger Name:" labelClassName="form-label mb-0 text-muted fw-medium" onChange={handleFormDataChange} />
        <TextInput containerClassName="mb-3" className="booking-form" placeholder="08012345678" name="phone" type="tel" label="Phone Number:" labelClassName="form-label mb-0 text-muted fw-medium" onChange={handleFormDataChange} />
        <TextInput containerClassName="mb-3" className="booking-form" placeholder="name@gmail.com" name="email" type="email" label="Email:" labelClassName="form-label mb-0 text-muted fw-medium" onChange={handleFormDataChange} />
        <TextInput containerClassName="mb-3" className="booking-form" placeholder="Takeoff point e.g Jos" name="origin" type="text" label="Travelling From:" labelClassName="form-label mb-0 text-muted fw-medium" onChange={handleFormDataChange} />
        <TextInput containerClassName="mb-3" className="booking-form" placeholder="Arrival point e.g Abuja" name="destination" type="text" label="Destination:" labelClassName="form-label mb-0 text-muted fw-medium" onChange={handleFormDataChange} />

        <SelectInput name="trip_type_id" label="Type of Vehicle" containerClassName="mb-3" labelClassName="form-label mb-0 text-muted fw-medium" className="booking-form" onChange={handleFormDataChange}>
          <option value="">Select Type</option>
          {vehicles && vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <option key={vehicle.tag} value={vehicle.id}>
                {vehicle.name} ({vehicle.description})
              </option>
            ))
          ) : (
            <option disabled>No vehicles available</option>
          )}
        </SelectInput>

        <CalendarInput label="Departure Date" labelClassName="form-label mb-0 text-muted fw-medium" containerClassName="mb-3" name="date" className="booking-form" onChange={handleFormDataChange} />

        <div className="mb-3">
          <label className="form-label mb-0 text-muted fw-medium">Departure Time</label>
          <input className="booking-form" type="time" name="time" onChange={handleFormDataChange} />
        </div>

        <div className="d-flex justify-content-end">
          <Button btnName="Continue" className="red-btn" />
        </div>
      </form>
    </div>
  );
};

export default DirectBookingForm;
