import styled from 'styled-components'

export const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  padding: 0;
  width: 2rem;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    background-color: var(--preto);
    height: 0.2rem;
    position: relative;
    transition: all 0.3s linear;
    transform-origin: 1px;
    width: 2.5rem;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(38deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-40deg)' : 'rotate(0)')};
    }
  }
`
