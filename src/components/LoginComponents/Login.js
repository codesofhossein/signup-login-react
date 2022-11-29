import React , {useState , useEffect} from "react";
import styles from "../SignUpComponents/SignUp.module.scss" ;
import persianStyles from "../SignUpComponents/Fa_singUp.module.scss";

import { validation } from "../validation";
import { Link } from "react-router-dom";

import useLanguage from "../../hooks/useLanguage";
import useTitle from '../../hooks/useTitle' ;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../toasts';


const Login = (props) => {

    const [data , setData] = useState({

        email : "" ,
        password : "",
    });


    const labels = useLanguage (props.language) ;

    useTitle("Login");


    const [errors , setErrors] = useState({});

    useEffect(()=> {

        setErrors(validation(data , "login"));

    } , [data])


    const changeHandler = (e) => {

        setData({...data , [e.target.name]: e.target.value});
    }


    const [toggle , setToggle] = useState({});

    const toggleHandler = (e) =>{

        setToggle({...toggle , [e.target.name] : true});
    }


    const submitHandler = (e) =>{

        e.preventDefault();

        if(Object.keys(errors).length === 0) {

            notify("Login Successful...", "success");
        }
        else{

            setToggle({

                email : true ,
                password : true,
            })

            notify("Invalid Data ..." , "error") ;
        }
        
    }

    return(

        <div className={styles.container} >

            <form onSubmit={submitHandler} className={styles.formContainer}>

                <h2 className={props.language ? persianStyles.faHeader : styles.header}>{labels.headerLogin}</h2>

                <div className={styles.inputContainer}>

                    <label className={props.language ? persianStyles.labels : ""}>{labels.email}</label>
                    <input type="mail" name="email" value={data.email} onChange={changeHandler} onFocus={toggleHandler} className={(toggle.email && errors.email) ? styles.uncompleted : styles.formInput} />
                    {toggle.email && errors.email && <span>{errors.email}</span>}

                </div>

                <div className={styles.inputContainer}>

                    <label className={props.language ? persianStyles.labels : ""}>{labels.password}</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={toggleHandler} className={(toggle.password && errors.password) ? styles.uncompleted : styles.formInput} />
                    {toggle.password && errors.password &&  <span>{errors.password}</span>}

                </div>

                <div className={styles.buttons}>

                    <Link to="/signup">{labels.headerSign}</Link>
                    <button type="submit">{labels.headerLogin}</button>

                </div>
            </form>

            <ToastContainer />

        </div>

    )
}

export default Login ;