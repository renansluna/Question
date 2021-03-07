import React from 'react';
import '../styles/styles.css'

export const Login = (props) => {
    return (
        <main class="loginMain containerPaginaLogin"> 
            <div id="loginContainer" class="backgroundTeste containerLogin"> 
                <h1> Sign In </h1>
                <input class="loginInput" type="text" id="email" name="email" placeholder="Write your E-mail"required/>  
                
                <input class="loginInput" type="password" id="password" name="password" placeholder="Write your Password" required/>
                <div class="containerLoginButtons">
                    <button class="buttonLogin">Sign In</button>  
                    <button class="buttonLogin">Home</button> 
                </div>
                <h3> Question </h3>
            </div>
        </main>
    );
}