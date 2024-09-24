import { render } from '@testing-library/react';

import LanguagesDropdown from '../languages-dropdown';

describe('LanguageSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguagesDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
