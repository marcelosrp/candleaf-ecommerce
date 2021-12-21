import styled from 'styled-components'

export const Header = styled.header`
  border-bottom: 1px solid var(--cinza2);
  height: 7.5rem;
  width: 100%;

  @media (max-width: 767px) {
    padding: 0 1.5rem;
  }
`

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  width: var(--container);
`
