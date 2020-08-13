import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import { Container, Content, Header, LogoutIcon, LogoContainer, ButtonsContainer, Buttons, Info } from './styles';

const Landing: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <img src="https://github.com/felipesanderp.png" alt="Felipe Sander"/>
            <p>Felipe Sander</p>
          </div>

          <button type="button" onClick={() => signOut()}>
            <LogoutIcon size={20} />
          </button>
        </Header>

        <LogoContainer>
          <div>
            <img src={logoImg} alt="Proffy"/>
            <h2>Sua plataforma de <br /> estudos online.</h2>
          </div>

          <img src={landingImg} alt="Landing"/>
        </LogoContainer>
      </Content>

      <ButtonsContainer>
        <Info>
          <div>
            <p>Seja bem vindo.</p>
            <span>O que deseja fazer?</span>
          </div>

          <span>
            Total de 285 conexeções <br /> já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
        </Info>
      
        <Buttons>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar aulas
          </Link>
        </Buttons>
      </ButtonsContainer>
    </Container>
  );
}

export default Landing;