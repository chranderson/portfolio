import DarkModeToggleButton from 'components/DarkModeToggleButton/DarkModeToggleButton';
import Logo from 'components/Logo';

import { StyledNav } from './Styles';

const Nav = () => {
  return (
    <StyledNav>
      <Logo />
      <DarkModeToggleButton />
    </StyledNav>
  );
};

export default Nav;
