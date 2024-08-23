import React from 'react';

const ColorsAndDisplay = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Display</h3>
      {carouselType === 'mini' ? (<h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>) : null}
      <div className='display blue-text gray-bubble'>
        {/* <h4>Display</h4> */}
        {!phone.foldable ? (
          <p><span>Display: </span>{phone.display}</p>
        ) :
          <>
            <p><span>Main display: </span>{phone.openDisplay}</p>
            <p><span>Cover display: </span>{phone.closedDisplay}</p>
          </>
        }
        <div>
          <p><span>Aspect ratio: </span>{phone.aspectRatio}</p>
          {phone.brightness && <p><span>Brightness: </span>{phone.brightness}</p>}
        </div>
      </div>
    </>
  );
};

export default ColorsAndDisplay;
