import React, { forwardRef } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import parse from 'html-react-parser';

const CameraProsCons = forwardRef((props, ref) => {
  const { phone, handleExpand, carouselType } = props;
  const { cameraProRef, cameraConRef, cameraProExpandBtn, cameraConExpandBtn } = ref;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Cameras - Pros & Cons</h3>
      {carouselType === 'mini' ? (<h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>) : null}
      {phone.cameraPros && (
        <section className='pros-and-cons-bubble gray-bubble'>
          <div className='bubble-header'>
            <h4>Camera Pros:</h4>
            <div ref={cameraProExpandBtn} className='expand-btn__container'>
              <HiOutlineArrowsExpand className='expand-btn' onClick={() => handleExpand('camera pros', phone.cameraPros)} />
            </div>
          </div>
          {/* If there are no camera cons, then make the scrollable div length longer */}
          <div ref={cameraProRef} className={phone.cameraCons ? 'scrollable' : 'scrollable-long'}>
            <ul>{phone.cameraPros.map((pro, index) => <li key={index}>{parse(pro)}</li>)}</ul>
          </div>
        </section>
      )}
      {phone.cameraCons && (
        <section className='pros-and-cons-bubble gray-bubble'>
          <div className='bubble-header'>
            <h4>Camera Cons:</h4>
            <div ref={cameraConExpandBtn} className='expand-btn__container'>
              <HiOutlineArrowsExpand className='expand-btn' onClick={() => handleExpand('camera cons', phone.cameraCons)} />
            </div>
          </div>
          {/* If there are no camera pros, then make the scrollable div length longer */}
          <div ref={cameraConRef} className={phone.cameraPros ? 'scrollable' : 'scrollable-long'}>
            <ul>{phone.cameraCons.map((con, index) => <li key={index}>{parse(con)}</li>)}</ul>
          </div>
        </section>
      )}
    </>
  );
});

export default CameraProsCons;
