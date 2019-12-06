import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${props => (props.primary === 'false' ? 'red' : 'blue')};
`;

export default StyledSpan;
