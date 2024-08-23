import React, { forwardRef } from 'react';

const Build = forwardRef((props, ref) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Colors & Build</h3>
      {carouselType === 'mini' ? (<h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>) : null}
      <div className='build blue-text gray-bubble'>
        <h4>Build</h4>
        <p>{phone.build}</p>
      </div>
      <div ref={ref} className="colors gray-bubble">
        <h4>Colors</h4>
        <ul>
          {phone.colors.map((phoneColor, index) =>
            <div className="phone-color" key={index}>
              {phoneColor.tag && (
                <div className={`color ${phoneColor.tag}`}></div>
              )}
              <li>{phoneColor.color}</li>
            </div>
          )}
        </ul>
      </div>
    </>
  );
})

export default Build;
