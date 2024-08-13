//import axios from "axios";
import { API_URL, USER_STORAGE_NAME } from "../constants/config"
import React from "react";

class AuthService extends React.Component {

    static login(username, password) {
        //Check the incoming data
        try {
            if (username === "adm_nsw" && password === "aalansw*3") {   //Use the Dummy Data for the demo purpose. 
                const UserData = { 'username': 'adm_nsw', 'Name': 'Athar Mehmood' };
                localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(UserData));

                return UserData;
            }
            else {
                throw new Error('Invalid Username or Password!');
            }
        } catch {
            throw new Error('Invalid Username or Password!');
        }



        //Open it for the dynamic API Calls....
        // return axios
        //     .post(API_URL + "signin", {
        //         username,
        //         password,
        //     })
        //     .then((response) => {
        //         if (response.data.accessToken) {
        //             localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(response.data));
        //         }

        //         return response.data;
        //     });
    }

    static logout() {
        localStorage.removeItem(USER_STORAGE_NAME);
    };

}

export default AuthService;