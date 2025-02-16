import React, { Component } from 'react';
import HStackCompare from './HStackCompare';

class CompareDisplay extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Display';
    const data = [
      {
        title: phone.foldable ? ' Main display size (inner)' : 'Display size',
        phone_data: phone.foldable
          ? phone.display.innerSize
          : phone.display.size,
      },
      {
        title: phone.foldable
          ? 'Main display resolution (inner)'
          : 'Display resolution',
        phone_data: phone.foldable ? phone.display.innerRes : phone.display.res,
      },
      {
        title: phone.foldable ? 'Main display (inner)' : 'Display',
        phone_data: phone.foldable
          ? `${phone?.display?.innerDef ? phone.display.innerDef : ''}
            ${phone.display.innerType}`
          : `${phone?.display?.def ? phone.display.def : ''}
            ${phone.display.type}`,
      },
      {
        title: phone.foldable ? 'Cover display size (outer)' : null,
        phone_data: phone.foldable ? phone.display.outerSize : null,
      },
      {
        title: phone.foldable ? 'Cover display resolution (outer)' : null,
        phone_data: phone.foldable ? phone.display.outerRes : null,
      },
      {
        title: phone.foldable ? 'Cover display (outer)' : null,
        phone_data: phone.foldable
          ? `${phone?.display?.outerDef ? phone.display.outerDef : ''}
            ${phone.display.outerType}`
          : null,
      },
      {
        title: 'Aspect ratio',
        phone_data: phone.aspectRatio,
      },
      {
        title: 'Brightness',
        phone_data: phone.brightness ? phone.brightness : null,
      },
    ];
    return (
      <HStackCompare phone={phone} title={title} data={data} />
    );
  }
}

export default CompareDisplay;
