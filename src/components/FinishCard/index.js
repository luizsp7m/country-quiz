import React, { useContext } from 'react';

import { Container } from './styles';

import imgFinish from '../../assets/winner.svg';

import { QuizContext } from '../../contexts/QuizContext';

function FinishCard() {
  const { result, handleShowResult, noPoints } = useContext(QuizContext);

  function restartQuiz() {
    noPoints();
    handleShowResult(false)
  }

  return (
    <Container>
      <img src={imgFinish} alt="#" />

      <h2>Results</h2>

      <p>You got <span>{result}</span> correct answers</p>

      <button onClick={() => restartQuiz()}>Try again</button>
    </Container>
  );
}

export default FinishCard;