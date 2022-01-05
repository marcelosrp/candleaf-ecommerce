import PropTypes from 'prop-types'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Copyright from '@components/Copyright'

import * as S from './styles'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
      <Copyright />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
