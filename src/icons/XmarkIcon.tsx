import IconWrapper from './IconWrapper';

export const XmarkIcon = ({ size = '16px' }) => {
  return (
    <IconWrapper size={size}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" fill="none" />
        <polygon
          points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 
      13.293,14.707 14.707,13.293 9.414,8"
        />
      </svg>
    </IconWrapper>
  );
};
