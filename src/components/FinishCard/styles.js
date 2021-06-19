import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  padding: 3rem 1.55rem;
  border-radius: 1rem;
  width: 35rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 20rem;
    height: auto;
  }

  > h2 {
    font-size: 3rem;
    color: #1D355D;
    margin: 2rem 0 1rem 0;
  }

  > p {
    color: #1D355D;
    margin-bottom: 2rem;
    font-size: 1.35rem;

    > span {
      color: #6fcf97;
      font-weight: bold;
      font-size: 2rem;
    }
  }

  > button {
    color: #1D355D;
    font-weight: bold;
    padding: .75rem 1.85rem;
    border-radius: .5rem;
    border: 1px solid #1D355D;
    cursor: pointer;
    transition: all .25s;
    font-size: 1.75rem;

    &:hover {
      color: #fafafa;
      background-color: #F9A826;
      border: 1px solid #F9A826;
    }
  }
`;
