import React from 'react';
import '../styles/styles.css'

export const InformationBoard = (props) => {
    return (
    <div class="boardContainer"> 
        <h1> 
            {props.title}
        </h1>

        <h2 class="boardText">
            {props.description}
        </h2>
    </div>
    );
}