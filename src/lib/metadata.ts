import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Neel Shah', // TODO: Add a custom title
  description = "Neel Shah is a software engineer building scalable systems across agentic AI, cloud infrastructure, and full-stack applications.",
  image = '/thumbnail.png', // TODO: Add a custom image
  icons = '/avatar.svg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@SpartaNeel1010'
    },
    icons,
    metadataBase: new URL('https://github.com/SpartaNeel1010'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
