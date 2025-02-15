import React, { Component } from 'react';
import HStackCompare from './HStackCompare';

class CompareSpecs extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Specs';
    const data = [
      {
        title: 'UI / OS',
        phone_data: phone.ui === phone.os || phone.ui.includes('Stock')
          ? phone.ui
          : `${phone.ui} / ${phone.os}`,
      },
      {
        title: phone.foldable ? 'Main size (in)' : 'Size (in)',
        phone_data: phone.foldable ? phone.openSize : phone.size,
      },
      {
        title: phone.foldable ? 'Cover size (in)' : null,
        phone_data: phone.foldable ? phone.closedSize : null,
      },
      {
        title: phone.foldable ? 'Main size (mm)' : 'Size (mm)',
        phone_data: phone.foldable ? phone.openSize_mm : phone.size_mm,
      },
      {
        title: phone.foldable ? 'Cover size (mm)' : null,
        phone_data: phone.foldable ? phone.closedSize_mm : null,
      },
      {
        title: 'Weight',
        phone_data: phone.weight
      },
      {
        title: 'Battery',
        phone_data: phone.battery
      },
      {
        title: 'Charging',
        phone_data: phone.charging
      },
      {
        title: 'Ram',
        phone_data: phone.ram
      },
      {
        title: 'Chipset',
        phone_data: phone.chipset
      },
      {
        title: 'Capacity',
        phone_data: phone.capacity
      },
    ]
    return (
      <HStackCompare phone={phone} title={title} data={data} />
    );
  }
}

export default CompareSpecs;
