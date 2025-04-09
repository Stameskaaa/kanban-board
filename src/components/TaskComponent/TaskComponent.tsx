import { SuccessIcon } from '../../icons/SuccessIcon';
import { TrashIcon } from '../../icons/TrashIcon';
import { Lozenge } from '../Lozenge/Lozenge';
import * as Styled from './TaskComponent.Styled';
import { useState } from 'react';
import { EditFieldButton } from '../EditFieldButton/EditFieldButton';
import { UserIcon } from '../../icons/UserIcon';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { ListOrderIcon } from '../../icons/ListOrderIcon';
import { NotePadIcon } from '../../icons/NotePadIcon';
import { LozengeProps, Task } from '../../types/types';
import { TASK_DICTIONARY } from '../../constants/taskDictionary';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../store/taskSlice';

interface ExtendedTask extends Task {
  taskId: string;
  icon: React.ComponentType<any>;
  iconProps: LozengeProps;
}

export const TaskComponent: React.FC<ExtendedTask> = ({
  taskId,
  taskName,
  assigneeId,
  description,
  dueDate,
  priorityId,
  icon: Icon,
  iconProps,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const assignee = TASK_DICTIONARY.assignees[assigneeId];
  const priority = TASK_DICTIONARY.priorities[priorityId];

  const handleFieldChange = (field: keyof Task, value: string) => {
    const numericFields: (keyof Task)[] = ['assigneeId', 'priorityId', 'statusId'];
    const newValue = numericFields.includes(field) ? Number(value) : value;
    dispatch(updateTask({ id: taskId, updatedTask: { [field]: newValue } }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <Styled.Container onDoubleClick={() => setIsEditing((prev) => !prev)}>
      <Styled.Header>
        <SuccessIcon />
        {!isEditing ? (
          <Styled.HeaderTitle>{taskName}</Styled.HeaderTitle>
        ) : (
          <Styled.HeaderTitleEdit
            value={taskName}
            onChange={(e) => handleFieldChange('taskName', e.target.value)}
          />
        )}
        <Styled.TrashButton onClick={handleDeleteTask}>
          <TrashIcon />
        </Styled.TrashButton>
      </Styled.Header>

      {!isEditing ? (
        <>
          <Styled.AssigneeInfo>
            {assignee?.length > 0 && (
              <Styled.NameContainer>
                <Styled.Circle>{assignee.charAt(0).toLocaleUpperCase()}</Styled.Circle>{' '}
                <Styled.Name>{assignee}</Styled.Name>
              </Styled.NameContainer>
            )}
            <Styled.Point>•</Styled.Point>
            <Styled.Date>{dueDate}</Styled.Date>
          </Styled.AssigneeInfo>
          <Styled.TaskStatus>
            <Lozenge
              bgColor={TASK_DICTIONARY.prioritiesColors[priorityId].bgColor}
              color={TASK_DICTIONARY.prioritiesColors[priorityId].color}
              text={priority}
            />
            <Icon {...iconProps} />
          </Styled.TaskStatus>
          <Styled.TaskDescription>{description}</Styled.TaskDescription>
        </>
      ) : (
        <div>
          <EditFieldButton
            variant="text"
            icon={<UserIcon />}
            buttonText="Добавить ответственного"
            editData={assignee || ''}
            setNewData={(val) => handleFieldChange('assigneeId', val)}
          />
          <EditFieldButton
            variant="date"
            icon={<CalendarIcon />}
            buttonText="Добавить дату"
            editData={dueDate}
            setNewData={(val) => handleFieldChange('dueDate', val)}
          />
          <EditFieldButton
            variant="priority"
            icon={<ListOrderIcon />}
            buttonText="Добавить приоритет"
            editData={`${priorityId}` || '0'}
            setNewData={(val) => handleFieldChange('priorityId', val)}
          />
          <EditFieldButton
            variant="longText"
            icon={<NotePadIcon />}
            buttonText="Добавить описание"
            editData={description}
            setNewData={(val) => handleFieldChange('description', val)}
          />
        </div>
      )}
    </Styled.Container>
  );
};
