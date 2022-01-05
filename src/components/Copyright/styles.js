import styled from 'styled-components'

export const Copy = styled.section`
  background-color: #e5e5e5;
  font-family: var(--secondary-font);
  padding: 2rem 0;
  width: 100%;
`

export const CopyWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  width: var(--container);

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }

  a,
  p {
    color: var(--cinza);
    text-decoration: none;
  }
`
