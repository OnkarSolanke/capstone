import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import AuthService from "services/AuthService";

const LogOutProtector = (props) => {
    let Comp = props.comp;
    const history = useHistory();
    console.log(props);
    useEffect(() => {
        // if(AuthService.isLogedIn()){
        //     history.push('/home');
        // }
    }, [])
  return (
        <>
            <Comp/>
        </>
  );
};

export default LogOutProtector;