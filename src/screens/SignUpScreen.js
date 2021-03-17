import React, { useRef } from 'react'
import { auth } from '../firebase';
import './signUpScreen.css'

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();


        auth
            .createUserWithEmailAndPassword
            (
                emailRef.current.value, 
                passwordRef.current.value
            )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    }
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type= "submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signUpScreen_gray">
                        New to Netflix? 
                    </span>
                </h4>
                <button className="signUpScreen_link" onClick={register}>
                        Register
                </button>
            </form>
        </div>
    )
}

export default SignUpScreen
