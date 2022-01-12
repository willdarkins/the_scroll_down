// decoding the tokens
const jwt = require('jsonwebtoken');

// collecting user data hopefully
class AuthSevice {
    getProfile() {
        return decode(this.Token());
    }
}

// seeing if the user is logged in
loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
}

isTokenExpired(token) {
    try {
        const decoded = decode (token);
        if (devoded.exp <Date.now()/ 1000) {
            return true;
        } else return false;
    } catch (err) {
        return false
    }
}

getToken() {
    return localStorage.getItem('id_token');
}

login (idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
}

logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
}

export default new AuthService();