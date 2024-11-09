import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../layout/Footer/Footer';
import MiniNav from '../layout/Navbar/MiniNav/MiniNav';
import NavigationBar from '../layout/Navbar/NavigationBar';

import { fetchCustomerWallet } from '../reducers/customer/customerWalletSlice';

const CustomerWallet = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);

  const { loading, customerWallet, customerWalletBalance } = useSelector((state) => state.customerWallet);

  useEffect(() => {
    if (!customerWallet.data && !loading) {
      dispatch(fetchCustomerWallet());
    }
  }, [dispatch, customerWallet.data, loading]);

  const walletData = customerWallet.data;

  return (
    <>
      <NavigationBar />
      <div className="container px-md-5 padding-top">
        {token ? (
          <>
            <MiniNav />
            <h2 className="fw-medium mt-5 mb-4">Wallet</h2>
            <button disabled className="btn btn-outline-success btn-md mb-5">
              Balance: ₦{customerWalletBalance}
            </button>
            <div className="mb-5">
              <p className="my-2 fs-5 fw-medium">Wallet History</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" className="text-secondary">
                        <strong>Date</strong>
                      </th>
                      <th scope="col" className="text-secondary">
                        <strong>Type</strong>
                      </th>
                      <th scope="col" className="text-secondary">
                        <strong>Amount</strong>
                      </th>
                      <th scope="col" className="text-secondary">
                        <strong>Description</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {walletData && walletData.length > 0
                      ? walletData.map((data) => (
                          <tr key={data.id}>
                            <td className="align-top">{data.created_at}</td>
                            <td className={`align-top ${data.type !== 'Debit' ? 'text-success' : 'text-danger'}`}>{data.type}</td>
                            <td className="align-top">{data.amount}</td>
                            <td className="align-top">{data.description}</td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>Something went wrong...Please Try Again</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CustomerWallet;
