import MainPage from 'pages/MainPage'
import type { V2_MetaFunction } from '@remix-run/node'
import type { SitemapFunction } from 'remix-sitemap'

export const sitemap: SitemapFunction = () => ({
  priority: 1,
})

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Swetrix Analytics' },
    {
      name: 'description',
      content: 'Swetrix Analytics is a privacy-focused, open-source alternative to Google Analytics.',
    },
    {
      name: 'keywords',
      content: 'analytics, google analytics, privacy, open-source, alternative',
    },
  ]
}

export default function Index() {
  return <MainPage />
}
