const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="position-relative" style={{ width: '9rem', height: '9rem' }}>
        <div className="position-absolute w-100 h-100 rounded-circle spinner-border"></div>
        <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="bg-dark d-flex justify-content-center align-items-center rounded-circle" style={{ width: '8rem', height: '8rem' }}>
            <img className="w-75 pt-2 pe-1" src="/assets/images/logo2.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
