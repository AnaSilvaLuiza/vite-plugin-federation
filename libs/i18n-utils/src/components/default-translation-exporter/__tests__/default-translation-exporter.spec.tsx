import { render } from '@testing-library/react';

import DefaultTranslationExporter from '../default-translation-exporter';

describe('DefaultTranslationExporter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultTranslationExporter />);
    expect(baseElement).toBeTruthy();
  });
});
