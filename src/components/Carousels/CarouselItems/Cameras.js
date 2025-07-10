import React, { useState } from 'react';
import CameraModal from '../../Modals/CameraModal/CameraModal';

const Cameras = (props) => {
  const { phone, carouselType } = props
  const [showCameraDetailsModal, setShowCameraDetailsModal] = useState(false)

  const handleCameraDetails = () => {
    setShowCameraDetailsModal(true)
  }

  const handleCloseCameraDetails = () => {
    setShowCameraDetailsModal(false)
  }

  const telephotoOptZoom = phone?.cameraDetails?.rearCameras?.telephoto?.opt_zoom
  const macroOptZoom = phone?.cameraDetails?.rearCameras?.macro?.opt_zoom
  const periscopeOptZoom = phone?.cameraDetails?.rearCameras?.periscope?.opt_zoom

  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      {phone.cameraDetails ? (
        <div className='bubble-header'>
          <h3>Cameras</h3>
          <img
            className='camera-details-btn'
            onClick={() => handleCameraDetails()}
            src='https://img.icons8.com/material-outlined/24/bulleted-list.png'
            alt='camera-details-btn'
          />
        </div>
      ) : (
        <h3>Cameras</h3>
      )}
      {carouselType === 'mini' ? (
        <h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>
      ) : null}
      <div id='rear-cameras' className='cameras gray-bubble'>
        <h4>Rear Cameras:</h4>
        <p><span>Primary: </span>{phone.rearCameras.primary}</p>
        {phone.rearCameras.ultrawide && (
          <p><span>Ultrawide: </span> {phone.rearCameras.ultrawide}</p>
        )}
        {phone.rearCameras.telephoto && (
          <p><span>Telephoto: </span> {phone.rearCameras.telephoto}
            {' '}
            {telephotoOptZoom && `(${telephotoOptZoom})`}
          </p>
        )}
        {phone.rearCameras.periscope && (
          <p><span>Periscope: </span> {phone.rearCameras.periscope}
            {' '}
            {periscopeOptZoom && `(${periscopeOptZoom})`}
          </p>
        )}
        {phone.rearCameras.macro && (
          <p><span>Macro: </span> {phone.rearCameras.macro}
            {' '}
            {macroOptZoom && `(${macroOptZoom})`}
          </p>
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
      {phone.cameraDetails && (
        <CameraModal
          phoneName={phone.name}
          cameraDetails={phone.cameraDetails}
          showCameraDetailsModal={showCameraDetailsModal}
          handleCloseCameraDetails={handleCloseCameraDetails}
        />
      )}
    </>
  )
}

export default Cameras;
