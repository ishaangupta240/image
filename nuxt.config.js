export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: '404.html',
  },
  // Disable Vite if not needed
  vite: false, 
}
