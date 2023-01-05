import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// url: "https://tribesofgaia-api.deta.dev/validate",
// url: "http://localhost:5000/validate",

export const axiosConnect = axios.create({
	baseURL: "http://localhost:5000/",
	timeout: 60000,
	headers: {
		"Content-Type": "application/json",
		"authToken": cookies.get("token",{
            doNotParse: true,
        }),
        "currentUser": cookies.get("user")
	},
});
