/* eslint-disable react/prop-types */

const CalendarInput = (props) => {
  const { label } = props;
  const { labelClassName } = props;
  const { containerClassName } = props;
  const { className } = props;
  const { value } = props;
  const { name } = props;
  const { onChange } = props;

  return (
    <>
      <div className={`${containerClassName}`}>
        <label className={labelClassName} style={{ fontSize: '18px' }}>{label}</label>
        <input className={className} type="date" name={name} id="date" value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default CalendarInput;
