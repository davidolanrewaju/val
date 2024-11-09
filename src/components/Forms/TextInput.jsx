/* eslint-disable react/prop-types */
const TextInput = (props) => {
  const { name } = props;
  const { label } = props;
  const { span } = props;
  const { spanClassName } = props;
  const { type } = props;
  const { value } = props;
  const { placeholder } = props;
  const { labelClassName } = props;
  const { containerClassName } = props;
  const { className } = props;
  const { onChange } = props;
  const { required } = props;
  const svg = props.children;
  return (
    <>
      <div className={containerClassName}>
        {label && (
          <label className={labelClassName} style={{ fontSize: '18px' }}>
            {label} <span className={spanClassName}> {span}</span>
          </label>
        )}
        <input className={className} name={name} onChange={onChange} type={type} value={value} placeholder={placeholder} required={required} />
        {svg}
      </div>
    </>
  );
};

export default TextInput;
