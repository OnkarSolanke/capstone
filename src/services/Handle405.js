
import { useHistory } from "react-router-dom";

let redirectUrl = {
    'ADMIN' : '/admin/dashbord',
    'VENDOR' : 'vendor/dashbord'
}
let Handle405 = function(type){
    const history = useHistory();
    if(type){
        history.pushState(redirectUrl[type]);
        return true;
    }
}              
export default Handle405;