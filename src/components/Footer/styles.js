import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: var(--preto);
  padding: 5rem 0;
  width: 100%;

  @media (max-width: 767px) {
    padding: 5rem 0 0 0;
  }
`

export const FooterWrrapper = styled.div`
  align-items: center;
  border-top: 2px solid var(--branco);
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  padding-top: 2rem;
  width: var(--container);

  @media (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1.5rem;
  }
`

export const FooterLogo = styled.figure`
  width: 27rem;

  @media (max-width: 767px) {
    width: 100%;
  }

  figcaption {
    color: var(--branco);
    font-family: var(--secondary-font);
    font-size: var(--small);
    margin-top: 1rem;
  }
`

export const FooterNav = styled.nav`
  display: flex;
  gap: 5rem;
  justify-content: center;
  padding-top: 1.5rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 5rem;

    ul {
      flex: 1 1 auto;
    }
  }
`

export const FooterNavItem = styled.li`
  color: #e1e1e1;
  font-family: var(--secondary-font);
  font-size: var(--small);
  list-style-type: none;
  margin-bottom: 1.5rem;

  &.titulo {
    color: var(--verde);
    margin-bottom: 2rem;
  }
`
