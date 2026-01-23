const fontPreloadHeaders = [
  'Link: </fonts/turismo-cf-0.woff2>; rel=preload; as=font; crossorigin',
  'Link: </fonts/Museo-300.woff2>; rel=preload; as=font; crossorigin',
  // 'Link: <https://use.typekit.net/nkd7jjw.css>; rel=preload; as=style',
]

// Use it if we can't use H2 push
const fontPreloads = [
  // {
  //   // proxima-nova 400
  //   rel: 'preload',
  //   as: 'font',
  //   type: 'font/woff2',
  //   crossorigin: 'anonymous',
  //   href:
  //     'https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n4&v=3',
  // },
]

const fontStyleSheets = [
  // {
  //   rel: 'stylesheet',
  //   href: 'https://use.typekit.net/nkd7jjw.css',
  // },
]

const fontFaces = [
  {
    '@font-face': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      src: 'url("/fonts/Montserrat-Regular.woff2") format("woff2")',
    },
  },
  {
    '@font-face': {
      fontFamily: 'museo',
      fontStyle: 'normal',
      fontWeight: 300,
      src: 'url("/fonts/Museo-300.woff2") format("woff2")',
    },
  },
]

module.exports = {
  fontPreloadHeaders,
  fontPreloads,
  fontStyleSheets,
  fontFaces,
}
