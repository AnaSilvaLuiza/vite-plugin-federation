import React from 'react';
import { useTranslation } from 'react-i18next';
import { Namespaces, ValidationMessagesDefaultValues } from '@platform-services-ui/i18n-utils';

export const DefaultTranslationExporter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-half">
      <div>{t('home', { ns: Namespaces.Common, defaultValue: 'Home' })}</div>
      <div>{t('projects', { ns: Namespaces.Common, defaultValue: 'Projects' })}</div>
      <div>{t('project', { ns: Namespaces.Common, defaultValue: 'Project' })}</div>
      <div>{t('tender', { ns: Namespaces.Common, defaultValue: 'Tender' })}</div>
      <div>{t('documents', { ns: Namespaces.Common, defaultValue: 'Documents' })}</div>
      <div>{t('offers', { ns: Namespaces.Common, defaultValue: 'Offers' })}</div>
      <div>{t('suppliers', { ns: Namespaces.Common, defaultValue: 'Suppliers' })}</div>
      <div>{t('project_contract_volume_UP_TO_100K', { ns: Namespaces.Buyer, defaultValue: 'up to 100 thousand' })}</div>
      <div>{t('project_contract_volume_UP_TO_500K', { ns: Namespaces.Buyer, defaultValue: 'up to 500 thousand' })}</div>
      <div>{t('project_contract_volume_UP_TO_1M', { ns: Namespaces.Buyer, defaultValue: 'up to 1 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_5M', { ns: Namespaces.Buyer, defaultValue: 'up to 5 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_10M', { ns: Namespaces.Buyer, defaultValue: 'up to 10 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_15M', { ns: Namespaces.Buyer, defaultValue: 'up to 15 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_20M', { ns: Namespaces.Buyer, defaultValue: 'up to 20 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_25M', { ns: Namespaces.Buyer, defaultValue: 'up to 25 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_30M', { ns: Namespaces.Buyer, defaultValue: 'up to 30 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_45M', { ns: Namespaces.Buyer, defaultValue: 'up to 45 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_50M', { ns: Namespaces.Buyer, defaultValue: 'up to 50 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_60M', { ns: Namespaces.Buyer, defaultValue: 'up to 60 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_70M', { ns: Namespaces.Buyer, defaultValue: 'up to 70 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_80M', { ns: Namespaces.Buyer, defaultValue: 'up to 80 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_90M', { ns: Namespaces.Buyer, defaultValue: 'up to 90 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_100M', { ns: Namespaces.Buyer, defaultValue: 'up to 100 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_150M', { ns: Namespaces.Buyer, defaultValue: 'up to 150 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_200M', { ns: Namespaces.Buyer, defaultValue: 'up to 200 million' })}</div>
      <div>{t('project_contract_volume_UP_TO_250M', { ns: Namespaces.Buyer, defaultValue: 'up to 250 million' })}</div>
      <div>{t('project_contract_volume_FROM_250M', { ns: Namespaces.Buyer, defaultValue: 'from 250 million' })}</div>
      <div>{t('project_contract_volume_NOT_PROVIDED', { ns: Namespaces.Buyer, defaultValue: 'not provided' })}</div>
      <div>
        {t('validation_mixed_default', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Mixed.Default,
        })}
      </div>
      <div>
        {t('validation_string_required', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Required,
        })}
      </div>
      <div>
        {t('validation_string_length', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Length,
        })}
      </div>
      <div>
        {t('validation_string_min', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Min,
        })}
      </div>
      <div>
        {t('validation_string_max', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Max,
        })}
      </div>
      <div>
        {t('validation_string_email', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Email,
        })}
      </div>
      <div>
        {t('validation_string_url', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Url,
        })}
      </div>
      <div>
        {t('validation_string_uuid', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Uuid,
        })}
      </div>
      <div>
        {t('validation_string_regex_trim', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Trim,
        })}
      </div>
      <div>
        {t('validation_string_regex_lowercase', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Lowercase,
        })}
      </div>
      <div>
        {t('validation_string_regex_uppercase', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Uppercase,
        })}
      </div>
      <div>
        {t('validation_number_min', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Min,
        })}
      </div>
      <div>
        {t('validation_number_max', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Max,
        })}
      </div>
      <div>
        {t('validation_number_less_than', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.LessThan,
        })}
      </div>
      <div>
        {t('validation_number_more_than', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.MoreThan,
        })}
      </div>
      <div>
        {t('validation_number_positive', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Positive,
        })}
      </div>
      <div>
        {t('validation_number_negative', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Negative,
        })}
      </div>
      <div>
        {t('validation_number_integer', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Integer,
        })}
      </div>
      <div>
        {t('validation_date_min', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Date.Min,
        })}
      </div>
      <div>
        {t('validation_date_max', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Date.Max,
        })}
      </div>
      <div>
        {t('validation_array_length', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Array.Length,
        })}
      </div>
      <div>
        {t('validation_array_min', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Array.Min,
        })}
      </div>
      <div>
        {t('validation_array_max', {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Array.Max,
        })}
      </div>
    </div>
  );
};

export default DefaultTranslationExporter;
