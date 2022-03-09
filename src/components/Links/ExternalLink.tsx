import styled from 'styled-components/macro';
import { FiExternalLink } from 'react-icons/fi';

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 0.65rem;
  margin: 0.25rem;
  display: inline-flex;
  place-items: center;

  svg {
    margin-left: 0.25rem;
  }
`;

const ExternalLink = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) => (
  <StyledLink {...props} target="_blank">
    {children} <FiExternalLink />
  </StyledLink>
);

export default ExternalLink;
