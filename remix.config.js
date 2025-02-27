/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  tailwind: true,
  postcss: true,
  serverModuleFormat: 'cjs',
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    // v2_routeConvention: true,
  },
  serverDependenciesToBundle: [
    'axios',
    'd3',
    /^d3-*/,
    'nivo',
    /^nivo-*/,
    /^@nivo*/,
    'delaunator',
    'internmap',
    'robust-predicates',
  ],
  serverMinify: process.env.NODE_ENV === 'production',
}
