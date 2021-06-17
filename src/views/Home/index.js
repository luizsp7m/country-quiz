import React, { useContext } from 'react';

import { Container, Title, Wrapper } from './styles';
import QuestionCard from '../../components/QuestionCard';
import FinishCard from '../../components/FinishCard';

import { QuizContext } from '../../contexts/QuizContext';

function Home() {
  const { showResult } = useContext(QuizContext);

  return (
    <Container>
      <Wrapper>
        <Title>Country Quiz</Title>
        { showResult ? <FinishCard /> : <QuestionCard /> }
      </Wrapper>
    </Container>
  );
}

export default Home;