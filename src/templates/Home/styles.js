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

export const Beneficios = styled.section`
  background-color: #f7f8fa;
  height: 80rem;
  width: 100%;

  @media (max-width: 767px) {
    height: auto;
    padding: 5rem 0;
  }
`

export const BeneficiosWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  width: var(--container);

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const BeneficiosTexto = styled.div`
  height: 34rem;
  width: 52.5rem;

  @media (max-width: 767px) {
    height: auto;
    margin-bottom: 5rem;
    padding: 0 1.5rem;
    width: 100%;
  }

  h2 {
    color: var(--verde);
    font-size: var(--small);
    font-weight: var(--normal);
    margin: 1rem 0;
  }
`

export const BeneficiosLista = styled.ul`
  list-style-type: none;
  margin: 4rem 0 6rem 0;
`

export const BeneficiosItem = styled.li`
  align-items: center;
  display: flex;
  font-family: var(--secondary-font);
  font-size: var(--small);
  gap: 1rem;
  margin: 1.5rem 0;
`

export const BeneficiosImg = styled.figure`
  background-color: #fff;
  filter: drop-shadow(0 90px 75px rgba(0, 0, 0, 0.2));
  height: 37.7rem;
  width: 54rem;

  @media (max-width: 767px) {
    height: auto;
    width: 90%;
  }
`
