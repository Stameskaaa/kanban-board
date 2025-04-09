import React, { ReactNode, useState, useRef } from 'react';
import styled from 'styled-components';
import { ellipsisText } from '../../styles/mixins';
import { TextEditDropDown } from './Dropdowns/TextEditDropDown';
import { DateEditDropDown } from './Dropdowns/DateEditDropDown';
import { PriorityEditDropDown } from './Dropdowns/PriorityEditDropDown';
import { LongTextEditDropDown } from './Dropdowns/LongTextEditDropDown';

type EditFieldVariants = 'priority' | 'text' | 'date' | 'longText';

interface EditFieldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  buttonText: string;
  editData: string;
  setNewData: (newText: string) => void;
  variant: EditFieldVariants;
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 4px;
  padding: 8px;

  font-family: Inter;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: rgba(71, 71, 71, 1);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: rgba(237, 237, 237, 1);
  }

  &:active {
    background-color: rgba(217, 217, 217, 1);
  }
`;

const ButtonText = styled.span`
  ${ellipsisText}
`;

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
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setNewData(target.value);
          }}
          value={editData}
        />
      )}
    </Wrapper>
  );
};
