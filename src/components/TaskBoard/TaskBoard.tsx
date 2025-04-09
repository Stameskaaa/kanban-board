import { TaskColumn } from '../TaskColumn/TaskColumn';
import { TASK_DICTIONARY } from '../../constants/taskDictionary';
import styled from 'styled-components';
import { DragDropContext } from '@hello-pangea/dnd';
import { useDispatch } from 'react-redux';
import { reorderTasks } from '../../store/taskSlice';

const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  height: calc(100vh - 122px);
`;

export const TaskBoard = () => {
  const dispatch = useDispatch();

  const handleDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sourceStatusId = Number(source.droppableId);
    const destinationStatusId = Number(destination.droppableId);

    dispatch(
      reorderTasks({
        sourceStatusId,
        destinationStatusId,
        sourceIndex: source.index,
        destinationIndex: destination.index,
        taskId: draggableId,
      }),
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardContainer>
        {Object.entries(TASK_DICTIONARY.columns).map(([statusKey, columnData]) => {
          const Icon = columnData.icon;
          return (
            <TaskColumn
              buttonColor={columnData.buttonColor}
              icon={<Icon />}
              bgColor={columnData.bgColor}
              badgeColor={columnData.badgeColor}
              badgeBgColor={columnData.badgeBgColor}
              key={statusKey}
              statusKey={statusKey}
              title={columnData.title}
            />
          );
        })}
      </BoardContainer>
    </DragDropContext>
  );
};
