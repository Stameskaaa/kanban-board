import { ReactNode } from 'react';

export interface Task {
  id: string;
  taskName: string;
  description: string;
  assigneeId: 1 | 2 | 3;
  dueDate: string;
  priorityId: 0 | 1 | 2;
  statusId: statuses;
}

export type statuses = 0 | 1 | 2 | 3;

export interface LozengeProps {
  text: string;
  icon?: ReactNode;
  bgColor: string;
  color: string;
}
