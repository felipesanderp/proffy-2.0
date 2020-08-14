import styled, { keyframes } from 'styled-components';
import { FiPower, FiChevronsDown } from 'react-icons/fi'; 

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  background: var(--color-primary);
  height: 100vh;

  @media (min-width: 1024px) {
    height: 60vh;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
  margin-right: auto;

  width: 90%;
  max-width: 425px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;

    > img {
      width: 4.0rem;
      height: 4.0rem;
      border-radius: 50%;
    }

    > p {
      font-size: 1.4rem;
      line-height: 3.0rem;
      color: var(--color-text-in-primary);
      margin-left: 1.5rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2.5rem;
    width: 4.0rem;
    height: 4.0rem;
    border-radius: 0.8rem;
    background: var(--color-primary-dark);
    border: 0;
    outline: 0;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: var(--color-primary-darker);
    }
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1360px) and (max-width: 1439px) {
    width: 80vw;
    max-width: 1360px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const LogoutIcon = styled(FiPower)`
  color: var(--color-text-in-primary);
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  max-width: 425px;

  > div {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;

    > img {
      height: 10rem;
    }

    > h2 {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
      color: var(--color-text-in-primary);
    }
  }

  > img {
    margin-top: 2.5rem;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    max-width: 768px;

    > img {
      width: 100%;
      height: 350px;
    }
  }

  @media (min-width: 1024px) {
    width: 90vw;
    max-width: 1024px;

    flex-direction: row;
    justify-content: space-between;

    > div {
      > h2 {
        max-width: 330px;
      }
    }

    > img {
      width: 100%;
      height: 300px;
    }
  }

  @media (min-width: 1360px) and (max-width: 1439px) {
    width: 80vw;
    max-width: 1360px;
    
    > img {
      height: 250px;
    }
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    
    > div {
      > img {
        height: 12rem;
      }
    }
  }
`;

const scrollAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-25px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const ArrowDown = styled(FiChevronsDown)`
  margin-top: 6rem;
  color: var(--color-text-in-primary);

  animation: ${scrollAnimation} 3.5s ease infinite;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 425px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25vh 55vh 20vh;
  grid-template-areas: 
    "info info"
    "buttons buttons"
    "total total"
  ;

  @media (min-width: 768px) {
    max-width: 768px;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60vh 20vh;
    grid-template-areas: 
      "info buttons"
      "total total"
  }

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 1024px;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    margin-top: 7rem;
  }

  @media (min-width: 1360px) and (max-width: 1439px) {
    width: 80vw;
    max-width: 1360px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 1440px;
  }
`;

export const Info = styled.div`
  grid-area: info;
  margin: auto;

    > div {
      > p {
        font-size: 2rem;
        line-height: 3rem;
      }

      > span {
        font-size: 2rem;
        font-weight: 600;
        line-height: 3rem;
      }
    }

  @media (min-width: 1024px) {
    > div {
      margin-right: 8rem;
    }
  }

  @media (min-width: 1440px) {
    > div {
      margin-right: 10rem;
    }
  }
`;

export const Total = styled.div`
  grid-area: total;
  margin: auto;
  
  > span {
    color: var(--color-text-complement);
    font-size: 1.2rem;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 15rem;
  }
`;

export const Buttons = styled.div`
    grid-area: buttons;
    margin: auto;

    a {
      width: 28rem;
      height: 10rem;
      border-radius: 0.8rem;
      font: 700 2.0rem Archivo;
      cursor: pointer;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: var(--color-button-text);

      transition: all 0.2s;

      & + a {
        margin-top: 1.5rem;
      }

      &.study {
        background-color: var(--color-primary-lighter);

        &:hover {
          background-color: var(--color-primary-light);
          text-decoration: underline;
        }
      }

      &.give-classes {
        background-color: var(--color-secundary);

        &:hover {
          background-color: var(--color-secundary-dark);
          text-decoration: underline;
        }
      }

      > img {
        width: 4.0rem;
        height: 4.0rem;
        margin-right: 2.5rem;
      }
    }

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      a {
        width: 22rem;
        height: 10rem;

        & + a {
          margin-top: 0;
          margin-left: 1.5rem;
        }
      }
    }

    @media (min-width: 1360px) and (max-width: 1439px) {
      margin-left: 6rem;

      a {
        width: 28rem;
        height: 10rem;
      }
    }

    @media (min-width: 1440px) {
      a {
        width: 28rem;
        height: 10rem;
      }
    }
`;