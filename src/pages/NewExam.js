import React, { useState } from 'react';
import '../styles/styles.css';
import { NewQuestion } from '../components/NewQuestion';

export const NewExam = (props) => {

    const [arrayQuestion, setArrayQuestion] = useState([]);

    const handleRemoveQuestion = (idToRemove, aQuestion) => {
        let aQuestionFiltered = aQuestion.filter((value, index) => value.props.id !== idToRemove);

        setArrayQuestion(() => {
            return aQuestionFiltered
        });
    };

    const handleNewQuestion = (event) => {
        event.preventDefault();
        let id = arrayQuestion.length;

        setArrayQuestion((prev) => {
            return [...prev, <NewQuestion arrayQuestion={arrayQuestion} id={id} key={id} removeQuestion={handleRemoveQuestion} />];
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
                    arrayQuestion
                }
            </div>
        </main>
    );
}