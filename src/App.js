import React from "react";
import './styles/index.scss';
import DisplayOptionsForm from "./components/DisplayOptionsForm";
import pixelData from "./json/pixel-data.json";
import samsungData from "./json/samsung-data.json";
import DisplayPhones from "./pages/DisplayPhones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllPhones: false,
      data: [{name: 'pixel', rowData: pixelData}, {name: 'samsung', rowData: samsungData}]
    }
  }

  /**
   * Sets the displayAllPhones state to true or false depending on which display the user wants to see.
   * @param {String} page - whichever radio button value the user selects (from DisplayOptionsForm.js)
   */
  display = (page) => {
    this.setState({displayAllPhones: page !== 'currentPhones' ? true : false})
  }

  render() {
    return(
      <>
        <DisplayOptionsForm display={this.display}/>
        {/* {this.state.displayAllPhones ? <AllPhones data={this.state.data}/> : <CurrentPhones data={this.state.data}/>} */}
        <DisplayPhones data={this.state.data} displayAllPhones={this.state.displayAllPhones} />
      </>
    )
  }
}

export default App;
