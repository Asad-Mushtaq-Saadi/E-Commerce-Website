import React from "react";
import styles from "../Auth/Auth.module.css";
import SquareButton from "../Building Blocks/Buttons/SquareButton";
import Container from "../Building Blocks/Container/Container";

const Register = () => {
    return (
        <div className={styles.parent}>
            <Container>
                <div className={styles.loginBox}>

                    <div className={styles.inputs}>
                        <input type="text" placeholder="First Name" className={styles.input} />
                        <input type="text" placeholder="Last Name" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="date" placeholder="Enter Date" className={styles.input} />
                        <input type="password" placeholder="password" className={styles.input} />
                    </div>
                    <div className={styles.buttons}>
                        <SquareButton>Create</SquareButton>
                        <SquareButton>Return To Store</SquareButton>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Register