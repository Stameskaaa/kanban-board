import { forwardRef, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import { DropDownContainer } from '../../../styles/mixins';

const LongTextEditField = styled.textarea`
  ${DropDownContainer}
  resize: none;
  font-size: 14px;
`;

interface LongTextEditDropDownProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  setNewData: (value: string) => void;
}

export const LongTextEditDropDown = forwardRef<HTMLTextAreaElement, LongTextEditDropDownProps>(
  ({ onBlur, setNewData, value, ...rest }, ref) => {
    return (
      <LongTextEditField
        ref={ref}
        onBlur={onBlur}
        onChange={(e) => setNewData(e.target.value)}
        value={value}
        rows={3}
        {...rest}
      />
    );
  },
);
