import axios from "axios";

/*

// rodar com IPV4: json-server --watch -d 180 --host 10.120.127.42 db.json

*/

const api = axios.create({
    baseURL: "http://10.120.127.42:3000",
});

export default api;