import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialTasks } from '../data/initialTasks';

type Task = {
  taskName: string;
  description: string;
  assigneeId: number;
  dueDate: string;
  priorityId: number;
  statusId: number;
};

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: initialTasks,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ index: number; updatedTask: Partial<Task> }>) => {
      const { index, updatedTask } = action.payload;
      state.tasks[index] = { ...state.tasks[index], ...updatedTask };
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
