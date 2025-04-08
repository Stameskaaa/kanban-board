import { forwardRef, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

const LongTextEditField = styled.textarea`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
  top: calc(100% + 1px);
  resize: none;
`;

interface LongTextEditDropDownProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const LongTextEditDropDown = forwardRef<HTMLTextAreaElement, LongTextEditDropDownProps>(
  ({ onBlur, onChange, value, ...rest }, ref) => {
    return (
      <LongTextEditField
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        rows={4}
        {...rest}
      />
    );
  },
);
