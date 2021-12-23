import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? '2rem' : '5rem')};
`

export const NavLink = styled.a`
  color: var(--preto);
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;

  &::after {
    content: '';
    height: 3px;
    width: 100%;
    background-color: var(--preto);
    position: absolute;
    bottom: -5px;
    left: 0;
    display: block;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`
