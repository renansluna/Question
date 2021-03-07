import React from 'react';
import '../styles/styles.css';
import { Question } from '../components/Question';
import questions from '../json/questions.json';

export const Exam = (props) => {
    
    return (
        <main class="containerExams"> 
            <h1>Exams</h1>
            {
                questions.map((question, key) => 
                    <Question question={question.question} answers={question.answers} index={key}/>
                )
            }
        </main>
    );
}