import { Button, Text } from '@olmero/common-ui';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { logger } from '@olmero/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const PluralExamples: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  /*
    Logging because i18next-scanner export automatically only as 'plural'
    Whenever a t() is called with count parameter
   */
  logger.info(t('books_count_zero'));
  logger.info(t('books_count_one'));
  logger.info(t('books_count_other'));

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2">
        <Button.Root onClick={decrementCount}>
          <Button.Icon icon={faMinus} />
          <Text>Decrement</Text>
        </Button.Root>
        <Text>{count}</Text>
        <Button.Root onClick={incrementCount}>
          <Button.Icon icon={faPlus} />
          <Text>Increment</Text>
        </Button.Root>
        <div className="flex flex-row gap-half items-center">
          <Text weight={Text.weights?.BOLD}>Result:</Text>
          <Text>{t('books_count', { count })}</Text>
        </div>
      </div>
    </div>
  );
};
