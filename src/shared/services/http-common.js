//axios default configs

import axios from "axios";

const http = axios.create({

    baseURL: 'http://localhost:3000/api/v1',
    headers: {'Content-type': 'applications/json'}

});

export default http;

