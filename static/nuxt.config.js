export default {
    target: 'static', // Static site generation
    ssr: false, // Disable server-side rendering
    generate: {
      fallback: '404.html' // Fallback to prevent 404 errors
    },
    vite: false
  }
  