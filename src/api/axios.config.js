import axios from 'axios'

// Set base url used for REST requests
axios.defaults.baseURL = 'http://localhost:8083'

/**
 * Use this axios instance for REST requests, import it where is needed
 */
export default axios
