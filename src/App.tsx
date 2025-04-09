import styled from 'styled-components';
import './App.css';
import { TaskBoard } from './components/TaskBoard/TaskBoard';
import { flexColumn } from './styles/mixins';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const AppContainer = styled.div`
  ${flexColumn}
  gap: 24px;
  justify-content: space-between;
  padding: 24px;
  background-color: rgba(255, 255, 255, 1);
  height: calc(100vh - 16px);
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;

const Percentage = styled.span`
  color: rgba(83, 123, 243, 1);
  font-weight: 700;
  font-size: 20px;
  width: 62px;
`;

const PercentageLine = styled.div`
  position: relative;
  flex-grow: 1;
  height: 12px;
  border-radius: 9999px;
  padding: 6px;
  background-color: rgba(231, 232, 234, 1);
`;

const InnerLine = styled.div<{ percentage: number }>`
  inset: 0;
  transition: 0.3s width;
  width: ${(props: { percentage: number }) => `${props.percentage}%`};
  position: absolute;
  background-color: rgba(83, 123, 243, 1);
  padding: 6px;
  height: 12px;
  border-radius: 9999px;
`;

function App() {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const completedTasks = tasks.filter((task) => task.statusId === 2).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <AppContainer>
      <TaskBoard />
      <ProgressBar>
        <Percentage>{Math.round(completionPercentage)} %</Percentage> выполненных задач
        <PercentageLine>
          <InnerLine percentage={completionPercentage} />
        </PercentageLine>
      </ProgressBar>
    </AppContainer>
  );
}

export default App;
