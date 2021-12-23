import styled from 'styled-components'

export const Card = styled.figure`
  background-color: #f7f8fa;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 5%);
  height: 25.6rem;
  overflow: hidden;
  width: 25.5rem;
`

export const Infos = styled.figcaption`
  align-items: flex-start;
  background-color: var(--branco);
  display: flex;
  flex-direction: column;
  height: 7.5rem;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
`

export const Nome = styled.h3`
  color: var(--preto2);
  font-family: var(--secondary-font);
  font-size: var(--small);
  font-weight: var(--semi);
`

export const Preco = styled.p`
  color: var(--verde);
  font-size: 1.7rem;
  font-weight: var(--semi);
  text-align: right;
  width: 100%;
`
