import React from "react";
import styles from "../Auth/Auth.module.css";
import SquareButton from "../Building Blocks/Buttons/SquareButton";
import Container from "../Building Blocks/Container/Container";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.parent}>
            <Container>
                <div className={styles.formBox}>
                      
                    <div className={styles.inputs}>
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="password" placeholder="Password" className={styles.input} />
                    </div>
                    <div className={styles.loginButtons}>
                        <SquareButton>Login</SquareButton>
                    </div>

                    <div className={styles.links}>
                        <Link to={'/forget-password'} className={styles.link}><span>Forgot your password?</span></Link>
                        <Link to={'/register'} className={styles.link}><span>Create account</span></Link>
                        <Link to={'/home'} className={styles.link}><span>Return to Store</span></Link>
                        
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Login;