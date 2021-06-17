import React, { createContext, useState } from 'react';

import api from '../../services';

const QuizContext = createContext();

function QuizProvider({ children }) {

  async function generateCountries() {
    setLoading(true);
    const randomNumbers = [];
    const randomCountries = [];

    while (randomNumbers.length < 4) {
      const number = Math.round(Math.random() * 249);

      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }

    await api.get('/all').then(response => {
      randomNumbers.map(index => {
        randomCountries.push(response.data[index]);
        setLoading(false);
      });
    });

    return randomCountries;
  }

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleResult() {
    setResult(result + 1);
  }

  function noPoints() {
    setResult(0);
  }

  function handleShowResult(value) {
    setShowResult(value);
  }

  return (
    <QuizContext.Provider value={{ generateCountries, handleResult, handleShowResult, noPoints, result, showResult }}>
      { children }
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider }