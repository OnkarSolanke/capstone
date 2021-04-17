
import axios from "axios";
// import UrlService from "./UrlService";
import CookieService from "./CookieService";
import {API_URL} from 'config';

const expiresAt = 60 * 24;

let credentials =  {
  username : '',
  password : ''
}

class AuthService {
  async doUserLogin(credentials) {
    try {
      const response = await axios.post(API_URL + '/api/login', credentials);
      return response.data;
    } catch (error) {
      console.error("Error", error.response);
      return false;
    }
  }
  handleLoginSuccess(response, remember) {
    if(response.access_token){
      if (!remember) {
        const options = { path: "/" };
        CookieService.set("access_token", response.access_token, options);
        return true;
      }
  
      let date = new Date();
      date.setTime(date.getTime() + expiresAt * 60 * 1000);
      const options = { path: "/", expires: date };
      CookieService.set("access_token", response.access_token, options);
      return true;
    }
    return false;
  }

  isLogedIn(){
   console.log(CookieService.get('access_token'));
    return CookieService.get('access_token') ? true : false;
  }
}

export default new AuthService();
