import { CalendarIcon } from '../icons/CalendarIcon';
import { NotePadIcon } from '../icons/NotePadIcon';
import { ZapIcon } from '../icons/ZapIcon';
export const TASK_DICTIONARY = {
  assignees: {
    '1': 'Иван Иванов',
    '2': 'Мария Смирнова',
    '3': 'Дмитрий Алексеев',
  },
  priorities: {
    '0': 'Low',
    '1': 'Medium',
    '2': 'High',
  },
  statuses: {
    '0': 'В ожидании',
    '1': 'В работе',
    '2': 'Готово',
    '3': 'Тестирование',
  },
  columns: {
    '0': {
      title: 'В ожидании',
      icon: ZapIcon,
      buttonColor: 'rgba(11, 111, 98, 1)',
      bgColor: 'rgba(245, 250, 249, 1)',
      badgeColor: 'rgba(11, 111, 98, 1)',
      badgeBgColor: 'rgba(212, 247, 243, 1)',
    },
    '1': {
      title: 'В работе',
      icon: NotePadIcon,
      buttonColor: 'rgba(111, 105, 11, 1)',
      bgColor: 'rgba(250, 250, 245, 1)',
      badgeColor: 'rgba(111, 105, 11, 1)',
      badgeBgColor: 'rgba(247, 245, 212, 1)',
    },
    '2': {
      title: 'Готово',
      icon: NotePadIcon,
      buttonColor: 'rgba(65, 11, 111, 1)',
      bgColor: 'rgba(248, 245, 250, 1)',
      badgeColor: 'rgba(65, 11, 111, 1)',
      badgeBgColor: 'rgba(231, 212, 247, 1)',
    },
    '3': {
      title: 'Тестирование',
      icon: CalendarIcon,
      buttonColor: 'rgba(11, 46, 111, 1)',
      bgColor: 'rgba(245, 247, 250, 1)',
      badgeColor: 'rgba(11, 46, 111, 1)',
      badgeBgColor: 'rgba(212, 224, 247, 1)',
    },
  },
};
