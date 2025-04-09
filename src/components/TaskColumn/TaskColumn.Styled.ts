import styled from 'styled-components';
import { flexColumn } from '../../styles/mixins';

export const Container = styled.div`
  ${flexColumn}
  gap: 20px;
  flex-grow: 1;
  flex: 1;
  min-width: 0;
`;

export const Header = styled.h2`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Count = styled.span`
  color: rgba(105, 105, 105, 1);
  font-size: 14px;
  font-weight: 500;
`;

export const Body = styled.div<{ bgColor: string }>`
  ${flexColumn}
  gap: 16px;
  overflow-y: auto;
  min-height: calc(100% - 45px);
  border-radius: 20px;
  padding: 12px;
  background-color: ${({ bgColor }) => bgColor};
`;
