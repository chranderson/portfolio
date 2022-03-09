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
  line-height: 2rem;
  @media ${SIZE.MD} {
    margin-bottom: 1rem;
    line-height: 2.8rem;
  }
`;

export const Role = styled.h2`
  margin-top: 0;
  font-style: italic;
  font-weight: 400;
  line-height: 1rem;

  @media ${SIZE.MD} {
    line-height: 2rem;
  }
`;

export const Header = styled.header`
  padding: 0.5rem;
  display: grid;
  border-radius: ${borderRadius};
  grid-gap: 1rem;
  width: 100%;
  grid-template-columns: minmax(8rem, 1fr) 1fr;
  place-items: center;

  @media ${SIZE.SM} {
    grid-gap: 2rem;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    background: rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-items: stretch;
  }
`;

export const HeroText = styled.div`
  @media ${SIZE.SM} {
    justify-content: start;
  }
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: end;
`;

export const Section = styled.section`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const AvatarWrap = styled.div`
  display: grid;
  place-items: center;

  a {
    transform: translateY(-30px);
  }
`;
