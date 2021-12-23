import styled from 'styled-components'

export const ProdutoWrapper = styled.section`
  max-width: 100%;
  margin: 0 auto;
  padding: 7rem 0;
  text-align: center;
  width: var(--container);
`

export const ProdutoLista = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 5rem 0;

  @media (max-width: 767px) {
    justify-content: center;
    padding: 0 1.5rem;
  }
`
