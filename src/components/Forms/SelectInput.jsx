/* eslint-disable react/prop-types */
const SelectInput = (props) => {
  const { name } = props;
  const { label } = props;
  const { value } = props;
  const { labelClassName } = props;
  const { containerClassName } = props;
  const { className } = props;
  const { onChange } = props;
  const { style } = props;
  const options = props.children;

  return (
    <>
      <div className={containerClassName}>
        <label className={labelClassName} style={{ fontSize: '18px' }}>{label}</label>
        <select style={style} className={className} name={name} onChange={onChange} value={value} required>
          {options}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
