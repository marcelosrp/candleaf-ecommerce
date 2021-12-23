import { RiPlantFill } from '@react-icons/all-files/ri/RiPlantFill'
import Titulo from '@components/Tipografia/titulo'
import Texto from '@components/Tipografia/texto'
import Button from '@ui/Button'

import * as S from './style'

export default function Hero() {
  return (
    <S.Banner>
      <S.Content>
        <RiPlantFill />
        <Titulo>The nature candle</Titulo>
        <Texto>
          All handmade with natural soy wax, Candleaf is a companion for all
          <br />
          your pleasure moments
        </Texto>
        <Button element="link" href="/discovery">
          Discovery our collection
        </Button>
      </S.Content>
    </S.Banner>
  )
}
