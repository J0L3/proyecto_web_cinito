export const environment = {
  production: false,
  peliculas_api: 'http://localhost/php/cinito_backend/peliculas/',
  authResourceServerConfig: {
    allowedUrls: ['http://localhost/php/cinito_backend/peliculas/'],
    sendAccessToken: true,
  },
  authConfig: {
    issuer: 'http://localhost:8180/auth/realms/cinito',
    redirectUri: window.location.origin,
    clientId: 'cinito-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
  },
};
