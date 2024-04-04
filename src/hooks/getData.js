import axios from 'axios';

/**
 * Fetches all phone data from the JPhones API for requested brand.
 * @param {String} route - The slug for the phone data being requested (i.e. iphones, pixels...)
 * @returns {Object} - Phone data.
 */
const getData = async (route) => {
  try {
    let requestUrl = `${process.env.REACT_APP_SERVER}/jphones/${route}`;
    let response = await axios.get(requestUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getData;