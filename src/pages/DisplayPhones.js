import React from "react";
import Row from "../components/sub-components/Row";
import "../styles/DisplayPhones.scss";

class DisplayPhones extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      // rows: ['pixel', 'samsung', 'apple', 'oneplus', 'huawei', 'budget', 'foldable']
      rows: ['pixel', 'samsung s']
    }
  }

  /**
   * Gets the first word in the title of the row
   * @param {String} row - The title of the row
   * @returns {String} - The first word in the title of the row
   */
  getRowTitle = (row) => {
    let array = row.split(" ");
    console.log('array', array);
    return array[0];
  }

  /**
   * Sends only phones for the matching row that are current (released in 2021 or sooner).
   * @param {String} row - The title of the row I want to display phones in.
   * @returns {Array} - An array of either all the phone or just the current phones.
   */
  determineData = (row) => {
    let dataArray = this.props.data.filter(rowData => rowData.name.includes(row));
    if (this.props.displayAllPhones === true) {
      return dataArray[0].rowData;
    } else {
      return dataArray[0].rowData.filter(phone => parseInt(phone.year) >= 2021);
    }
  }

  render() {
    return(
      <>
        {/* Creates a row with a scroll thing for each row title in rows[] */}
        {this.state.rows.map((row, index) => 
          <section key={index}>
            {/* Labels row and puts photo next to each title */}
            <div className="row-header">
              <h2>{row} phones</h2>
              <img src={`assets/imgs/logos/${this.getRowTitle(row)}-logo.webp`} alt={`${this.getRowTitle(row)} logo`}/>
            </div>
            <Row data={this.determineData(this.getRowTitle(row))}/>
          </section>
        )}
      </>
    )
  }
}

export default DisplayPhones;