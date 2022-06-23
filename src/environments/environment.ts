export const environment = {
  production: false,
  foo_api: 'http://localhost:8080/foo/',
  authResourceServerConfig: {
    allowedUrls: ['http://localhost:8080/foo'],
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
