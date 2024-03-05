import React from 'react';
import './styles/index.scss';
import DisplayOptionsForm from './components/DisplayOptionsForm';
import pixelData from './json/pixel-data.json';
import samsungSData from './json/samsung-s-data.json';
import samsungAData from './json/samsung-a-data.json';
import iphoneData from './json/iphone-data.json';
import oneplusData from './json/oneplus-data.json';
import foldableData from './json/foldable-data.json';
import DisplayPhones from './pages/DisplayPhones';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      displayAllPhones: false,
      data: [
        { name: 'Pixel', rowData: pixelData },
        { name: 'Samsung S', rowData: samsungSData },
        { name: 'Samsung A', rowData: samsungAData },
        { name: 'Apple', rowData: iphoneData },
        { name: 'OnePlus', rowData: oneplusData },
        { name: 'Foldable', rowData: foldableData },
      ],
      searchValue: ''
    }
  }

  /**
   * Sets the displayAllPhones state to true or false depending on which display the user wants to see.
   * @param {String} selectedOption - whichever radio button value the user selects (from DisplayOptionsForm.js).
   */
  setDisplay = (selectedOption) => {
    this.setState({ displayAllPhones: selectedOption !== 'currentPhones' ? true : false })
  }

  /**
   * Sets the searchValue state to whatever the user searched for.
   * @param {String} searchValue - The phone the user searched for (in lower case) - (from DisplayOptionsForm.js).
   */
  setSearch = (searchValue) => {
    this.setState({ searchValue });
  }

  // Fetches all the budget phones in the data, sorts them, and adds them to state.
  getBudgetPhones = () => {
    let budgetPhonesArr = [];
    this.state.data.map(dataFile => {
      return dataFile.rowData.filter(phone => {
        return phone.tier === 'budget';
      }).map(phone => budgetPhonesArr.push(phone));
    });
    budgetPhonesArr.sort((a, b) => {
      const date1 = new Date(this.getReleasedDate(a.released));
      const date2 = new Date(this.getReleasedDate(b.released));
      return date2 - date1;
    });
    this.setState({
      data: [
        { name: 'Pixel', rowData: pixelData },
        { name: 'Samsung S', rowData: samsungSData },
        { name: 'Apple', rowData: iphoneData },
        { name: 'OnePlus', rowData: oneplusData },
        { name: 'Foldable', rowData: foldableData },
        { name: 'Budget', rowData: budgetPhonesArr }
      ]
    });
  }

  /**
   * Reformats a phone's release date to a date that new Date can recognize in order to sort.
   * @param {String} released - The release date of the phone (ex: Mar. 4th, 2024 (USA)).
   * @returns {Date} - A Date string (ex: Mar. 4, 2024).
   */
  getReleasedDate = (released) => {
    released = released.split(" ");
    released.pop();
    let pattern = new RegExp(/[^\d]*/, 'gm');
    released[1] = released[1].replace(pattern, '');
    return released.join(" ");
  }

  // Loads the budget phones to display on page
  componentDidMount() {
    this.getBudgetPhones();
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <>
        {!this.state.isLoading && (
          <div>
            <DisplayOptionsForm display={this.setDisplay} setSearch={this.setSearch} />
            <DisplayPhones data={this.state.data} displayAllPhones={this.state.displayAllPhones} searchValue={this.state.searchValue} />
            <section className="company-links">
              {/* Google */}<a href="https://store.google.com/us/category/phones" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/pixel-logo.webp" alt="Google logo" /></a>
              {/* Apple */}<a href="https://www.apple.com/iphone/" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/apple-logo.webp" alt="Apple logo" /></a>
              {/* Samsung */}<a href="https://www.samsung.com/us/mobile/phones/all-phones/" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/samsung-logo.webp" alt="Samsung logo" /></a>
              {/* OnePlus */}<a href="https://www.oneplus.com" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/oneplus-logo.webp" alt="OnePlus logo" /></a>
              {/* Asus */}<a href="https://www.asus.com/us/Phone/" target="_blank" rel="noreferrer"><img src="assets/imgs/logos/asus-logo.webp" alt="Asus logo" style={{ height: 40 }} /></a>
            </section>
          </div>
        )}
      </>
    )
  }
}

export default App;
