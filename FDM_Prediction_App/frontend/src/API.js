import axios from "axios";

class API {
    getPrediction(formData) {
        return axios.post('http://127.0.0.1:5000/predict', formData);
    }
}

export default new API()