import React from 'react';

const Cameras = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Cameras</h3>
      {carouselType === 'mini' ? (<h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>) : null}
      <div id='rear-cameras' className='cameras gray-bubble'>
        <h4>Rear Cameras:</h4>
        <p><span>Primary: </span>{phone.rearCameras.primary}</p>
        {phone.rearCameras.ultrawide && (
          <p><span>Ultrawide: </span> {phone.rearCameras.ultrawide}</p>
        )}
        {phone.rearCameras.telephoto && (
          <p><span>Telephoto: </span> {phone.rearCameras.telephoto}</p>
        )}
        {phone.rearCameras.periscope && (
          <p><span>Periscope: </span> {phone.rearCameras.periscope}</p>
        )}
        {phone.rearCameras.macro && (
          <p><span>Macro: </span> {phone.rearCameras.macro}</p>
        )}
        {phone.rearCameras.secondary && (
          <p><span>Secondary: </span> {phone.rearCameras.secondary}</p>
        )}
      </div>
      <div id='front-cameras' className='cameras gray-bubble'>
        <h4>Front Camera(s):</h4>
        <p><span>Primary: </span>{phone.frontCameras}</p>
        {phone.frontCameras.ultrawide && (
          <p><span>Ultrawide: </span> {phone.frontCameras.ultrawide}</p>
        )}
      </div>
    </>
  )
}

export default Cameras;
