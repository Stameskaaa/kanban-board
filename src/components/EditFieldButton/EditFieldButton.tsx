import React, { ReactNode, useState, useRef } from 'react';
import { TextEditDropDown } from './Dropdowns/TextEditDropDown';
import { DateEditDropDown } from './Dropdowns/DateEditDropDown';
import { PriorityEditDropDown } from './Dropdowns/PriorityEditDropDown';
import { LongTextEditDropDown } from './Dropdowns/LongTextEditDropDown';
import { SelectAssigneeDropDown } from './Dropdowns/SelectAssigneeDropDown';
import { Button, ButtonText, Wrapper } from './EditFieldButton.Styled';

type EditFieldVariants = 'priority' | 'text' | 'date' | 'longText' | 'selector';

interface EditFieldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  buttonText: string;
  editData: string;
  setNewData: (newData: string) => void;
  variant: EditFieldVariants;
}

export const EditFieldButton: React.FC<EditFieldButtonProps> = ({
  icon,
  buttonText,
  editData,
  setNewData,
  variant,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dropDownRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleFocus = () => setIsEditing(true);

  const handleBlur = (e: React.FocusEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.relatedTarget) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.relatedTarget)
    ) {
      setIsEditing(false);
    }
  };

  let EditFieldComponent;
  switch (variant) {
    case 'priority':
      EditFieldComponent = PriorityEditDropDown;
      break;
    case 'text':
      EditFieldComponent = TextEditDropDown;
      break;
    case 'date':
      EditFieldComponent = DateEditDropDown;
      break;
    case 'longText':
      EditFieldComponent = LongTextEditDropDown;
      break;
    case 'selector':
      EditFieldComponent = SelectAssigneeDropDown;
      break;
    default:
      EditFieldComponent = TextEditDropDown;
  }

  return (
    <Wrapper>
      <Button ref={buttonRef} onFocus={handleFocus} onBlur={handleBlur} {...props}>
        {icon && icon} <ButtonText>{buttonText}</ButtonText>
      </Button>
      {isEditing && (
        <EditFieldComponent
          ref={dropDownRef as any}
          onBlur={handleBlur}
          setNewData={(value) => setNewData(value)}
          value={editData}
        />
      )}
    </Wrapper>
  );
};
