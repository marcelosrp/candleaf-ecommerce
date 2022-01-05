import PropTypes from 'prop-types'
import Header from '@components/Header'
import Footer from '@components/Footer'

import * as S from './styles'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
