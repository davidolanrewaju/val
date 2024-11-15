import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components Import
import Button from '../../components/Button/Button';
import TextInput from '../../components/Forms/TextInput';
import Error from '../../components/ErrorDisplays/Error';
import SelectInput from '../../components/Forms/SelectInput';
import CalendarInput from '../../components/Forms/CalendarInput';

// Reducers Import
import { getVehicles } from '../../reducers/vehicle/vehicleSlice';
import { getLocationsTo } from '../../reducers/location/locationToSlice';
import { getLocationsFrom } from '../../reducers/location/locationFromSlice';
import Loader from '../../components/Loader/Loader';

const DirectBookingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicleType.vehiclesType.data);
  const locationsTo = useSelector((state) => state.locationTo.locationsTo.data);
  const locationsFrom = useSelector((state) => state.locationFrom.locationsFrom.data);

  const [formData, setFormData] = useState({
    date: '',
    no_of_seats: 1,
    origin: 0,
    destination: 0,
    type: '',
  });
  const [error, setError] = useState({
    locationErr: '',
    dateErr: '',
  });
  const [traveldate, setTravelDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getLocationsTo());
    dispatch(getLocationsFrom());
  }, [dispatch]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    const dbDateFormat = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return dbDateFormat;
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    const dbDateFormat = formatDate(value);
    setTravelDate(value);
    setFormData({ ...formData, date: dbDateFormat });

    // Real-time date validation
    const selectedDate = new Date(value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {
      setError((prevErrors) => ({ ...prevErrors, dateErr: '*Date can only be today or any future date' }));
    } else {
      setError((prevErrors) => ({ ...prevErrors, dateErr: '' }));
    }
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;

    const parsedValue = name === 'origin' || name === 'destination' ? parseInt(value, 10) : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedCurrentDate = formatDate(new Date());
    const selectedDate = new Date(traveldate);
    const currentDate = new Date(formattedCurrentDate);
    setError({ locationErr: '', dateErr: '' });

    // Check for errors
    let hasError = false;
    if (!formData.destination) {
      setError((prevErrors) => ({ ...prevErrors, locationErr: "*Please select rounded-0 where you're traveling to." }));
      hasError = true;
    }

    if (selectedDate < currentDate) {
      setError((prevErrors) => ({ ...prevErrors, dateErr: '*Date can only be today or any future date' }));
      hasError = true;
    }

    // Proceed if there are no errors
    if (!hasError) {
      navigate('/bookings/select/vehicles', { state: formData });
    }
  };

  return (
    <>
      <div className="container">
        <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
          {locationsFrom && locationsFrom.length > 0 ? (
            <SelectInput
              name="origin"
              label="Travelling From:"
              containerClassName="mb-4"
              labelClassName="form-label mb-0 text-muted fw-medium"
              className="booking-form"
              value={formData.origin}
              onChange={handleFormDataChange}
            >
              <option value="">Select A City</option>
              {locationsFrom.map((locationFrom) => (
                <option key={locationFrom.id} value={locationFrom.id}>
                  {locationFrom.location} ({locationFrom.name})
                </option>
              ))}
            </SelectInput>
          ) : null}

          {locationsTo && locationsTo.length > 0 ? (
            <SelectInput
              name="destination"
              label="Travelling To:"
              containerClassName="mb-4"
              labelClassName="form-label mb-0 text-muted fw-medium"
              className="booking-form"
              value={formData.destination}
              onChange={handleFormDataChange}
            >
              <option value="">Select A City</option>
              {locationsTo.map((locationTo) =>
                formData.origin !== locationTo.id ? (
                  <option key={locationTo.id} value={locationTo.id}>
                    {locationTo.location} ({locationTo.name})
                  </option>
                ) : null
              )}
            </SelectInput>
          ) : null}

          {error.locationErr && (
            <Error className="text-danger mb-4" message={error.locationErr} />
          )}

          <SelectInput
            name="type"
            label="Type of Vehicle"
            containerClassName="mb-4"
            labelClassName="form-label mb-0 text-muted fw-medium"
            className="booking-form"
            value={formData.type}
            onChange={handleFormDataChange}
          >
            <option value="">Select Type</option>
            {vehicles && vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.tag}>
                  {vehicle.name} ({vehicle.description})
                </option>
              ))
            ) : (
              <option disabled>No vehicles available</option>
            )}
          </SelectInput>

          <TextInput
            containerClassName="mb-4"
            className="booking-form"
            name="no_of_seats"
            type="number"
            label="Number Of Seats"
            labelClassName="form-label mb-0 text-muted fw-medium"
            value={formData.no_of_seats}
            onChange={handleFormDataChange}
          />

          <CalendarInput
            label="Departure Date"
            labelClassName="form-label mb-0 text-muted fw-medium"
            containerClassName="mb-4"
            className="booking-form"
            value={traveldate}
            onChange={handleDateChange}
          />

          {error.dateErr && (
            <Error className="text-danger mb-2" message={error.dateErr} />
          )}

          <div className="d-flex justify-content-end">
            <Button
              btnName="Continue"
              className="red-btn"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default DirectBookingForm;
