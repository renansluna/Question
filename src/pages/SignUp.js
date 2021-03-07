import React from 'react';
import '../styles/styles.css'

export const SignUp = (props) => {
    return (
        <main class="loginMain containerPaginaLogin"> 
            <div id="loginContainer" class="backgroundTeste containerLogin"> 
                <h1> Create your Account </h1>
                <input class="loginInput" type="text" id="name" name="name" placeholder="Write your Name" required/>

                <input class="loginInput" type="text" id="email" name="email" placeholder="Write your E-mail"required/>  

                <input class="loginInput" type="password" id="password" name="password" placeholder="Write your Password" required/>
                <div class="containerLoginButtons">
                    <button class="buttonLogin">Sign Up</button>  
                    <button class="buttonLogin">Forgot your password?</button> 
                </div>
                <h3> Question </h3>
            </div>
        </main>
    );
}