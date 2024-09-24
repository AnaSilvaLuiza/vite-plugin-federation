import { render } from '@testing-library/react';

import LanguagesModal from '../languages-modal';
import { LocaleProvider } from '@olmero/core';

describe('LanguagesDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguagesModal />, { wrapper: LocaleProvider });
    expect(baseElement).toBeTruthy();
  });
});
