// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/guruortmor1803outlook.onmicrosoft.com',
    clientId: 'b65d90d4-ec2d-4557-a14c-518a3702b175',
    redirectUri: 'http://localhost:3000'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'user.read'
  ]
}

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}

// Export the configured authProvider only if it hasn't been declared
if (!window.authProvider) {
  window.authProvider = new MsalAuthProvider(config, authenticationParameters, options);
}

export const authProvider = window.authProvider;
