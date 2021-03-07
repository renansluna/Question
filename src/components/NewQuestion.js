import React from 'react';
import '../styles/styles.css'


export const NewQuestion = (props) => {

    return (
        <div key={props.id} id={props.id} class="containerNewQuestion">
            <button id={props.id} class="closeButton" onClick={() => props.removeQuestion(props.id)}/>
            <label>Question {props.id}</label> 
            <textarea id="question"/>
                    
            <label>Answer 1</label> 
            <div>
                <input type="text" placeholder="Write your answer"/>
                <input type="radio" name="answer"/>
            </div>

            <label>Answer 2</label> 
            <div>
                <input type="text" placeholder="Write your answer"/>
                <input type="radio" name="answer"/>
            </div>

            <label>Answer 3</label> 
            <div>
                <input type="text" placeholder="Write your answer"/>
                <input type="radio" name="answer"/>
            </div>

            <label>Answer 4</label> 
            <div>
                <input type="text" placeholder="Write your answer"/>
                <input type="radio" name="answer"/>
            </div>
        </div>
    );
}