import React from 'react';
import { Button } from 'react-bootstrap';

const ComparePhone2 = () => {
  let companiesArr = ['apple', 'asus', 'google', 'nothing', 'oneplus', 'samsung'];

  const handleCompanyBtn = (e) => {

  }
  return (
    <div>
      <h2>Choose a phone to compare</h2>
      {companiesArr.map(company => (
        <Button onClick={handleCompanyBtn}>{company}</Button>
      ))}
    </div>
  );
}

export default ComparePhone2;
