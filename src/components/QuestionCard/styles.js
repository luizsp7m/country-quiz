import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  padding: 3rem 1.55rem;
  border-radius: 1rem;
  width: 25rem;
  position: relative;

  > img {
    position: absolute;
    right: 0;
    top: -5rem;
    width: 100%;
    max-width: 9rem;
    height: auto;
  }

  > div.question {
    color: #2F527B;
    font-weight: bold;
    font-size: 1.45rem;

    display: flex;
    flex-direction: column;

    > img {
      width: 100%;
      max-width: 4rem;
      height: auto;
      margin-bottom: 1rem;
    }
  }

  > div.alternatives-group {
    > div {
      color: #6066D0;
      margin: 1.25rem 0;
      border: 1px solid rgba(96, 102, 208, 0.7);
      padding: .55rem 1rem;
      border-radius: .5rem;
      font-weight: 500;
      font-size: 1.15rem;
      transition: all .25s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 550px;

      &:hover {
        background: #F9A826;
        border: 1px solid #F9A826;
        cursor: pointer;
        color: #fafafa;
      }

      > span {
        margin-right: 1.45rem;
        cursor: pointer;
      }

      > label {
        cursor: pointer;
      }
    }

    > div.correct {
      background: #60BF88;
      color: #fafafa;
      border: 1px solid #60BF88;
    }

    > div.wrong {
      background: #EA8282;
      color: #fafafa;
      border: 1px solid #EA8282;
    }
  }

  > button {
    background: #F9A826;
    color: #fafafa;
    font-weight: bold;
    font-size: 1rem;
    padding: .55rem 1.25rem;
    border-radius: .5rem;
    cursor: pointer;
    border: 0;
  }
`;