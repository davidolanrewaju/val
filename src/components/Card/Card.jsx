/* eslint-disable react/prop-types */
const Card = (props) => {
  const content = props.children;
  const { header, body, headerClassName, bodyClassName, contentClassName, imgURL } = props;

  return (
    <>
      <div className="col-sm-12 col-lg-4" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="row align-items-center">
          <div className="d-flex justify-content-center pb-2">
            <img src={imgURL} alt="image" style={{ height: '100px' }} />
          </div>
          <div>
              <p className={contentClassName}>{content}</p>
            </div>
          <div className="text-center self-start mt-3 md:-mt-3 lg:mt-0">
            <h6 className={headerClassName}>{header}</h6>
            <p className={bodyClassName} style={{ color: '#F82827' }}>{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
