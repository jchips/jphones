import React, { forwardRef } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import parse from 'html-react-parser';

const ProsAndCons = forwardRef((props, ref) => {
  const { phone, handleExpand, carouselType } = props;
  const { proRef, conRef, proExpandBtn, conExpandBtn } = ref;

  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <div className='pc__section'>
        <h3>Pros and Cons</h3>
        {carouselType === 'mini' ? (<h6 className='phone-title-text'>&mdash; {phone.name} &mdash;</h6>) : null}
        <section className='pc-surface__container surface'>
          <div className='surface__header'>
            <h4>Pros</h4>
            <div ref={proExpandBtn} className='expand-btn__container'>
              <HiOutlineArrowsExpand className='expand-btn' onClick={() => handleExpand('pros', phone.pros)} />
            </div>
          </div>
          <div ref={proRef} className='scrollable'>
            {phone.pros && phone.pros.length > 0 ?
              <ul>{phone.pros.map((pro, index) => <li key={index}>{parse(pro)}</li>)}</ul>
              : <p className='no-data-text'>None recorded</p>}
          </div>
        </section>
        <section className='pc-surface__container surface'>
          <div className='surface__header'>
            <h4>Cons</h4>
            <div ref={conExpandBtn} className='expand-btn__container'>
              <HiOutlineArrowsExpand className='expand-btn' onClick={() => handleExpand('cons', phone.cons)} />
            </div>
          </div>
          <div ref={conRef} className='scrollable'>
            {phone.cons && phone.cons.length > 0 ?
              <ul>{phone.cons.map((con, index) => <li key={index}>{parse(con)}</li>)}</ul>
              : <p className='no-data-text'>None recorded</p>}
          </div>
        </section>
      </div>
    </>
  );
});

export default ProsAndCons;
