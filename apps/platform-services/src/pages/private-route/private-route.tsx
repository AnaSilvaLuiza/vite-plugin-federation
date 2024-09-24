import { ReactNode, useEffect } from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import { Icon } from '@olmero/common-ui';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export function PrivateRoute({ children }: Readonly<{ children: ReactNode }>) {
  const auth = useAuth();

  useEffect(() => {
    if (!hasAuthParams() && !auth.isAuthenticated && !auth.isLoading) {
      auth.signinRedirect();
    }

    if (hasAuthParams() && auth.isAuthenticated) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [auth]);

  if (auth.isLoading) {
    return (
      <div className={'flex items-center justify-center min-h-screen'}>
        <Icon icon={faRotateRight} className={'animate-spin size-40'} />
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return children;
  }
}

export default PrivateRoute;
