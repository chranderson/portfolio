import styled from 'styled-components/macro';
import { SIZE } from 'styles/mediaQueries';

export const Wrap = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  height: inherit;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 75rem;

  @media ${SIZE.SM} {
    margin: 0 auto;
  }
`;
