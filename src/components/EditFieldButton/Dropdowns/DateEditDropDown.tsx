import { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const DateEditField = styled.input`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
  top: calc(100% + 1px);
`;

interface DateEditDropDownProps extends InputHTMLAttributes<HTMLInputElement> {}

export const DateEditDropDown = forwardRef<HTMLInputElement, DateEditDropDownProps>(
  ({ onBlur, onChange, value, ...rest }, ref) => {
    return (
      <DateEditField
        type="date"
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        {...rest}
      />
    );
  },
);
