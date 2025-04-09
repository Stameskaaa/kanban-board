import { useDispatch, useSelector } from 'react-redux';
import { Lozenge } from '../Lozenge/Lozenge';
import { AddTaskButton } from '../AddTaskButton/AddTaskButton';
import { TaskComponent } from '../TaskComponent/TaskComponent';
import { ReactNode } from 'react';
import { RootState } from '../../store';
import { PlusIcon } from '../../icons/PlusIcon';
import { statuses, Task } from '../../types/types';
import { addTask } from '../../store/taskSlice';
import { Droppable } from '@hello-pangea/dnd';
import { Body, Container, Count, Header } from './TaskColumn.Styled';

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
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task: Task) => task.statusId === Number(statusKey));

  const handleAddTask = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const now = new Date();
    dispatch(
      addTask({
        id: randomId,
        taskName: 'Новая задача',
        assigneeId: 1,
        dueDate: `${now}`,
        priorityId: 0,
        description: '',
        statusId: Number(statusKey) as statuses,
      }),
    );
  };

  return (
    <Droppable droppableId={statusKey}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          <Header>
            <Lozenge text={title} icon={icon} bgColor={badgeBgColor} color={badgeColor} />
            <Count>{filteredTasks.length}</Count>
          </Header>
          <Body bgColor={bgColor}>
            {filteredTasks.map((task: Task, index: number) => (
              <TaskComponent
                index={index}
                taskId={task.id}
                icon={Lozenge}
                iconProps={{
                  text: title,
                  icon: icon,
                  bgColor: badgeBgColor,
                  color: badgeColor,
                }}
                key={task.id}
                {...task}
              />
            ))}
            {provided.placeholder}
            <AddTaskButton
              icon={<PlusIcon />}
              buttonText="Новая задача"
              color={buttonColor}
              onClick={handleAddTask}
            />
          </Body>
        </Container>
      )}
    </Droppable>
  );
};
