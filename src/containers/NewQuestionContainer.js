import React, { useState } from 'react';
import { NewQuestion } from '../components/NewQuestion';
export const NewQuestionContainer = (props) => {

    const [arrayQuestion, setArrayQuestion] = useState([{ 
        question: 'Empty',
        answer1: 'answer',
        answer2: 'answer',
        answer3: 'answer',
        answer4: 'answer'         
    }]);



    return (
        <NewQuestion 
            objeto={props.objeto}
            questionKey={props.questionKey}
            removeQuestion={props.removeQuestion} 
            onChangeText={props.onChangeText}
            onRemoveQuestion={props.onRemoveQuestion}/>
    );
}