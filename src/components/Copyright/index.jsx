import { FcLike } from '@react-icons/all-files/fc/FcLike'

import * as S from './styles'

export default function Copyright() {
  return (
    <S.Copy>
      <S.CopyWrapper>
        <p>©Candleaf All Rights Reserved.</p>
        <p>
          Designed with <FcLike /> by{' '}
          <a
            href="https://uxbly.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            uxbly
          </a>
        </p>
      </S.CopyWrapper>
    </S.Copy>
  )
}
