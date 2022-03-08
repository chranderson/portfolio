import styled from 'styled-components/macro';
import { SIZE } from 'styles/mediaQueries';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 1rem;

  width: 100%;
  margin: 0 auto;

  a,
  button:not(:last-of-type) {
    margin-right: 1rem;
    height: 100%;
  }

  @media ${SIZE.SM} {
    padding: 2rem;
  } ;
`;
