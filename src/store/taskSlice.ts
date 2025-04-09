import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialTasks } from '../data/initialTasks';
import { Task } from '../types/types';

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
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
