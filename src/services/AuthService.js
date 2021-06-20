
import axios from "axios";
// import UrlService from "./UrlService";
import CookieService from "./CookieService";
import {API_URL} from 'config';

const expiresAt = 60 * 24;
class AuthService {
  async doUserLogin(credentials) {
    try {
      const response = await axios.post(API_URL + '/api/login', credentials);
      return response.data;
    } catch (error) {
      return false;
    }
  }
  handleLoginSuccess(response, remember) {
    if(response.access_token){
      if (!remember) {
        const options = { path: "/" };
        CookieService.set("access_token", response.access_token, options);
         if(response.user){
            CookieService.set("user", response.user, options);
          }
        return true;
      }
  
      let date = new Date();
      date = date.setTime(date.getTime() + expiresAt * 60 * 1000);
      const options = { path: "/", expires: date ,maxAge : 10};
      console.log(options);
      CookieService.set("access_token", response.access_token, options);
      if(response.user){
        CookieService.set("user", response.user, options);
      }
      return true;
    }
    return false;
  }

  isLogedIn(){
    return CookieService.get('access_token') ? true : false;
  }

  doLogoutUser(){
    CookieService.remove('access_token');
  }
}

export default new AuthService();
