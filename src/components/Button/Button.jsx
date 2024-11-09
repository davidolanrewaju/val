/* eslint-disable react/prop-types */
const Button = ({ btnName, containerClassName, className, onClick, disabled, style }) => {
  return (
    <>
      <div className={containerClassName}>
        <button disabled={disabled} type="submit" style={ style } onClick={onClick} className={`${className}`}>
          {btnName}
        </button>
      </div>
    </>
  );
};

export default Button;
