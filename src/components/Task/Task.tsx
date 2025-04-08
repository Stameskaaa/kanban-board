import { SuccessIcon } from '../../icons/SuccessIcon';
import { TrashIcon } from '../../icons/TrashIcon';
import { Lozenge } from '../Lozenge/Lozenge';
import { ZapIcon } from '../../icons/ZapIcon';
import * as Styled from './Task.Styled';
import { useState } from 'react';
import { EditFieldButton } from '../EditFieldButton/EditFieldButton';
import { UserIcon } from '../../icons/UserIcon';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { ListOrderIcon } from '../../icons/ListOrderIcon';
import { NotePadIcon } from '../../icons/NotePadIcon';

export const Task = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Стейт для хранения данных
  const [taskName, setTaskName] = useState('Регистрация/Вход на компонентах');
  const [assignee, setAssignee] = useState('Денис Иванов');
  const [date, setDate] = useState('04/04/25');
  const [priority, setPriority] = useState('Medium');
  const [description, setDescription] = useState(
    'Некоторое описание задачи небольшое, которое умещается в 2-3 строки',
  );

  // Функции для обновления данных
  const handleTaskNameChange = (newTaskName: string) => setTaskName(newTaskName);
  const handleAssigneeChange = (newAssignee: string) => setAssignee(newAssignee);
  const handleDateChange = (newDate: string) => setDate(newDate);
  const handlePriorityChange = (newPriority: string) => setPriority(newPriority);
  const handleDescriptionChange = (newDescription: string) => setDescription(newDescription);

  return (
    <Styled.Container onDoubleClick={() => setIsEditing((prev) => !prev)}>
      <Styled.Header>
        <SuccessIcon />
        {!isEditing ? (
          <Styled.HeaderTitle>{taskName}</Styled.HeaderTitle>
        ) : (
          <Styled.HeaderTitleEdit
            value={taskName}
            onChange={(e) => handleTaskNameChange(e.target.value)}
          />
        )}
        <Styled.TrashButton>
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
            <Styled.Date>{date}</Styled.Date>
          </Styled.AssigneeInfo>
          <Styled.TaskStatus>
            <Lozenge
              bgColor="var(--background-warning)"
              color="var(--text-warning)"
              text={priority}
            />
            <Lozenge
              text="В ожидании"
              icon={<ZapIcon />}
              bgColor="rgba(212, 247, 243, 1)"
              color="rgba(11, 111, 98, 1)"
            />
          </Styled.TaskStatus>
          <Styled.TaskDescription>{description}</Styled.TaskDescription>
        </>
      ) : (
        <div>
          <EditFieldButton
            variant="text"
            icon={<UserIcon />}
            buttonText="Добавить ответственного"
            editData={assignee}
            setNewData={handleAssigneeChange}
          />
          <EditFieldButton
            variant="date"
            icon={<CalendarIcon />}
            buttonText="Добавить дату"
            editData={date}
            setNewData={handleDateChange}
          />
          <EditFieldButton
            variant="priority"
            icon={<ListOrderIcon />}
            buttonText="Добавить приоритет"
            editData={priority}
            setNewData={handlePriorityChange}
          />
          <EditFieldButton
            variant="longText"
            icon={<NotePadIcon />}
            buttonText="Добавить описание"
            editData={description}
            setNewData={handleDescriptionChange}
          />
        </div>
      )}
    </Styled.Container>
  );
};
