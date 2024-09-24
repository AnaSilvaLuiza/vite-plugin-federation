import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { CoreComponent, CoreComponentProps, useLocale, useMergedRef } from '@olmero/core';
import { Button, Modal, Tabs, Text } from '@olmero/common-ui';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '@platform-services-ui/i18n-utils';
import cx from 'classnames';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export type LanguagesModalProps = CoreComponentProps;

export const LanguagesModal: CoreComponent<LanguagesModalProps, HTMLDivElement> = forwardRef<
  HTMLDivElement,
  LanguagesModalProps
>(({ id, 'data-testid': dataTestId, className }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(ref, internalRef);
  const { t, i18n } = useTranslation();
  const { switchLocale } = useLocale();
  const [open, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const currentLanguage = useMemo(() => {
    return LANGUAGES.find(language => language.value === i18n.language);
  }, [i18n.language]);

  const tabs = [
    {
      label: t('languages_modal_language_tab'),
      value: '1',
    },
  ];

  const handleClick = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    if (i18n.language) {
      switchLocale(new Intl.Locale(i18n.language));
    }
  }, [i18n.language, switchLocale]);

  const languagesDialogProps = useMemo(
    () => ({
      id,
      'data-testid': dataTestId,
      className: cx([className, 'w-full']),
      ref: mergedRef,
    }),
    [id, dataTestId, className, mergedRef],
  );

  return (
    <div {...languagesDialogProps}>
      <Button.Root
        onClick={() => setIsOpen(true)}
        type={Button.Root.types?.GHOST}
        className="!w-[44px] !bg-bfg-utility-grey-60 !p-0"
      >
        <img className="w-5 h-5" src={currentLanguage?.flag} alt="country flag" />
      </Button.Root>
      <Modal
        open={open}
        handleClose={handleClose}
        showActionButtons={false}
        shouldShowCloseButton={false}
        customWidth={800}
      >
        <Button.Root
          onClick={() => setIsOpen(false)}
          type={Button.Root.types?.GHOST}
          className="!w-[44px] absolute right-0 top-half"
        >
          <Button.Icon icon={faXmark} className="text-black" />
        </Button.Root>

        <div className="flex flex-col p-single gap-single-large">
          <Tabs tabs={tabs} value={tabs[0].value} />

          <div className="flex flex-row flex-wrap gap-single">
            {LANGUAGES.map(language => {
              return (
                <div
                  key={language.value}
                  onClick={() => handleClick(language.value)}
                  className={cx(
                    [
                      'flex flex-col w-[175px] rounded-md p-single border ease-in duration-75',
                      language.value === i18n.language
                        ? 'border-black'
                        : 'border-transparent cursor-pointer hover:bg-bfg-utility-grey-20',
                    ].filter(Boolean),
                  )}
                >
                  <Text>{language.label}</Text>
                  <Text color={Text.colors?.HINT}>{language.countryName}</Text>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
});

LanguagesModal.displayName = 'LanguagesDialog';

export default LanguagesModal;
