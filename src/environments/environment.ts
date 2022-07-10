export const environment = {
  production: false,
  peliculas_api: 'http://localhost:80/peliculas/',
  authResourceServerConfig: {
    allowedUrls: ['http://localhost:8080/peliculas'],
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
