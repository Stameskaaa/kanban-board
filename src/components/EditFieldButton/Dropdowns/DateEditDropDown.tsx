import { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { DropDownContainer } from '../../../styles/mixins';

const DateEditField = styled.input`
  ${DropDownContainer}
`;

interface DateEditDropDownProps extends InputHTMLAttributes<HTMLInputElement> {
  setNewData: (value: string) => void;
}

export const DateEditDropDown = forwardRef<HTMLInputElement, DateEditDropDownProps>(
  ({ onBlur, setNewData, value, ...rest }, ref) => {
    return (
      <DateEditField
        type="date"
        ref={ref}
        onBlur={onBlur}
        onChange={(e) => setNewData(e.target.value)}
        value={value}
        {...rest}
      />
    );
  },
);
