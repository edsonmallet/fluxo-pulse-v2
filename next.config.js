module.exports = {
  env: {
    MYSQL_HOST: 'q3vtafztappqbpzn.cbetxkdyhwsb.us - east - 1.rds.amazonaws.com',
    MYSQL_DATABASE: 'tjhr611dvuwm1eor',
    MYSQL_USERNAME: 'ycmqr9oyn9txqo06',
    MYSQL_PASSWORD: 'cow2ek9ygrk9a5pq',
    MYSQL_PORT: '3306',
    API_DEV: 'http://127.0.0.1:3344/api/v1',
    API_PROD: 'https://dev-app-fluxo-live.herokuapp.com/api/v1'
  },
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: 'https://app.fluxo.live/api/v1'
  },
}
