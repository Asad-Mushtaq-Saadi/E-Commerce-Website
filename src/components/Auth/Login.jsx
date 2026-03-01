import React from "react";
import styles from "../Auth/Auth.module.css";
import SquareButton from "../Building Blocks/Buttons/SquareButton";
import Container from "../Building Blocks/Container/Container";

const Login = () => {
    return (
        <div className={styles.parent}>
            <Container>
                <div className={styles.loginBox}>
                      
                    <div className={styles.inputs}>
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="password" placeholder="password" className={styles.input} />
                    </div>
                    <div className={styles.buttons}>
                        <SquareButton>Login</SquareButton>
                    </div>

                    <div className={styles.links}>
                        <span>Forgot your password?</span>
                        <span>Create account</span>
                        <span>Return to Store</span>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Login;