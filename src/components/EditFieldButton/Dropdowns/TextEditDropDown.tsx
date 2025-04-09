import { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { DropDownContainer } from '../../../styles/mixins';

const TextEditField = styled.input`
  ${DropDownContainer}
`;

interface TextEditDropDownProps extends InputHTMLAttributes<HTMLInputElement> {
  setNewData: (value: string) => void;
}

export const TextEditDropDown = forwardRef<HTMLInputElement, TextEditDropDownProps>(
  ({ onBlur, value, setNewData, ...rest }, ref) => {
    return (
      <TextEditField
        ref={ref}
        onBlur={onBlur}
        onChange={(e) => setNewData(e.target.value)}
        value={value}
        {...rest}
      />
    );
  },
);
