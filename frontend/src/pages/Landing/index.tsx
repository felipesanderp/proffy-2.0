import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import {
  Container,
  Content,
  Header,
  LogoutIcon,
  LogoContainer,
  ArrowDown,
  ButtonsContainer,
  Buttons,
  Info,
  Total
} from './styles';

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
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img src={landingImg} alt="Landing"/>

          <ArrowDown size={50} />
        </LogoContainer>
      </Content>
    
      <ButtonsContainer>
        <Info>
          <div>
            <p>Seja bem vindo.</p>
            <span>O que deseja fazer?</span>
          </div>
        </Info>
        <Total>
          <span>
            Total de 285 conexeções já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
        </Total>
      
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