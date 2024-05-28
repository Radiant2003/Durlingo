import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Durlingo',
    short_name: 'Durlingo',
    description: 'Next.js language learning PWA',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: "/icon.svg",
        sizes: "16x16",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: "/apple-icon.png",
        sizes: "80x80",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable"
      },
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable"
      },
    ]
  }
}