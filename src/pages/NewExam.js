import React, { useState } from 'react';
import '../styles/styles.css';
import { NewQuestionContainer } from '../containers/NewQuestionContainer';
const { uuid } = require('uuidv4');

export const NewExam = (props) => {

    const [question, setQuestion] = useState({
        [uuid()]:    
        {
            questionTitle: 'Empty',
            option1: 'answer',
            option2: 'answer',
            option3: 'answer',
            option4: 'answer'
        }  
    });

    const handleRemoveQuestion = (keyToRemove) => {
        let newMap ={...question};
        delete newMap[keyToRemove];

        setQuestion(newMap);
    };

    const handleNewQuestion = (event) => {
        event.preventDefault();
        let obj = { 
                questionTitle: 'Empty',
                option1: 'answer',
                option2: 'answer',
                option3: 'answer',
                option4: 'answer'
        };
        
        setQuestion((prev) => {
            return  {
                ...prev,
                [uuid()]: obj
            }
        });
    };

    const handleChangeText = ({ target }, key) => {
        let objetoQuestion = {...question[key]}
        objetoQuestion[target.id] = target.value;

        setQuestion((prev) => {
            return  {
                ...prev,
                [key]: objetoQuestion
            }
        });
    };

    return (
        <main>
            <div class="Menu NewQuestionMenuContainer" onClick={handleNewQuestion}>
                <button id="newExamButton" class="buttonMenu">New Question</button>
                <button class="buttonMenu">Save</button>
            </div>
            <div class="containerExams">
                <h1>New Exam</h1>
                {
                    Object.keys(question).map(key => <NewQuestionContainer 
                        questionKey={key} 
                        objeto={question[key]}
                        onRemoveQuestion={handleRemoveQuestion} 
                        onChangeText={handleChangeText} />)
                }
            </div>
        </main>
    );
}