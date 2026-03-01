import React from "react";
import styles from "../Auth/Auth.module.css";
import SquareButton from "../Building Blocks/Buttons/SquareButton";
import Container from "../Building Blocks/Container/Container";

const ForgetPassword = () => {
    return (
        <div className={styles.parent}>
            <Container>
                <div className={styles.loginBox}>
                    <div className={styles.fPtitle}>
                    <h1>Reset Password</h1>
                    <p>Your password will reset soon</p>
                    </div>

                    <div className={styles.inputs}>
                        <input type="text" placeholder="First Name" className={styles.input} />
                    </div>
                    <div className={styles.forgetPasswordButtons}>
                        <SquareButton>Reset</SquareButton>
                        <SquareButton>Return To Store</SquareButton>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ForgetPassword