export default {
    target: 'static', // Use static site generation (for deployment to Vercel or similar)
    ssr: false, // Disable server-side rendering if you only need a static site
  
    // Custom build configuration
    app: {
      baseURL: '/', // Base URL for your app (use '/' if deploying at the root level)
      buildAssetsDir: '/_nuxt/', // Directory where Nuxt will place built assets
    },
  
    // Define the fallback for 404 errors (optional)
    generate: {
      fallback: true, // This allows the app to serve index.html for routes not found
    },
  }
  