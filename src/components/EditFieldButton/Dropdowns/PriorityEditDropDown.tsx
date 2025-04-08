import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { flexColumn } from '../../../styles/mixins';
import { Lozenge } from '../../Lozenge/Lozenge';

const PriorityEditField = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
  top: calc(100% + 1px);
`;

const Header = styled.div`
  display: flex;
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

interface PriorityEditDropDownProps extends HTMLAttributes<HTMLDivElement> {}

export const PriorityEditDropDown = forwardRef<HTMLDivElement, PriorityEditDropDownProps>(
  ({ onBlur, ...rest }, ref) => {
    return (
      <PriorityEditField ref={ref} onBlur={onBlur} {...rest}>
        <Header>
          {' '}
          <Lozenge text="Medium" color="var(--text-warning)" bgColor="var(--background-warning)" />
        </Header>

        <List>
          <Title>Выберите приоритет</Title>
          <Lozenge text="Medium" color="var(--text-warning)" bgColor="var(--background-warning)" />
          <Lozenge text="High" color="rgba(141, 1, 1, 1)" bgColor="rgba(255, 214, 214, 1)" />
          <Lozenge text="Low" color="rgba(1, 141, 15, 1)" bgColor="rgba(214, 255, 216, 1)" />
        </List>
      </PriorityEditField>
    );
  },
);
