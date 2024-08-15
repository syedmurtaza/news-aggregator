import USER_STORAGE_NAME from "../constants/Constants";

export default function AuthHeaderHelper() {
    const user = JSON.parse(localStorage.getItem(USER_STORAGE_NAME));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
        // for Node.js Express back-end
        //return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}
