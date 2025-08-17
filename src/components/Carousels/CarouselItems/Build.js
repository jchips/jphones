import React from 'react';

// This slide is only in the mini carousels
const Build = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Colors & Build</h3>
      {carouselType === 'mini' ? (<h6 className='phone-title-text'>&mdash; {phone.name} &mdash;</h6>) : null}
      <div className='build-slide'>
        <div className='build surface-text--rg--blue surface'>
          <h4>Build</h4>
          {phone.build ? (
            <>
              <p><span>Front: </span>{phone.build.front}</p>
              <p>
                <span>Back: </span>{phone.build.back}{' '}
                {phone.build.back_texture && (
                  <>
                    {phone.build.back_texture.length > 6 && phone.build.back.length > 16 ? <br /> : null}
                    <span className='texture'>({phone.build.back_texture})</span>
                  </>
                )}
              </p>
              <p>
                <span>Frame: </span>{phone.build.frame}{' '}
                {phone.build.frame_texture && <span className='texture'>({phone.build.frame_texture})</span>}
              </p>
              {phone.build.hinge && <p><span>Hinge: </span>{phone.build.hinge}</p>}
            </>
          ) :
            <p>{phone.build}</p>
          }
        </div>
        <div className='colors surface'>
          <h4>Colors</h4>
          <ul>
            {phone.colors.map((phoneColor, index) =>
              <div className='phone-color' key={index}>
                {phoneColor.tag && (
                  <div className={`phone-color-item ${phoneColor.tag}`}></div>
                )}
                <li>{phoneColor.color}</li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Build;
