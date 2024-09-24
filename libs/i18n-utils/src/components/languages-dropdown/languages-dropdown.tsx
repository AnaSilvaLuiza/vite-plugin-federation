import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import { CoreComponent, CoreComponentProps, useMergedRef } from '@olmero/core';
import { Dropdown, DropdownProps } from '@olmero/common-ui';
import { LANGUAGES, normalizeLanguage } from '@platform-services-ui/i18n-utils';
import { renderMenuItem } from './languages-dropdown-item';
import { useTranslation } from 'react-i18next';

export interface LanguagesDropdownProps extends CoreComponentProps {
  onChange?: (selected: string) => void;
}

export const LanguagesDropdown: CoreComponent<LanguagesDropdownProps, HTMLDivElement> = forwardRef<
  HTMLDivElement,
  LanguagesDropdownProps
>(({ id, 'data-testid': dataTestId, className, onChange }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(ref, internalRef);
  const { i18n } = useTranslation();
  const [value, setValue] = useState(normalizeLanguage(i18n.language));

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ value: any }>) => {
      setValue(event.target.value);
      i18n.changeLanguage(event.target.value);

      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange, i18n],
  );

  const languageSelectorProps: DropdownProps = useMemo(
    () => ({
      id,
      'data-testid': dataTestId,
      className,
      ref: mergedRef,
      inputClassName: '!flex !items-center gap-single',
      onChange: handleChange,
      value,
    }),
    [id, dataTestId, className, mergedRef, handleChange, value],
  );

  return <Dropdown {...languageSelectorProps}>{LANGUAGES.map(renderMenuItem)}</Dropdown>;
});

LanguagesDropdown.displayName = 'LanguageSelector';

export default LanguagesDropdown;
