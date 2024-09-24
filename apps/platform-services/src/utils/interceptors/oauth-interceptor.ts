import axios from 'axios';

import { User } from 'oidc-client-ts';

function getUser() {
  const oidcStorage = sessionStorage.getItem(
    `oidc.user:${import.meta.env.VITE_OIDC_AUTHORITY}:${import.meta.env.VITE_OIDC_CLIENT_ID}`,
  );
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}

axios.interceptors.request.use(function (config) {
  const token = getUser()?.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
