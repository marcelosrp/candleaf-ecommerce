import { FcInTransit } from '@react-icons/all-files/fc/FcInTransit'
import Texto from '@components/Tipografia/texto'

import * as S from './styles'

export default function MensagemFrete() {
  return (
    <S.MensagemFrete>
      <Texto>
        <strong>
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </strong>
      </Texto>

      <S.Frete>
        free shipping
        <FcInTransit />
      </S.Frete>
    </S.MensagemFrete>
  )
}
