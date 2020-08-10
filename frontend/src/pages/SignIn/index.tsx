import React, { useRef, useCallback } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import * as Yup from 'yup';
import { Form } from '@unform/web'; 
import { FormHandles } from '@unform/core';
import { useHistory, Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Background, Content, AnimationContainer, FormFooter } from './styles';

import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast'
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail Obrigatório'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/landing');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    }, 
    [signIn, addToast, history],
  );



  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Fazer login</h1>

            <Input name="email" placeholder="Email"  />
            <Input name="password" type="password" placeholder="Senha" icon={AiOutlineEye} />

            <div className="remember-forgot">
              <input type="checkbox" name="remember" id="remember"/>
              <span>Lembrar-me</span>

              <Link to="/forgot-password">Esqueci minha senha</Link>
            </div>
            
            <Button type="submit">Entrar</Button>
          </Form>


          <FormFooter>
            <div className="signup">
              <p>Não tem conta?</p>
              <Link to="/sigup" >
              Cadastre-se
              </Link>
            </div>
            <div className="info">
              <span>É de graça</span>
              <img src={purpleHeart} alt="Coração Roxo"/>
            </div>
          </FormFooter>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default SignIn;