import React, { useState, useEffect } from 'react';
import FeaturesModal from '../../Modals/FeaturesModal/FeaturesModal';

const Features = (props) => {
  const { phone, carouselType } = props;
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleFeatures = () => {
    setShowFeaturesModal(true);
  };

  const handleCloseFeatures = () => {
    setShowFeaturesModal(false);
  };

  useEffect(() => {
    // Fetch color scheme
    const getTheme = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(getTheme.matches ? 'dark' : 'light');
    getTheme.addEventListener('change', () => setTheme(getTheme.matches ? 'dark' : 'light')); // watch for changes
    return () => getTheme.removeEventListener('change', () => setTheme(getTheme.matches ? 'dark' : 'light'));
  }, []);

  const lightIcon = 'https://img.icons8.com/material-outlined/24/ffffff/true-false.png';
  const darkIcon = 'https://img.icons8.com/material-outlined/24/true-false.png';

  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      {phone.featuresCheck ? (
        <div className='surface__header'>
          <h3>Features</h3>
          <img
            className='features-check-btn'
            onClick={() => handleFeatures()}
            src={theme === 'light' ? darkIcon : lightIcon}
            alt='features-check-btn'
          />
        </div>
      ) : (
        <h3>Features</h3>
      )}
      {carouselType === 'mini' ? (
        <h6 className='phone-title-text'>&mdash; {phone.name} &mdash;</h6>
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
        <h6 className='phone-title-text'>&mdash; {phone.name} &mdash;</h6>
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
