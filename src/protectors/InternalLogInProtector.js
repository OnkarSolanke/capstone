import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import AuthService from "services/AuthService";

const LogInProtector = (props) => {
    let Comp = props.comp;
    const history = useHistory();
    console.log(AuthService.isLogedIn());
    useEffect(() => {
        if(!AuthService.isLogedIn()){
            history.push('/login');
        }
    }, [])
  return (
        <>
            <Comp/>
        </>
  );
};

export default LogInProtector;