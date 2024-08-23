import React from 'react';
import parse from 'html-react-parser';

const Approbations = (props) => {
  const { phone, carouselType } = props;
  return (
    <>
      {carouselType === 'wide' ? <h2>{phone.name}</h2> : null}
      <h3>Approbations</h3>
      {carouselType === 'mini' ? <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6> : null}
      <section className="approbations">
        <ul>
          {phone.approbations.map((approbation, index) =>
            <li key={index} className='gray-bubble'>{parse(approbation)}</li>
          )}
        </ul>
      </section>
    </>
  );
}

export default Approbations;
