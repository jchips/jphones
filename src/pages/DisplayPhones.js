import React from "react";
import Row from "../components/sub-components/Row";
import "../styles/DisplayPhones.scss";

// Props: {
//   data (from app.js),
//   searchValue (from app.js),
//   displayAllPhones (from app.js)
// }

class DisplayPhones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: ['Pixel', 'Samsung S', 'Apple', 'OnePlus', 'Foldable', 'Budget']
    }
  }

  /**
   * Gets the first word in the title of the row.
   * @param {String} row - The title of the row.
   * @returns {String} - The first word in the title of the row.
   */
  getLogoTitle = (row) => {
    let array = row.split(" ");
    return array[0];
  }

  /**
   * Sends either all phones in matching row or only phones for the matching row that
   * are current (released in 2022 or sooner) depending on what user selected to view.
   * If the user entered a search, it only sends the phones from above that match
   * the search.
   * @param {String} row - The title of the row I want to display phones in.
   * @param {String} searchValue - The phone the user searched for (in lower case).
   * @returns {Object[]} - An array of either all the phone or just the current phones.
   */
  determineData = (row, searchValue) => {
    let dataArray = this.props.data.filter(rowData => rowData.name.includes(row)); // gets only matching row's data and puts it in new array
    let search = searchValue.split(' ');
    if (this.props.displayAllPhones === true) {
      return dataArray[0].rowData.filter(phone => this.searchPattern(search).test(phone.offName.toLowerCase()));
    } else {
      return dataArray[0].rowData
        .filter(phone => parseInt(phone.year) >= 2022)
        .filter(phone => this.searchPattern(search).test(phone.offName.toLowerCase()));
    }
  }

  /**
   * Turns the user's search value into a Regex pattern that can search for the phone
   * most efficiently. It searches all the words in each phone's name in order,
   * so the search 'Samsung S21' can find a Galaxy S21.
   * @param {Object[]} search - An array of all the individual words in the user's search.
   * @returns {String} - A Regex pattern to search for the phones.
   */
  searchPattern = (search) => {
    // If the last word contains an '+', replace it with 'plus'.
    // Ex: 'Galaxy S21+' ----> 'galaxy s21 plus'
    if (search[search.length - 1].includes('+')) {
      let stuffBeforePlus = search[search.length - 1].split('+')[0]; // 'S21'
      search.pop();
      search.push(stuffBeforePlus);
      search.push('plus');
    }

    let pattern = new RegExp(`.*(${search.join('.*')}).*`, 'gm');
    return pattern;
  }

  render() {
    return (
      <>
        {/* Creates a row with a scroll thing for each row title in rows[] */}
        {this.state.rows.map((row, index) =>
          <section key={index}>

            {/* Labels row and puts photo next to each title */}
            <div id={row.split(" ").join("-")} className="row-header">
              <h2>{row} Phones</h2>
              <img src={`assets/imgs/logos/${this.getLogoTitle(row)}-logo.webp`} alt={`${this.getLogoTitle(row)} logo`} />
            </div>

            {/* Display row */}
            <Row data={this.determineData(row, this.props.searchValue)} />
          </section>
        )}
      </>
    )
  }
}

export default DisplayPhones;