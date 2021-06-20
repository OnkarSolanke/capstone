import axios from "axios";
import { API_URL } from "config";
import CookieService from "./CookieService";

let BaseApi = axios.create({
  baseURL : API_URL + '/api',
});

let Api = function(){
  var token = CookieService.get('access_token');
  if(token){
    BaseApi.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
  return BaseApi;
}

export default Api;