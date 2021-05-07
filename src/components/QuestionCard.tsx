import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string,
    answer: string[],
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number
}

//React.FC = Functional Component type
const QuestionCard: React.FC<Props> = ({ question, answer, callback, userAnswer, questionNumber, totalQuestions }) => {
    return(
        <Wrapper>
            <div>
                <p className="number">
                    Question: {questionNumber} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }} />
                <div>
                    {answer.map((answer) => (
                        <ButtonWrapper 
                            key={answer}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                {/* !!userAnswer is to set it as boolean */}
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default QuestionCard;

