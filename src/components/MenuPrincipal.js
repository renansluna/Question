import React from 'react';
import '../styles/styles.css'
import { useHistory } from "react-router-dom";

export const MenuPrincipal = (props) => {
    let history = useHistory();
    return (
        <div class="Menu container">
            <button class="buttonMenu">Home</button>
            <button class="buttonMenu" onClick={ () => {history.push('/Exam')} }>Exams</button>
            <button class="buttonMenu" onClick={ () => {history.push('/NewExam')} }>Create new exam</button>
            <div id="userArea" class="UserAreaMenu">
                <button class="buttonMenu">User</button>
                <button class="buttonMenu" id="userLogin" onClick={ () => {history.push('/Login')} }>Sign In</button>
                <button class="buttonMenu" id="userSignUp" onClick={ () => {history.push('/SignUp')} }>Sign Up</button>
            </div>
        </div>
    );
}