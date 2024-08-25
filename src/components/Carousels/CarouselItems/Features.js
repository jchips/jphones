import React from 'react'

const Features = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Features</h3>
      {carouselType === 'mini' ? <h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6> : null}
      <div className='phones-features scrollable'>
        <ul>
          {phone.phoneFeatures.map((feature, index) =>
            <li key={index}>{feature}</li>
          )}
        </ul>
      </div>
    </>
  )
}

const CameraFeatures = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Cameras - Features</h3>
      {carouselType === 'mini' ? <h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6> : null}
      <section className='scrollable'>
        <ul>{phone.cameraFeatures.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
      </section>
    </>
  )
}

export { Features, CameraFeatures };
