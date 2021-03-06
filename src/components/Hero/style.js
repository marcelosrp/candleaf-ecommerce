import styled from 'styled-components'

export const Banner = styled.section`
  align-items: center;
  background-image: url('/assets/banner-destaque-home.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 74rem;
  justify-content: center;
  width: 100%;

  @media (max-width: 767px) {
    height: 50rem;
  }

  @media (min-width: 1700px) {
    background-size: auto;
  }
`

export const Content = styled.div`
  align-items: center;
  background-color: rgba(247, 248, 250, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 34.9rem;
  justify-content: center;
  text-align: center;
  width: 73rem;

  @media (max-width: 767px) {
    padding: 0 1.5rem;
    width: 90%;
  }

  svg {
    color: var(--verde);
    font-size: 3.8rem;
  }

  p {
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
`
