import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--branco);
  border-bottom: 1px solid var(--cinza2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  padding: 1.5rem;
  width: var(--container);
`

export const MenuMobile = styled.div`
  border-top: 1px solid var(--cinza2);
  padding: 1.5rem;
  width: 100%;
`
