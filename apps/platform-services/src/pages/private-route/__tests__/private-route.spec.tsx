import { render } from '@testing-library/react';
import PrivateRoute from '../private-route';

jest.mock('react-oidc-context', () => ({
  useAuth() {
    return {
      isLoading: false,
      isAuthenticated: false,
      signinRedirect: jest.fn(),
    };
  },
  hasAuthParams: jest.fn(),
}));

describe('Nav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrivateRoute>Test</PrivateRoute>);
    expect(baseElement).toBeTruthy();
  });
});
