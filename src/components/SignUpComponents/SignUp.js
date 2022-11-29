import React, { useEffect, useState } from 'react';
import styles from "./SignUp.module.scss";
import persianStyles from "./Fa_singUp.module.scss";

import { validation } from '../validation';
import { Link } from 'react-router-dom';

import useLanguage from '../../hooks/useLanguage';
import useTitle from '../../hooks/useTitle' ;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../toasts';

const SignUp = (props) => {

    const [data, setData] = useState({

        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });


    const labels = useLanguage(props.language) ;

    useTitle("Sign Up");


    const [errors, setErrors] = useState({});

    useEffect(() => {

        setErrors(validation(data, "signup"));

    }, [data]);



    const [toggle, setToggle] = useState({});


    const toggleHandler = (e) => {

        setToggle({ ...toggle, [e.target.name]: true });
    }



    const changeHandler = (e) => {

        if (e.target.name === "isAccepted") {

            setData({ ...data, [e.target.name]: e.target.checked });
        }
        else {

            setData({ ...data, [e.target.name]: e.target.value })
        }

    }


    const submitHandler = (e) => {

        e.preventDefault();

        if (Object.keys(errors).length === 0) {

            notify("Sign Up Successful...", "success");

        }
        else {

            notify("Invalid data...", "error");

            setToggle({

                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })


        }
    }

    return (

        <div className={styles.container} >

            <form onSubmit={submitHandler} className={styles.formContainer} >


                <h2 className={props.language ? persianStyles.faHeader : styles.header} >{labels.headerSign}</h2>

                <div className={styles.inputContainer} >

                    <label className={props.language ? persianStyles.labels : ""} >{labels.name}</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={toggleHandler} className={(toggle.name && errors.name) ? styles.uncompleted : styles.formInput} />
                    {toggle.name && errors.name && <span>{errors.name}</span>}

                </div>

                <div className={styles.inputContainer} >

                    <label className={props.language ? persianStyles.labels : ""}>{labels.email}</label>
                    <input type="mail" name="email" value={data.email} onChange={changeHandler} onFocus={toggleHandler} className={(toggle.email && errors.email) ? styles.uncompleted : styles.formInput} />
                    {toggle.email && errors.email && <span>{errors.email}</span>}

                </div>

                <div className={styles.inputContainer} >

                    <label className={props.language ? persianStyles.labels : ""}>{labels.password}</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={toggleHandler} className={(toggle.password && errors.password) ? styles.uncompleted : styles.formInput} />
                    {toggle.password && errors.password && <span>{errors.password}</span>}

                </div>

                <div className={styles.inputContainer} >

                    <label className={props.language ? persianStyles.labels : ""}>{labels.confirmPassword}</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={toggleHandler} className={(toggle.confirmPassword && errors.confirmPassword) ? styles.uncompleted : styles.formInput} />
                    {toggle.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>

                <div className={styles.checkboxContainer} >
                    <div>
                        <label>{labels.textPolicy}</label>
                        <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={toggleHandler} />
                    </div>
                    {toggle.isAccepted && errors.isAccepted && <span>{errors.isAccepted}</span>}

                </div>

                <div className={styles.buttons} >
                    <Link to="/login">{labels.headerLogin}</Link>
                    <button type="submit">{labels.headerSign}</button>
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;