import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { DropDownContainer, flexColumn } from '../../../styles/mixins';
import { TASK_DICTIONARY } from '../../../constants/taskDictionary';

const Container = styled.div`
  ${DropDownContainer}
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  align-items: flex-start;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(226, 226, 226, 1);
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-secondary);
`;

const List = styled.div`
  ${flexColumn};
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 0 0 12px 12px;
`;

const ButtonWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s;

  &:hover {
    color: var(--text-secondary);
  }
`;

interface SelectAssigneeDropDownProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  setNewData: (value: string) => void;
}

export const SelectAssigneeDropDown = forwardRef<HTMLDivElement, SelectAssigneeDropDownProps>(
  ({ onBlur, value, setNewData, ...rest }, ref) => {
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        onBlur?.(e);
      }
    };

    const handleClick = (newValue: string) => {
      setNewData(newValue);
    };

    console.log(value);

    return (
      <Container ref={ref} onBlur={handleBlur} tabIndex={-1} {...rest}>
        <Header>{value}</Header>
        <List>
          <Title>Выберите ответственного</Title>
          {Object.entries(TASK_DICTIONARY.assignees).map(([id, assignee]) => {
            return (
              <ButtonWrapper key={id} onClick={() => handleClick(id)}>
                {assignee}
              </ButtonWrapper>
            );
          })}
        </List>
      </Container>
    );
  },
);
