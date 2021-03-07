import React from 'react';
import '../styles/styles.css'


export const Question = (props) => {
    return (
        <div class="containerQuestion">
            <h2 id="question">{props.question}</h2>
            {
                props.answers.map((answer, key) => 
                    <div key={key} class="containerAnswer">
                        <input type="radio" name={props.index}/> <label>{answer.answer}</label>
                    </div>    
                )
            }
        </div>
    );
}
