import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Specs = (props) => {
  const { phone, mmToggle } = props;
  return (
    <>
      <h3>Phone specs</h3>
      <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
      <div className="scrollable">
        <p style={{ marginTop: '0px' }}><span>UI: </span>{phone.ui}</p><hr />
        {!phone.foldable && (<p><span>Size: </span>{mmToggle ? phone.size_mm : phone.size}</p>)}
        {phone.foldable && (<p><span>Main size: </span>{mmToggle ? phone.openSize_mm : phone.openSize}</p>)}
        {phone.foldable && (<p><span>Cover size: </span>{mmToggle ? phone.closedSize_mm : phone.closedSize}</p>)}
        <p><span>Weight: </span>{phone.weight}</p><hr />
        <p><span>Battery: </span>{phone.battery}</p>
        <p><span>Charging: </span>{phone.charging}</p><hr />
        <p><span>Ram: </span>{phone.ram}</p>
        <p><span>Chipset: </span>{phone.chipset}</p><hr />
        <p><span>Capacity: </span>{phone.capacity}</p>
      </div>
    </>
  );
}

const WideSpecs = (props) => {
  const { phone, mmToggle } = props;
  return (
    <>
      <h2>{phone.name}</h2>
      <div className="mobile-scrollable scrollable">
        <ListGroup variant='flush'>
          <ListGroup.Item><p><span>UI: </span>{phone.ui}</p></ListGroup.Item>
          {!phone.foldable && (<ListGroup.Item><p><span>Size: </span>{mmToggle ? phone.size_mm : phone.size}</p></ListGroup.Item>)}
          {phone.foldable && (<ListGroup.Item style={{ padding: "5px" }}>
            <p>
              <span>Size: </span>
              <span className="foldable">Main: </span>{mmToggle ? phone.openSize_mm : phone.openSize}
              <span className="foldable">, Cover: </span>{mmToggle ? phone.closedSize_mm : phone.closedSize}
            </p>
          </ListGroup.Item>)}
          <ListGroup.Item><p><span>Build: </span>{phone.build}</p></ListGroup.Item>
          <ListGroup.Item>
            <p><span>Battery: </span>{phone.battery}</p>
            <p><span>Charging: </span>{phone.charging}</p>
          </ListGroup.Item>
          <ListGroup.Item><p><span>Ram: </span>{phone.ram}</p></ListGroup.Item>
          <ListGroup.Item><p><span>Capacity: </span>{phone.capacity}</p></ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}

export { Specs, WideSpecs };
