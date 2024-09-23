import React, { useState } from 'react';
import FeaturesModal from '../../FeaturesModal/FeaturesModal';

const Features = (props) => {
  const { phone, carouselType } = props;
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  const handleFeatures = () => {
    setShowFeaturesModal(true);
  };

  const handleCloseFeatures = () => {
    setShowFeaturesModal(false);
  };
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      {phone.featuresCheck ? (
        <div className='bubble-header'>
          <h3>Features</h3>
          <img
            className='features-check-btn'
            onClick={() => handleFeatures()}
            src='https://img.icons8.com/material-outlined/24/true-false.png'
            alt='features-check-btn'
          />
        </div>
      ) : (
        <h3>Features</h3>
      )}
      {carouselType === 'mini' ? (
        <h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>
      ) : null}
      <div className='phones-features scrollable'>
        <ul>
          {phone.phoneFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      {phone.featuresCheck && (
        <FeaturesModal
          phoneName={phone.name}
          featuresCheckData={phone.featuresCheck}
          showFeaturesModal={showFeaturesModal}
          handleCloseFeatures={handleCloseFeatures}
        />
      )}
    </>
  );
};

const CameraFeatures = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Cameras - Features</h3>
      {carouselType === 'mini' ? (
        <h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>
      ) : null}
      <section className='scrollable'>
        <ul>
          {phone.cameraFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export { Features, CameraFeatures };
