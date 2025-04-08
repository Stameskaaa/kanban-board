import { ReactNode } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../styles/mixins';

interface AddTaskButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  buttonText: string;
  color: string;
  borderColor: string;
}

interface StyledButtonProps {
  color: string;
  borderColor: string;
}

const Button = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 12px 24px;
  ${flexCenter}
  gap: 9px;
  border-radius: 12px;
  color: ${({ color }) => color};
  border: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  box-sizing: border-box;
`;

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  icon,
  buttonText,
  color,
  borderColor,
  ...props
}) => {
  return (
    <Button color={color} borderColor={borderColor} {...props}>
      {icon && icon} {buttonText}
    </Button>
  );
};
