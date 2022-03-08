import DarkModeToggleButton from 'components/DarkModeToggleButton/DarkModeToggleButton';
import LinkedInLink from 'components/Links/LinkedInLink';
import { StyledNav } from './Styles';

const Nav = () => {
  return (
    <StyledNav>
      <LinkedInLink />
      <DarkModeToggleButton />
    </StyledNav>
  );
};

export default Nav;
