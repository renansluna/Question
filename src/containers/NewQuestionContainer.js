import React, { useState, useEffect } from 'react';

export const NewQuestionContainer = (props) => {
    const [aQuestion, setAQuestion] = useState([]);

    useEffect(() => {
        setAQuestion(()=> {
            return props.arrayQuestion
        });
    }, [aQuestion]);

    return (
        <NewQuestion arrayQuestion={props.arrayQuestion} id={props.id} key={props.id} removeQuestion={props.removeQuestion}/>
    );
}