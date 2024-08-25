/**
 * Toggles the mm/in switch.
 * @param {Component} comp - An instance of a class component.
 */
const setMMToggle = (comp) => {
  comp.setState({ mmToggle: !comp.state.mmToggle });
};

export default setMMToggle;
