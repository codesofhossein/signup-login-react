import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Notfound.module.scss";

const Notfound = (props) => {


    return (

        <div className={styles.container}>

            <div className={styles.formContainer}>

                <h1>404</h1>
                <h2>{props.language ? <>مسیری که در آن هستید وجود ندارد</> : <>Page notFound</>}</h2>
                <h3>{props.language ? <>می‌توانید به یکی از صفحات زیر بروید</>  : <>You can go to one of the following pages</>}</h3>

                <div>

                    <Link to="/signup">{props.language ? <>ثبت نام</> : <>Sign Up</> }</Link>
                    <Link to="/login">{props.language ? <>ورود</> : <>Login</> }</Link>

                </div>

            </div>

        </div>
    );
};

export default Notfound;