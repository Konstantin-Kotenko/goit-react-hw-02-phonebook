import styled from 'styled-components';

export const Box = styled.div`
  margin: 0 auto;
  align-items: center;
  width: 380px;
  background-color: aqua;
  border-radius: ${({ theme }) => theme.radii.normal};
`;
