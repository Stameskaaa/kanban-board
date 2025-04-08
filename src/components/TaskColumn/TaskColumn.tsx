import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Lozenge } from '../Lozenge/Lozenge';
import { AddTaskButton } from '../AddTaskButton/AddTaskButton';
import { Task } from '../Task/Task';
import { flexColumn } from '../../styles/mixins';
import { ReactNode } from 'react';
import { RootState } from '../../store';

const Container = styled.div`
  ${flexColumn}
  gap: 20px;
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

const Body = styled.div`
  ${flexColumn}
  gap: 16px;
  border-radius: 20px;
  padding: 12px;
  background: rgba(245, 250, 249, 1);
`;

type Task = {
  taskName: string;
  description: string;
  assigneeId: number;
  dueDate: string;
  priorityId: number;
  statusId: number;
};

interface TaskColumnProps {
  statusKey: string;
  title: string;
  icon: ReactNode;
  badgeColor: string;
  badgeBgColor: string;
  buttonColor: string;
  buttonBorderColor: string;
}

export const TaskColumn = ({
  statusKey,
  title,
  icon,
  badgeColor,
  badgeBgColor,
  buttonColor,
  buttonBorderColor,
}: TaskColumnProps) => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task: Task) => task.statusId === Number(statusKey));

  return (
    <Container>
      <Header>
        <Lozenge text={title} icon={icon} bgColor={badgeBgColor} color={badgeColor} />
        <Count>{filteredTasks.length}</Count>
      </Header>

      <Body>
        {filteredTasks.map((task) => (
          <Task key={task.taskName} />
        ))}

        <AddTaskButton
          icon={icon}
          buttonText="Новая задача"
          color={buttonColor}
          borderColor={buttonBorderColor}
        />
      </Body>
    </Container>
  );
};
