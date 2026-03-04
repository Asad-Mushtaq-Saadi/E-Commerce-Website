import React from "react";
import styles from "../Auth/Auth.module.css";
import SquareButton from "../Building Blocks/Buttons/SquareButton";
import Container from "../Building Blocks/Container/Container";
import { Link } from 'react-router-dom'


const ForgetPassword = () => {
    return (
        <div className={styles.parent}>
            <Container>
                <div className={styles.formBox}>
                    <div className={styles.title}>
                    <h1>Reset Password</h1>
                    </div>

                    <div className={styles.inputs}>
                        <input type="text" placeholder="New Password" className={styles.input} />
                        <input type="text" placeholder="Confirm Password" className={styles.input} />
                    </div>
                    <div className={styles.forgetPasswordButtons}>
                        <SquareButton>Reset</SquareButton>
                        <Link to={'/home'} className={styles.link}>
                            <SquareButton>Return To Store</SquareButton>

                        </Link>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ForgetPassword 