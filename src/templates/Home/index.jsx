import Layout from '@components/Layout'
import { NextSeo } from 'next-seo'
import BannerHome from '@components/BannerHome'

export default function HomeTemplate() {
  return (
    <Layout>
      <NextSeo
        title="Candleaf :: Home"
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

      <BannerHome />
    </Layout>
  )
}
