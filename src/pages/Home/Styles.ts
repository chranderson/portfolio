import styled from 'styled-components/macro';
import { SIZE } from 'styles/mediaQueries';

const borderRadius = '0.25rem';

export const Wrap = styled.div`
  max-width: 90rem;
  height: 100%;
  width: 100%;

  @media ${SIZE.SM} {
    margin-top: 2rem;
  }
`;

export const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Role = styled.h2`
  margin-top: 0;
  font-style: italic;
`;

export const Header = styled.header`
  padding: 1rem;
  grid-gap: 2rem;
  display: grid;
  border-radius: ${borderRadius};

  width: 100%;
  height: max-content;

  @media ${SIZE.SM} {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Figure = styled.figure`
  background: rgba(0, 0, 0, 0.3);
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
  min-height: 6rem;
`;

export const Section = styled.section`
  padding: 1rem;
`;
