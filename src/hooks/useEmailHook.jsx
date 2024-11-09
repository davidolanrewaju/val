import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerProfile } from '../reducers/customer/myProfileSlice';

export const useEmailHook = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const data = useSelector((state) => state.myProfile.customerProfile);

  const customerDetails = data?.['user profile'];
  const email = customerDetails?.email;

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerProfile());
    }
  }, [dispatch, token]);

  return email;
};
