import React from 'react';
import { MenuItem } from '@mui/material';
import { Text } from '@olmero/common-ui';
import { Language } from '@platform-services-ui/i18n-utils';

export const renderMenuItem = (language: Language) => {
  return (
    <MenuItem
      key={`menu-item-${language.value}`}
      value={language.value}
      className="flex flex-row gap-single items-center justify-between w-full"
    >
      <img className="w-5 h-5" src={language.flag} alt="country flag" />
      <Text element={Text.elements?.SPAN}>{language.label}</Text>
    </MenuItem>
  );
};
