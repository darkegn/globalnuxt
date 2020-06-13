
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
 */

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'styleSheet', href:'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'},
      {rel:'styleSheet', href:'https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap'},
      {rel:'styleSheet', href:'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel:'styleSheet', href:'assets/style.css'},
    ],
    script:[
      {src:'https://code.jquery.com/jquery-3.5.1.min.js'},
      {src:'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
      {src:'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
