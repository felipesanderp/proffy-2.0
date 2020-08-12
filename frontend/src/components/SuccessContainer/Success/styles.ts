import styled from 'styled-components';
import { animated } from 'react-spring';

import backgroundImg from '../../../assets/images/success-background.svg';

export const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImg}) no-repeat center;
  background-color: var(--color-primary);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5.4rem;
    font-family: 'Archivo';
    font-weight: 700;
    color: var(--color-title-in-primary);
    margin-top: 40px;
  }

  p {
    color: var(--color-text-in-primary);
  }

  span {
    color: var(--color-text-in-primary);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
    margin-top: 80px;
    width: 160px;
    height: 56px;
    border-radius: 8px;
    background: var( --color-secundary);
    cursor: pointer;
    border: 0;
    outline: 0;

    transition: all 0.2s;

    &:hover {
      background: var(--color-secundary-dark);
    }
`;