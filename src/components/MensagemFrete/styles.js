import styled from 'styled-components'

export const MensagemFrete = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 100%;
  padding: 3rem 1.5rem;
  text-align: center;
  width: 50rem;
`

export const Frete = styled.span`
  align-items: center;
  color: var(--verde);
  display: flex;
  font-size: 2rem;
  font-weight: var(--bold);
  gap: 1rem;
  text-transform: uppercase;

  svg {
    font-size: 3rem;
  }
`
