import styled from 'styled-components';
import { LozengeProps } from '../../types/types';

const LozengeContainer = styled.div<{ bgColor: string; color: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 999px;
  font-weight: 500;
  text-align: center;
  svg path {
    fill: ${({ color }) => color};
  }
`;

export const Lozenge: React.FC<LozengeProps> = ({ text, icon, bgColor, color }) => {
  return (
    <LozengeContainer bgColor={bgColor} color={color}>
      {icon && icon}
      {text}
    </LozengeContainer>
  );
};
