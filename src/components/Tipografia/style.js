import styled from 'styled-components'

export const Titulo = styled.h1`
  color: var(--tipografia);
  font-family: var(--secondary-font);
  font-size: 4rem;
  line-height: 57.6px;

  @media (max-width: 767px) {
    line-height: 47.6px;
  }
`

export const Texto = styled.p`
  color: var(--tipografia);
  font-family: var(--primary-font);
  font-weight: var(--normal);
  font-size: 1.8rem;
  line-height: 25.6px;

  @media (max-width: 767px) {
    line-height: 19px;
  }
`
