import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialTasks } from '../data/initialTasks';
import { statuses, Task } from '../types/types';

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: initialTasks as Task[],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ id: string; updatedTask: Partial<Task> }>) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
      }
    },
    reorderTasks: (
      state,
      action: PayloadAction<{
        sourceStatusId: number;
        destinationStatusId: number;
        sourceIndex: number;
        destinationIndex: number;
        taskId: string;
      }>,
    ) => {
      const { sourceStatusId, destinationStatusId, sourceIndex, destinationIndex, taskId } =
        action.payload;

      // Если задача перемещается внутри одной колонки
      if (sourceStatusId === destinationStatusId) {
        const tasksInColumn = state.tasks.filter((task) => task.statusId === sourceStatusId);
        const [movedTask] = tasksInColumn.splice(sourceIndex, 1);
        tasksInColumn.splice(destinationIndex, 0, movedTask);

        // Обновляем глобальный массив задач
        const updatedTasks = state.tasks.filter((task) => task.statusId !== sourceStatusId);
        state.tasks = [...updatedTasks, ...tasksInColumn];
      } else {
        // Если задача перемещается между колонками
        const sourceTasks = state.tasks.filter((task) => task.statusId === sourceStatusId);
        const destinationTasks = state.tasks.filter(
          (task) => task.statusId === destinationStatusId,
        );

        // Удаляем задачу из исходной колонки
        const [movedTask] = sourceTasks.splice(sourceIndex, 1);

        // Обновляем статус задачи и добавляем её в целевую колонку
        movedTask.statusId = destinationStatusId as statuses;
        destinationTasks.splice(destinationIndex, 0, movedTask);

        // Обновляем глобальный массив задач
        const remainingTasks = state.tasks.filter(
          (task) => task.statusId !== sourceStatusId && task.statusId !== destinationStatusId,
        );
        state.tasks = [...remainingTasks, ...sourceTasks, ...destinationTasks];
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, reorderTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
