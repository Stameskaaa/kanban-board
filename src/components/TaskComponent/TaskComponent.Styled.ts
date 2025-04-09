import styled from 'styled-components';
import { ellipsisText, flexCenter, flexColumn } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  ${flexColumn}
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  user-select: none;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(187, 221, 214, 1);
`;

export const Header = styled.h2`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const HeaderTitle = styled.p`
  font-weight: 600;
  flex-grow: 1;
  min-width: 0;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-primary);
  overflow-wrap: break-word;
  word-wrap: break-word;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
`;

export const HeaderTitleEdit = styled.input`
  font-weight: 600;
  flex-grow: 1;
  min-width: 0;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-primary);
  overflow-wrap: break-word;
  word-wrap: break-word;
  border-bottom: 1px solid rgba(187, 221, 214, 1);
`;

export const IconButtonContainer = styled.button`
  cursor: pointer;
  ${flexCenter}
  margin-bottom: auto;
`;

export const AssigneeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-primary);
  ${ellipsisText}
`;

export const Circle = styled.div`
width: 16px;
height: 16px;
padding 2px 4px 4px 4px;
border-radius: 50%;
background-color: rgba(233, 251, 249, 1);
border: 0.5px solid rgba(19, 157, 142, 1);
  ${flexCenter}
font-weight: 500;
font-size: 10px;
line-height: 10px;
color: rgba(10, 158, 142, 1);
 flex-shrink: 0;
`;

export const Point = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  vertical-align: middle;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-secondary);
  ${ellipsisText}
`;

export const TaskStatus = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const TaskDescription = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-primary);
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
