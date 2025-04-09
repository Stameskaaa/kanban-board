import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Lozenge } from '../Lozenge/Lozenge';
import { AddTaskButton } from '../AddTaskButton/AddTaskButton';
import { TaskComponent } from '../TaskComponent/TaskComponent';
import { flexColumn } from '../../styles/mixins';
import { ReactNode } from 'react';
import { RootState } from '../../store';
import { PlusIcon } from '../../icons/PlusIcon';
import { Task } from '../../types/types';

const Container = styled.div`
  ${flexColumn}
  gap: 20px;
  min-height: 100%;
  overflow-y: auto;
  flex-grow: 1;
  flex: 1;
`;

const Header = styled.h2`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Count = styled.span`
  color: rgba(105, 105, 105, 1);
  font-size: 14px;
  font-weight: 500;
`;

const Body = styled.div<{ bgColor: string }>`
  ${flexColumn}
  gap: 16px;
  border-radius: 20px;
  padding: 12px;
  background-color: ${({ bgColor }) => bgColor};
`;

interface TaskColumnProps {
  statusKey: string;
  title: string;
  icon: ReactNode;
  bgColor: string;
  badgeColor: string;
  badgeBgColor: string;
  buttonColor: string;
}

export const TaskColumn = ({
  statusKey,
  title,
  icon,
  bgColor,
  badgeColor,
  badgeBgColor,
  buttonColor,
}: TaskColumnProps) => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task: Task) => task.statusId === Number(statusKey));

  return (
    <Container>
      <Header>
        <Lozenge text={title} icon={icon} bgColor={badgeBgColor} color={badgeColor} />
        <Count>{filteredTasks.length}</Count>
      </Header>

      <Body bgColor={bgColor}>
        {filteredTasks.map((task, index) => (
          <TaskComponent
            index={index} //TODO fix
            icon={Lozenge}
            iconProps={{
              text: title,
              icon: icon,
              bgColor: badgeBgColor,
              color: badgeColor,
            }}
            key={index}
            {...task}
          />
        ))}

        <AddTaskButton icon={<PlusIcon />} buttonText="Новая задача" color={buttonColor} />
      </Body>
    </Container>
  );
};
