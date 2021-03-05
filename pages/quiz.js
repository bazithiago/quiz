import styled from 'styled-components'
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import db from '../db.json'
import React from 'react';

const FlagImage = styled.img`
    width: 100%;
    height: auto;
    background-color: red;
    object-fit: cover;
`

function LoadingGame() {
    return (
        <>
            <Widget>
                <Widget.Header>
                    <h3>
                        Carregando...
                    </h3>
                </Widget.Header>
                <Widget.Content>
                    <span>Aguarde um momento</span>
                </Widget.Content>
            </Widget>
        </>
    )
}

function QuestionWidget({question, totalQuestions, questionIndex, questionID, onSubmit}) {
    
    const questionId = `question__${questionIndex}`

    return(
        <Widget>
                <Widget.Header>
                    <h3>
                        Pergunta {questionIndex + 1} de {` ${totalQuestions}`}
                    </h3>
                </Widget.Header>
                    <FlagImage 
                        src={question.image}
                        alt={question.description}
                    />
                <Widget.Content>
                    <h2>
                        {question.title}
                    </h2>
                    <p>
                        {question.description}
                    </p>
                
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                   {question.alternatives.map((alternative, alternativeIndex) => { 
                        
                        const alternativeId = `alternative__${alternativeIndex}`
                        
                        return (                                  
                            <Widget.Topic
                                as="li"
                                htmlFor={alternativeId}
                            >
                                <input
                                    style={{ display: 'none'}}
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio"
                                >
                                </input>
                                {alternative}
                            </Widget.Topic>
                        );
                   })}
                    <Button type="submit">
                        PRÓXIMA
                    </Button>
                </form>


                </Widget.Content>
            </Widget>
    );
}

function ResultWidget() {
    return <p>RESULTADO</p> 
}

const screenStates = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT'
};

export default function Quiz() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];
    const totalQuestions = db.questions.length;
    const questionID = `question__${questionIndex}`;
    
    
    
    React.useEffect(() => {
        setTimeout(()=>{
            setScreenState(screenStates.QUIZ);
        }, 1*1000)
    }, []);

    function handleSubmit(){
        const nextQuestion = questionIndex + 1;

        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }
    
    return (
        <>
            {screenState === screenStates.LOADING && <LoadingGame />}
            {screenState === screenStates.QUIZ && <QuestionWidget 
                question={question}
                questionIndex={questionIndex}
                totalQuestions={totalQuestions}
                questionID={questionID}
                onSubmit={handleSubmit}
            />}  
            {screenState === screenStates.RESULT && <ResultWidget />}

        </>
    );
}