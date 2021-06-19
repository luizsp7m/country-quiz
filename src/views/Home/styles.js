import styled from 'styled-components';
import backgroundImage from '../../assets/background.png'

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-position: 60% 70%;
  background-size: cover;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
`

export const Title = styled.div`
  color: #fafafa;
  /* text-transform: uppercase; */
  font-weight: bold;
  letter-spacing: .15rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`

export const Footer = styled.div`
  position: relative;
  top: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #F2F2F2;
  font-size: 1.25rem;

  > span {
    > a {
      font-weight: bold;
      color: #F2F2F2;
      font-size: 1.30rem;
    }
  }
`