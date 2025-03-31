import React, { forwardRef } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import parse from 'html-react-parser';

const ProsAndCons = forwardRef((props, ref) => {
  const { phone, handleExpand, carouselType } = props;
  const { proRef, conRef, proExpandBtn, conExpandBtn } = ref;

  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <div className='pros-and-cons'>
        <h3>Pros and Cons</h3>
        {carouselType === 'mini' ? (<h6 className='phone-title'>&mdash; {phone.name} &mdash;</h6>) : null}
        <section className='pros-and-cons-bubble gray-bubble'>
          <div className='bubble-header'>
            <h4>Pros</h4>
            <div ref={proExpandBtn} className='expand-btn__container'>
              <HiOutlineArrowsExpand className='expand-btn' onClick={() => handleExpand('pros', phone.pros)} />
            </div>
          </div>
          <div ref={proRef} className='scrollable'>
            {phone.pros ?
              <ul>{phone.pros.map((pro, index) => <li key={index}>{parse(pro)}</li>)}</ul>
              : <p className='no-data'>None recorded</p>}
          </div>
        </section>
        <section className='pros-and-cons-bubble gray-bubble'>
          <div className='bubble-header'>
            <h4>Cons</h4>
            <div ref={conExpandBtn} className='expand-btn__container'>
              <HiOutlineArrowsExpand className='expand-btn' onClick={() => handleExpand('cons', phone.cons)} />
            </div>
          </div>
          <div ref={conRef} className='scrollable'>
            {phone.cons ?
              <ul>{phone.cons.map((con, index) => <li key={index}>{parse(con)}</li>)}</ul>
              : <p className='no-data'>None recorded</p>}
          </div>
        </section>
      </div>
    </>
  );
});

export default ProsAndCons;
