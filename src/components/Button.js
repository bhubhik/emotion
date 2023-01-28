import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  border: ${(props) => (props.isPrimary ? '1.5px solid green' : '0')};
  border-radius: 6px;
  background-color: white;
  color: ${(props) => (props.isPrimary ? 'green' : 'red')};
  &:hover {
    color: black;
  }
`;

const Button = ({ name, isPrimary }) => {
  return <StyledButton isPrimary={isPrimary}>{name}</StyledButton>;
};

export default Button;
