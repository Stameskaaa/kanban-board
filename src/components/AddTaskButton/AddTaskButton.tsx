import { ReactNode } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../styles/mixins';

interface AddTaskButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  buttonText: string;
  color: string;
}

interface StyledButtonProps {
  color: string;
}

const Button = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 12px 24px;
  ${flexCenter}
  gap: 9px;
  border-radius: 12px;
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  cursor: pointer;
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  box-sizing: border-box;
  svg path {
    fill: ${({ color }) => color};
  }
`;

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  icon,
  buttonText,
  color,
  ...props
}) => {
  return (
    <Button color={color} {...props}>
      {icon && icon} {buttonText}
    </Button>
  );
};
