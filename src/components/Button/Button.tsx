import styled from 'styled-components/macro';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon';
}

const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.button.bg};
  color: ${({ theme }) => theme.button.color};
  border: 2px solid transparent;
  padding: 1rem 2rem;
  margin: 0;
  border-radius: 0.25rem;
  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  ${({ variant }) =>
    variant === 'icon' &&
    `
      display: inline-flex;
      padding: 0.5rem;
      height: max-content;
  `}
`;

Button.defaultProps = {
  variant: 'primary'
};

export default Button;
