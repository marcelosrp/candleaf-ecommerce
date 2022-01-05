import Layout from '@components/Layout'
import { NextSeo } from 'next-seo'
import ThumbProdutoInterna from '@components/ThumbProdutoInterna'

import * as S from './styles'

export default function ProductTemplate() {
  return (
    <Layout>
      <NextSeo
        title="Candleaf :: Product"
        description="A simple NextJS Boilerplate to start an project"
        canonical="https://candleaf-ecommerce.vercel.app/"
        openGraph={{
          url: 'https://candleaf-ecommerce.vercel.app/',
          title: 'Candleaf',
          description: 'A simple NextJS Boilerplate to start an project',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Candleaf'
            }
          ],
          site_name: 'Candleaf'
        }}
      />

      <S.WrapperProduto>
        <S.WrapperItem>
          <ThumbProdutoInterna size="large" />
        </S.WrapperItem>
        <S.WrapperItem></S.WrapperItem>
      </S.WrapperProduto>
    </Layout>
  )
}
