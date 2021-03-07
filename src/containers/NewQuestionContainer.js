import React, { useState, useEffect } from 'react';

export const NewQuestionContainer = (props) => {
    const [aQuestion, setAQuestion] = useState([]);

    useEffect(() => {
        setAQuestion(()=> {
            return props.arrayQuestion
        });
    }, []);

    const handleRemoveQuestion = (idToRemove, aQuestion) => {
        props.removeQuestion(idToRemove, aQuestion);
    };

    return (
        <NewQuestion arrayQuestion={props.aQuestion} id={props.id} key={props.id} removeQuestion={props.handleRemoveQuestion}/>
    );
}