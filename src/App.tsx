import styled from 'styled-components';
import './App.css';
import { TaskBoard } from './components/TaskBoard/TaskBoard';
import { flexColumn } from './styles/mixins';

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
`;

function App() {
  return (
    <AppContainer>
      <TaskBoard />
      <ProgressBar>
        <Percentage>20 %</Percentage>выполненных задач
      </ProgressBar>
    </AppContainer>
  );
}

export default App;
