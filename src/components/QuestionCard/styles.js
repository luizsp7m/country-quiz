import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  padding: 4rem 2.5rem;
  border-radius: 1rem;
  width: 35rem;
  position: relative;

  > img {
    position: absolute;
    right: 0;
    top: -6rem;
    width: 100%;
    max-width: 12rem;
    height: auto;
  }

  > div.question {
    color: #2F527B;
    font-weight: bold;
    font-size: 2rem;

    display: flex;
    flex-direction: column;

    > img {
      width: 100%;
      max-width: 8rem;
      height: auto;
      margin-bottom: 1rem;
    }
  }

  > div.alternatives-group {
    > div {
      color: #6066D0;
      margin: 1.25rem 0;
      border: 1px solid rgba(96, 102, 208, 0.7);
      padding: 1rem 2rem;
      border-radius: .5rem;
      font-weight: 500;
      font-size: 1.8rem;
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

  > div.progress-bar {
    position: relative;
    height: 10px;
    border-radius: 15px;
    margin-top: 3rem;

    > div.bar {
      position: absolute;
      background-color: #F9A826;
      width: 0px;
      height: 10px;
      border-radius: 15px;
      animation: progress 3s infinite linear;

      @keyframes progress{
        0%{
          width: 0%;
        }

        25%{
          width: 50%;
        }

        50%{
          width: 75%;
        }

        75%{
          width: 85%;
        }

        100%{
          width: 100%;
        }
      }
    }
  }
`;