import { ReactNode } from 'react';

export interface Task {
  taskName: string;
  description: string;
  assigneeId: 1 | 2 | 3;
  dueDate: string;
  priorityId: 0 | 1 | 2;
  statusId: 0 | 1 | 2 | 3;
}

export interface LozengeProps {
  text: string;
  icon?: ReactNode;
  bgColor: string;
  color: string;
}
