import styled from 'styled-components/macro';

export const Wrap = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  height: inherit;
`;

export const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
  display: grid;
  align-items: center;
  justify-content: center;
`;
