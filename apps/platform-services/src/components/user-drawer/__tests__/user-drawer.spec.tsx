import { render } from '@testing-library/react';
import UserDrawer from '../user-drawer';

describe('UserDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
