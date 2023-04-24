import React from "react";
import Row from "../components/Row";

class CurrentPhones extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      // rows: ['pixel', 'samsung', 'apple', 'oneplus', 'huawei', 'budget', 'foldable']
      rows: ['pixel', 'samsung']
    }
  }

  /**
   * Sends only phones for the matching row that are current (released in 2021 or sooner).
   * @param {String} row - The title of the row I want to display phones in.
   * @returns {Array} - An array of the current phones.
   */
  determineData = (row) => {
    let dataArray = this.props.pixelData.filter(rowData => rowData.name.includes(row));
    return dataArray[0].rowData.filter(phone => parseInt(phone.Year) >= 2021);
  }

  render() {
    return(
      <>
        {this.state.rows.map(row => 
          <section>
            <h2>{row} phones</h2>
            <Row pixelData={this.determineData(row)}/>
          </section>
        )}
      </>
    )
  }
}

export default CurrentPhones;