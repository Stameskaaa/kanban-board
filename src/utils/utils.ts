export const formatDate = (input: Date | string | number | null | undefined): string => {
  if (!input) return '';

  const date = new Date(input);

  if (isNaN(date.getTime())) {
    return '';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};
