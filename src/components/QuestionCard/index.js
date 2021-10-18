import React, { Fragment, useContext, useEffect, useState } from 'react';

import { Container } from './styles';

import img from '../../assets/adventure.svg';

import { QuizContext } from '../../contexts/QuizContext';

function QuestionCard() {
  const { generateCountries, handleResult, handleShowResult } = useContext(QuizContext);

  const [countries, setCountries] = useState();
  const [answer, setAnswer] = useState();
  const [loadingQuestion, setLoadingQuestion] = useState(true);
  const [question, setQuestion] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctIndex, setCorrectIndex] = useState();
  const [answerSelected, setAnswerSelected] = useState();
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);

  function generateQuestion(country) {
    const questions = [{
      type: 'capital',
      question: `${country.capital} is the capital of`
    }, {
      type: 'flag',
      flag: `${country.flags.svg}`,
      question: 'Which country does this flag belong to?  ',
    }];

    const random = Math.round(Math.random() * (questions.length - 1));
    setQuestion(questions[random]);
  }

  function askQuestion() {
    setLoadingQuestion(true);

    generateCountries().then(response => {
      const random = Math.round(Math.random() * 3);
      setCorrectIndex(random);
      setCountries(response);
      setAnswer(response[random]);
      generateQuestion(response[random]);
      setLoadingQuestion(false);
    })
  }

  function checkAnswer(country, index) {
    if (!isAnswered) {
      setIsAnswered(true);
      setAnswerSelected(index);
      setShowProgressBar(true);

      setTimeout(() => {
        if (country === answer) {
          handleResult();
        } else {
          handleShowResult(true);
        }

        setIsAnswered(false);
        setShowProgressBar(false);
        askQuestion();
      }, 3000);
    } else {
      return 0;
    }
  }

  useEffect(() => {
    askQuestion();
  }, []);

  return (
    <Container>
      <img src={img} alt="#" />

      { loadingQuestion ? <h3>Loading...</h3> : (
        <Fragment>
          <div className="question">
            {question.type === 'flag' && <img src={question.flag} alt="#" />}
            {question.question}
          </div>

          <div className="alternatives-group">
            {countries.map((country, index) => (
              <div
                className={isAnswered && answer === country ? 'correct' : (
                  isAnswered && answer !== country && index === answerSelected ? 'wrong' : 'default'
                )}
                onClick={() => checkAnswer(country, index)}
                key={index}
              >
                <span>{index + 1}.</span>
                <label>{country.name.common}</label>
              </div>
            ))}
          </div>

          <div className="progress-bar">
            {showProgressBar && <div className="bar"></div>}
          </div>
        </Fragment>
      )}

      {/* { isAnswered && <button onClick={() => askQuestion()}>Next</button>} */}
    </Container>
  );
}

export default QuestionCard;