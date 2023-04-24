import React from "react";
import './styles/index.scss';
// import './styles/Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOptionsForm from "./components/DisplayOptionsForm"
import pixelData from "./json/pixel-data.json"
import samsungData from "./json/samsung-data.json"
import CurrentPhones from "./pages/CurrentPhones";
import Apple from "./pages/Apple";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllPhones: false,
      // data: [pixelData, samsungData]
      data: [{name: 'pixel', rowData: pixelData}, {name: 'samsung', rowData: samsungData}]
    }
  }

  display = (page) => {
    this.setState({displayAllPhones: page !== 'currentPhones' ? true : false})
  }
  render() {
    return(
      <>
        <DisplayOptionsForm display={this.display}/>
        {this.state.displayAllPhones ? <Apple pixelData={this.state.data}/> : <CurrentPhones pixelData={this.state.data}/>}
      </>
    )
  }
}

export default App;
