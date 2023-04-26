// Form code from React.dev - https://react.dev/reference/react-dom/components/input
import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/DisplayOptions.scss';

class DisplayOptionsForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // delete later
    this.setDisplay(formJson);
  }

  setDisplay = (formJson) => {
    if (formJson.displayPhones === 'currentPhones') {
      this.props.display('currentPhones');
    } else {
      this.props.display('allPhones');
    }
  }

  render () {
    return (
      <section className='display-phones-options'>
        <form onSubmit={this.handleSubmit}>
          <legend>Display options:</legend>
          <label><input type="radio" name="displayPhones" value="currentPhones" defaultChecked={true} /> Current phones</label>
          <label><input type="radio" name="displayPhones" value="allPhones" /> All phones</label>
          <Button type="submit" variant="primary">Display</Button>
        </form>
      </section>
    );
  }
}

export default DisplayOptionsForm;