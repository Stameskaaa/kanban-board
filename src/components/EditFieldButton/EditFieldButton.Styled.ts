import styled from 'styled-components';
import { ellipsisText } from '../../styles/mixins';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 4px;
  padding: 8px;

  font-family: Inter;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: rgba(71, 71, 71, 1);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: rgba(237, 237, 237, 1);
  }

  &:active {
    background-color: rgba(217, 217, 217, 1);
  }
`;

export const ButtonText = styled.span`
  ${ellipsisText}
`;
