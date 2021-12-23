import * as S from './style'
import Titulo from '@components/Tipografia/titulo'
import Texto from '@components/Tipografia/texto'

export default function BannerHome() {
  return (
    <S.Banner>
      <S.Content>
        <Titulo>The nature candle</Titulo>
        <Texto>
          All handmade with natural soy wax, Candleaf is a companion for all
          <br />
          your pleasure moments
        </Texto>
      </S.Content>
    </S.Banner>
  )
}
