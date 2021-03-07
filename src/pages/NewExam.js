import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { NewQuestion } from '../components/NewQuestion';

export const NewExam = (props) => {

    const [arrayQuestion, setArrayQuestion] = useState([]);

    const handleRemoveQuestion = (idToRemove) => {
        
        let aQuestionFiltered = arrayQuestion.filter((value, index) => value.idQuestion !== idToRemove);
        
        setArrayQuestion(() => {
            return aQuestionFiltered
        });
    };

    const handleNewQuestion = (event) => {
        event.preventDefault();

        let obj = { question: 'Empty',
                    idQuestion: arrayQuestion.length,
                    answer1: 'answer',
                    answer2: 'answer',
                    answer3: 'answer',
                    answer4: 'answer'         
        };

        setArrayQuestion((prev) => {
            return [...prev, obj];
        });
    };

    return (
        <main>
            <div class="Menu NewQuestionMenuContainer" onClick={handleNewQuestion}>
                <button class="buttonMenu">New Question</button>
                <button class="buttonMenu">Save</button>
            </div>
            <div class="containerExams">
                <h1>New Exam</h1>
                {
                    arrayQuestion.map((question) => <NewQuestion id={question.idQuestion} key={question.idQuestion} removeQuestion={handleRemoveQuestion} />)
                }
            </div>
        </main>
    );
}