import { render, screen } from '@testing-library/react';

import Root from '../root';

jest.mock('../../../components/header/header', () => () => <div data-testid="header">Header</div>);
jest.mock('../../../components/breadcrumbs/breadcrumbs', () => () => <div data-testid="breadcrumbs"></div>);
jest.mock('../../../components/nav/nav', () => () => <div data-testid="nav"></div>);

describe('Root', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Root />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children components', () => {
    render(<Root />);
    expect(screen.getByTestId('nav')).toBeTruthy();
    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('breadcrumbs')).toBeTruthy();
  });
});
