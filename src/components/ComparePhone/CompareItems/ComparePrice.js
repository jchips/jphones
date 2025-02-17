import React, { Component } from 'react';
import HStackCompare from './HStackCompare';

class ComparePrice extends Component {
  render() {
    const { phone } = this.props;
    const title = 'Retail Price';
    const prices = phone.prices.map(priceItem => ({
      title: priceItem.storage,
      phone_data: priceItem.price,
    }))
    const data = [
      ...prices,
      {
        title: 'Buy Now',
        phone_link: phone.buyLink,
      }
    ];

    return (
      <HStackCompare phone={phone} title={title} data={data} />
    );
  }
}

export default ComparePrice;
