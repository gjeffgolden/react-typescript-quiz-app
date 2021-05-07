import React from 'react';
import { AnswerObject } from '../App';

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
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answer.map((answer) => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            {/* !!userAnswer is to set it as boolean */}
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;

