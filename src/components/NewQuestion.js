import React from 'react';
import '../styles/styles.css'


export const NewQuestion = (props) => {

    return (
        <div key={props.questionKey} id={props.questionKey} class="containerNewQuestion">
            <button id={props.questionKey} class="closeButton" onClick={() => props.onRemoveQuestion(props.questionKey)}/>
            <label>Question </label> 
            <textarea id="questionTitle" onChange={(event) => props.onChangeText(event, props.questionKey)}/>
                    
            <label>Option 1</label> 
            <div>
                <input 
                    type="text" 
                    id="option1"
                    placeholder="Write your option" 
                    onChange={(event) => props.onChangeText(event, props.questionKey)}/>
                <input type="radio" name="option1" />
            </div>

            <label>Option 2</label> 
            <div>
                <input 
                    type="text" 
                    id="option2"
                    placeholder="Write your option" 
                    onChange={(event) => props.onChangeText(event, props.questionKey)}/>
                <input type="radio" name="option2"/>
            </div>

            <label>Option 3</label> 
            <div>
                <input 
                    type="text" 
                    id="option3"
                    placeholder="Write your option" 
                    onChange={(event) => props.onChangeText(event, props.questionKey)}/>
                <input type="radio" name="option3"/>
            </div>

            <label>Option 4</label> 
            <div>
                <input 
                    type="text" 
                    id="option4"
                    placeholder="Write your option" 
                    onChange={(event) => props.onChangeText(event, props.questionKey)}/>
                <input type="radio" name="option4"/>
            </div>
        </div>
    );
}