import styled from 'styled-components';
import { flexCenter } from '../styles/mixins';

interface IconWrapperProps {
  size?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  flex-shrink: 0;
  ${flexCenter}
  width: ${({ size }) => size || '16px'};
  height: ${({ size }) => size || '16px'};
`;

export default IconWrapper;
