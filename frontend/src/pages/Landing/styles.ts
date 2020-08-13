import styled from 'styled-components';
import { FiPower } from 'react-icons/fi'; 

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  background: var(--color-primary);
  height: 60vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 1120px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;

    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    > p {
      font-size: 1.4rem;
      line-height: 3.0rem;
      color: var(--color-text-in-primary);
      margin-left: 15px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 25px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--color-primary-dark);
    border: 0;
    outline: 0;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: var(--color-primary-darker);
    }
  }
`;

export const LogoutIcon = styled(FiPower)`
  color: var(--color-text-in-primary);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  max-width: 1120px;

  > div {
    margin-top: 25px;
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
    width: 100%;
    height: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1360px) {
    img {
      width: 100%;
      height: 250px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 0 auto;
    margin-top: 56px;
  
    max-width: 1120px;
    width: 100%;
  }
`;

export const Info = styled.div`
  @media (max-width: 1440px) {
    display: flex;
    align-items: center;

    > div {
      margin-right: 135px;

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

    > span {
      color: var(--color-text-complement);
      font-size: 1.2rem;
      line-height: 2rem;
      margin-right: 50px;
    }
  }
`;

export const Buttons = styled.div`
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: row;

    a {
      width: 28rem;
      height: 100px;
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
        margin-left: 15px;
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
        width: 40px;
        height: 40px;
        margin-right: 25px;
      }
    }
  }
`;