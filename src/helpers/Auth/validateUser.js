import { axiosConnect } from "../axiosConfig";
import Cookies from "universal-cookie";
const cookies = new Cookies();


export const validateUser = async (username, password) =>
await axiosConnect({
    method: "post",
    url: "/validate",
    data: {
        authUsername: username,
        authPassword: password,
    },
})
.then(function (response) {
    // Creating session cookies: user and auth token.
    
			cookies.set("token", response.data.token, {
				path: "/",
				sameSite: true,
				maxAge: 10800,
			});
			cookies.set("user", response.data.user, {
				path: "/",
				sameSite: true,
				maxAge: 10800,
			});

		})
		.catch(function (error) {
			console.log("Error in user validation:");
			console.log(error);
		});
