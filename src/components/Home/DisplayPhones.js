import React from 'react';
import Row from '../Row/Row';
import './DisplayPhones.scss';

class DisplayPhones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: ['Google', 'Samsung S', 'Apple', 'OnePlus', 'Foldable', 'Nothing', 'Budget']
    };
    this.year = 2024;
  }

  /**
   * Gets the first word in the title of the row.
   * @param {String} rowTitle - The title of the row.
   * @returns {String} - The first word in the title of the row.
   */
  getLogoTitle = (rowTitle) => {
    let array = rowTitle.split(' ');
    return array[0];
  };

  /**
   * Returns all phones with applied settings, filters, and search queries.
   * @param {String} rowTitle - The title of the row to display phones in.
   * @param {String} searchValue - The phone the user searched for (in lower case).
   * @returns {Object[]} - An array of either all the phones or just current phones.
   */
  determineData = (rowTitle, searchValue, showAll) => {
    const { filters, data } = this.props;
    let activeFilters = filters.filter((filter) => filter.checked).map((filter) => filter.title);
    // gets only the matching row's data and puts it in new array
    let dataArray = data.filter(rowData => rowData.name.includes(rowTitle));

    let rowData = dataArray[0].rowData;
    let search = searchValue.split(' ');
    if (activeFilters.length) {
      if (activeFilters.find(filter => filter === 'Foldable')) {
        rowData = rowData.filter((phone) => phone.foldable);
      }

      // Cost filters
      if (activeFilters.find(filter => filter === '$500 or less')) {
        rowData = rowData.filter((phone) => {
          const getNum = phone.prices[0].price.match(/\d+/g)[0];
          return phone.prices && getNum <= 500
        })
      }
      if (activeFilters.find(filter => filter === 'Less than $1000')) {
        rowData = rowData.filter((phone) => {
          const getNum = phone.prices[0].price.match(/\d+/g)[0];
          return phone.prices && getNum < 1000
        })
      }
      if (activeFilters.find(filter => filter === '>$1000')) {
        rowData = rowData.filter((phone) => {
          const getNum = phone.prices[0].price.match(/\d+/g)[0];
          return phone.prices && getNum >= 1000
        })
      }

      // Year filters (2020 - 2026)
      if (activeFilters.find(filter => filter.match(/\d+/g))) {
        let yearFilter = []; // all filtered years
        if (activeFilters.find(filter => filter === '2026')) {
          let rows = rowData.filter((phone) => phone.year === 2026);
          yearFilter.push(...rows);
        }
        if (activeFilters.find(filter => filter === '2025')) {
          let rows = rowData.filter((phone) => phone.year === 2025);
          yearFilter.push(...rows);
        }
        if (activeFilters.find(filter => filter === '2024')) {
          let rows = rowData.filter((phone) => phone.year === 2024);
          yearFilter.push(...rows)
        }
        if (activeFilters.find(filter => filter === '2023')) {
          let rows = rowData.filter((phone) => phone.year === 2023);
          yearFilter.push(...rows)
        }
        if (activeFilters.find(filter => filter === '2022')) {
          let rows = rowData.filter((phone) => phone.year === 2022);
          yearFilter.push(...rows)
        }
        if (activeFilters.find(filter => filter === '2021')) {
          let rows = rowData.filter((phone) => phone.year === 2021);
          yearFilter.push(...rows)
        }
        if (activeFilters.find(filter => filter === '2020')) {
          let rows = rowData.filter((phone) => phone.year === 2020);
          yearFilter.push(...rows)
        }
        rowData = yearFilter
      }

      rowData = rowData.filter((phone) => activeFilters.includes(this.determinePhoneFilter(phone, rowTitle)))
    }
    if (this.props.displayAllPhones === true) {
      return rowData.filter((phone) =>
        this.searchPattern(search).test(phone.offName.toLowerCase())
      );
    } else if (!this.props.displayAllPhones && showAll) {
      return rowData.filter((phone) =>
        this.searchPattern(search).test(phone.offName.toLowerCase())
      );
    } else {
      return rowData
        .filter((phone) => parseInt(phone.year) >= this.year) // 2 years recent filter
        .filter((phone) =>
          this.searchPattern(search).test(phone.offName.toLowerCase()) // search filter
        );
    }
  };

  /**
   * Determines whether the current filters applies to `phone` based on the
   * phone's official name.
   * @param {Object} phone - A phone item.
   * @param {String} rowTitle - The title of the current row.
   * @returns {String} - The selected active filter.
   */
  determinePhoneFilter = (phone, rowTitle) => {
    const phoneName = phone.offName;
    if (phoneName.includes('Samsung')) {
      return 'Samsung';
    } else if (phoneName.includes('OnePlus')) {
      return 'OnePlus';
    } else if (phoneName.includes('Nothing')) {
      return 'Nothing';
    } else if (phoneName.includes('Google')) {
      return 'Google';
    } else if (phoneName.includes('Apple')) {
      return 'Apple';
    } else if (phoneName.includes('Motorola')) {
      return 'Motorola';
    } else {
      return rowTitle;
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
  };

  render() {
    const { rows } = this.state;
    return (
      <>
        {/* Creates a row with a scrollbar for each row title in rows[] */}
        {rows
          ? rows.map((row, index) => (
            <Row
              key={index}
              rowTitle={row}
              determineData={this.determineData}
              getLogoTitle={this.getLogoTitle}
              searchValue={this.props.searchValue}
              mmToggle={this.props.mmToggle}
              index={index}
            />
          ))
          : null}
      </>
    );
  }
}

export default DisplayPhones;
