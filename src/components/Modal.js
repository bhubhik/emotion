import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

const Card = styled.div`
  width: 500px;
  padding: 32px;
  margin: 100px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Modal = () => {
  return (
    <Card>
      <Title>Are you enjoying learning Emotion CSS?</Title>
      <Container>
        <Button name='Yes, I love it!' isPrimary={true} />
        <Button name='Not really' isPrimary={false} />
      </Container>
    </Card>
  );
};

export default Modal;
