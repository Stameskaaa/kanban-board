import { TaskColumn } from '../TaskColumn/TaskColumn';
import { TASK_DICTIONARY } from '../../constants/taskDictionary';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  height: calc(100vh - 122px);
`;

export const TaskBoard = () => {
  return (
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
  );
};
