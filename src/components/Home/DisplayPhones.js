import React from 'react';
import Row from '../Row/Row';
import rows from '../../json/rows.json';
import './DisplayPhones.scss';

// Props (from index.js): {
//   data,
//   searchValue,
//   mmToggle,
//   displayAllPhones
// }

class DisplayPhones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: ['Pixel', 'Samsung S', 'Apple', 'OnePlus', 'Foldable', 'Nothing', 'Budget'],
      rowsUpdate: rows,
      showAll: [],
    }
    this.year = 2023;
  }

  /**
   * Gets the first word in the title of the row.
   * @param {String} rowTitle - The title of the row.
   * @returns {String} - The first word in the title of the row.
   */
  getLogoTitle = (rowTitle) => {
    let array = rowTitle.split(' ');
    return array[0];
  }

  /**
   * Returns either all phones in matching row or only phones for the matching row that
   * are current (released in 2022 or sooner) depending on what the user selected to view.
   * If the user entered a search, it only returns the phones from above that match
   * the search.
   * @param {String} rowTitle - The title of the row to display phones in.
   * @param {String} searchValue - The phone the user searched for (in lower case).
   * @returns {Object[]} - An array of either all the phone or just the current phones.
   */
  determineData = (rowTitle, searchValue, showAll) => {
    let dataArray = this.props.data.filter(rowData => rowData.name.includes(rowTitle)); // gets only the matching row's data and puts it in new array
    let search = searchValue.split(' ');
    if (this.props.displayAllPhones === true) {
      return dataArray[0].rowData.filter(phone => this.searchPattern(search).test(phone.offName.toLowerCase()));
    } else if (!this.props.displayAllPhones && showAll) {
      return dataArray[0].rowData.filter(phone => this.searchPattern(search).test(phone.offName.toLowerCase()));
    } else {
      return dataArray[0].rowData
        .filter(phone => parseInt(phone.year) >= this.year)
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
    /**
     * If the last word contains an '+', replace it with 'plus'.
     * Ex: 'Galaxy S21+' ----> 'galaxy s21 plus'
     */
    if (search[search.length - 1].includes('+')) {
      let stuffBeforePlus = search[search.length - 1].split('+')[0]; // 'S21'
      search.pop();
      search.push(stuffBeforePlus);
      search.push('plus');
    }

    let pattern = new RegExp(`.*(${search.join('.*')}).*`, 'gm');
    return pattern;
  }

  /**
   * Changes of the state of the row's display toggle.
   * @param {Event} e - Toggle event.
   * @param {String} rowTitle - The title of the row to display phones in.
   */
  handleRowDisplay = (e, rowTitle) => {
    if (e.target.checked) {
      this.setState({ showAll: [...this.state.showAll, rowTitle] });
    } else {
      this.setState({})
    }
  }

  render() {
    return (
      <>
        {/* Creates a row with a scrollbar for each row title in rows[] */}
        {this.state.rowsUpdate.map((row, index) =>
          <Row
            rowTitle={row.title}
            determineData={this.determineData}
            getLogoTitle={this.getLogoTitle}
            searchValue={this.props.searchValue}
            mmToggle={this.props.mmToggle}
            index={index}
          />
        )}
      </>
    )
  }
}

export default DisplayPhones;
