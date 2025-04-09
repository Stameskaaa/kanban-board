import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { DropDownContainer, flexColumn } from '../../../styles/mixins';
import { Lozenge } from '../../Lozenge/Lozenge';
import { TASK_DICTIONARY } from '../../../constants/taskDictionary';

const PriorityEditField = styled.div`
  ${DropDownContainer}
  padding: 0;
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

const ButtonWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

type PriorityNumber = 0 | 1 | 2;
type PriorityString = `${PriorityNumber}`;

interface PriorityEditDropDownProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  setNewData: (value: string) => void;
}
export const PriorityEditDropDown = forwardRef<HTMLDivElement, PriorityEditDropDownProps>(
  ({ onBlur, value, setNewData, ...rest }, ref) => {
    const normalizedValue: PriorityString = (
      ['0', '1', '2'].includes(String(value)) ? String(value) : '0'
    ) as PriorityString;
    const priority = TASK_DICTIONARY.priorities[normalizedValue];
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        onBlur?.(e);
      }
    };

    const handleClick = (newValue: PriorityString) => {
      setNewData(newValue);
    };

    return (
      <PriorityEditField ref={ref} onBlur={handleBlur} tabIndex={-1} {...rest}>
        <Header>
          {' '}
          <Lozenge
            text={priority}
            color={TASK_DICTIONARY.prioritiesColors[normalizedValue].color}
            bgColor={TASK_DICTIONARY.prioritiesColors[normalizedValue].bgColor}
          />
        </Header>

        <List>
          <Title>Выберите приоритет</Title>
          <ButtonWrapper onClick={() => handleClick('1')}>
            <Lozenge
              text="Medium"
              color={TASK_DICTIONARY.prioritiesColors[1].color}
              bgColor={TASK_DICTIONARY.prioritiesColors[1].bgColor}
            />
          </ButtonWrapper>
          <ButtonWrapper onClick={() => handleClick('2')}>
            <Lozenge
              text="High"
              color={TASK_DICTIONARY.prioritiesColors[2].color}
              bgColor={TASK_DICTIONARY.prioritiesColors[2].bgColor}
            />
          </ButtonWrapper>

          <ButtonWrapper onClick={() => handleClick('0')}>
            <Lozenge
              text="Low"
              color={TASK_DICTIONARY.prioritiesColors[0].color}
              bgColor={TASK_DICTIONARY.prioritiesColors[0].bgColor}
            />
          </ButtonWrapper>
        </List>
      </PriorityEditField>
    );
  },
);
