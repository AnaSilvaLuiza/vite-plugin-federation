import { StrictMode } from 'react';
import { CommonUIThemeProvider } from '@olmero/common-ui';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocaleProvider } from '@olmero/core';
import { AuthProvider } from 'react-oidc-context';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BreadcrumbProvider } from '@olmero/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { YupLocaleProvider } from '@platform-services-ui/i18n-utils';
import * as ReactDOM from 'react-dom/client';
import router from './pages/router';
import './utils/interceptors/oauth-interceptor';
import '@platform-services-ui/i18n-utils/i18n-configuration';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY,
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
  redirect_uri: window.location.origin + window.location.pathname,
};

root.render(
  <StrictMode>
    <CommonUIThemeProvider>
      <BreadcrumbProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <LocaleProvider>
            <AuthProvider {...oidcConfig}>
              <QueryClientProvider client={queryClient}>
                <YupLocaleProvider>
                  <RouterProvider router={router} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </YupLocaleProvider>
              </QueryClientProvider>
            </AuthProvider>
          </LocaleProvider>
        </LocalizationProvider>
      </BreadcrumbProvider>
    </CommonUIThemeProvider>
  </StrictMode>,
);
