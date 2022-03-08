import styled from 'styled-components/macro';
import { SiLinkedin } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import useDarkMode from 'styles/useDarkMode';
import { LINKEDIN_PROFILE_URL } from 'config';
import type { ThemeVariant } from 'styles/themes';

const transparentWhite = 'rgba(255, 255, 255, 0.8)';
const transparentWhiteBase = 'rgba(240, 240, 240, 0.8)';

type StyledLinkProps = {
  variant: ThemeVariant;
};

const LinkAttrs = {
  target: '_blank',
  rel: 'no-referrer'
};

/** Linkedin Specific Link */
const StyledLink = styled.a.attrs(LinkAttrs)<StyledLinkProps>`
  background: ${({ variant }) =>
    variant === 'light' ? '#0b65c2' : transparentWhiteBase};
  display: inline-flex;

  color: ${({ variant }) => (variant === 'dark' ? '#0b65c2' : '#ffffff')};
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;

  :hover {
    background: ${({ variant }) =>
      variant === 'light' ? '#0f6cf1' : transparentWhite};
  }
`;

const StyledLinkedInIcon = styled(SiLinkedin)`
  margin-right: 0.5rem;
`;

const StyledFiExternalLinkIcon = styled(FiExternalLink)`
  margin-left: 0.5rem;
`;

const LinkedInLink = () => {
  const { darkModeEnabled } = useDarkMode();
  return (
    <StyledLink
      href={LINKEDIN_PROFILE_URL}
      variant={darkModeEnabled ? 'dark' : 'light'}
    >
      <StyledLinkedInIcon /> connect
      <StyledFiExternalLinkIcon size="0.7rem" />
    </StyledLink>
  );
};

export default LinkedInLink;
