import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerWallet } from '../reducers/customer/customerWalletSlice';

export const useWalletBalance = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const walletBalance = useSelector((state) => state.customerWallet.customerWalletBalance);

  useEffect(() => {
    if (token) {
      dispatch(fetchCustomerWallet());
    }
  }, [dispatch, token]);

  return walletBalance;
};
