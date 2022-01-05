import styled from 'styled-components'

export const Thumbproduto = styled.figure`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  height: ${({ size }) => (size === 'large' ? '433px' : '120px')};
  justify-content: center;
  width: ${({ size }) => (size === 'large' ? '540px' : '160px')};
`
