import './App.css';
import { TaskBoard } from './components/TaskBoard/TaskBoard';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { AppContainer, InnerLine, Percentage, PercentageLine, ProgressBar } from './App.Styled';

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
