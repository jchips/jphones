import React from 'react';

const Display = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Display</h3>
      {carouselType === 'mini' ? (<h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>) : null}
      <div className='display blue-text gray-bubble scrollable'>
        {!phone.foldable ? (
          <>
            <p><span className='display-size'>{phone.display.size}</span>, {phone.display.res}</p>
            <p>{phone.display.type}</p>
          </>
        ) :
          <div className='foldable-display'>
            <h5 style={{ marginTop: '5px' }}>Main</h5>
            <p><span className='display-size'>{phone.display.innerSize}</span>, {phone.display.innerRes}</p>
            <p>{phone.display.innerType}</p><hr />
            <h5>Cover</h5>
            <p><span className='display-size'>{phone.display.outerSize}</span>, {phone.display.outerRes}</p>
            <p>{phone.display.outerType}</p><hr />
          </div>
        }
        <div>
          <p><span>Aspect ratio: </span>{phone.aspectRatio}</p>
          {phone.brightness && <p><span>Brightness: </span>{phone.brightness}</p>}
        </div>
      </div>
    </>
  );
};

export default Display;
