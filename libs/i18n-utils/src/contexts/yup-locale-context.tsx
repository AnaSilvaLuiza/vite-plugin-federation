import { useTranslation } from 'react-i18next';
import { ElementContent } from '@olmero/core';
import { setLocale } from 'yup';
import { Namespaces, ValidationMessages, ValidationMessagesDefaultValues } from '@platform-services-ui/i18n-utils';

export const YupLocaleProvider = ({ children }: { children: ElementContent }) => {
  const { t } = useTranslation();

  setLocale({
    mixed: {
      default: t(ValidationMessages.Mixed.Default, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.Mixed.Default,
      }),
      required: t(ValidationMessages.String.Required, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Required,
      }),
    },
    string: {
      length: ({ length }) =>
        t(ValidationMessages.String.Length, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Length,
          length,
        }),
      min: ({ min }) =>
        t(ValidationMessages.String.Min, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Min,
          min,
        }),
      max: ({ max }) =>
        t(ValidationMessages.String.Max, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.String.Max,
          max,
        }),
      email: t(ValidationMessages.String.Email, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Email,
      }),
      url: t(ValidationMessages.String.Url, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Url,
      }),
      uuid: t(ValidationMessages.String.Uuid, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Uuid,
      }),
      trim: t(ValidationMessages.String.Trim, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Trim,
      }),
      lowercase: t(ValidationMessages.String.Lowercase, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Lowercase,
      }),
      uppercase: t(ValidationMessages.String.Uppercase, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.String.Uppercase,
      }),
    },
    number: {
      min: ({ min }) =>
        t(ValidationMessages.Number.Min, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Min,
          min,
        }),
      max: ({ max }) =>
        t(ValidationMessages.Number.Max, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.Max,
          max,
        }),
      lessThan: ({ less }) =>
        t(ValidationMessages.Number.LessThan, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.LessThan,
          less,
        }),
      moreThan: ({ more }) =>
        t(ValidationMessages.Number.MoreThan, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Number.MoreThan,
          more,
        }),
      positive: t(ValidationMessages.Number.Positive, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.Number.Positive,
      }),
      negative: t(ValidationMessages.Number.Negative, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.Number.Negative,
      }),
      integer: t(ValidationMessages.Number.Integer, {
        ns: Namespaces.Validation,
        defaultValue: ValidationMessagesDefaultValues.Number.Integer,
      }),
    },
    date: {
      min: ({ min }) =>
        t(ValidationMessages.Date.Min, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Date.Min,
          min,
        }),
      max: ({ max }) =>
        t(ValidationMessages.Date.Max, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Date.Max,
          max,
        }),
    },
    array: {
      length: ({ length }) =>
        t(ValidationMessages.Array.Length, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Array.Length,
          length,
        }),
      min: ({ min }) =>
        t(ValidationMessages.Array.Min, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Array.Min,
          min,
        }),
      max: ({ max }) =>
        t(ValidationMessages.Array.Max, {
          ns: Namespaces.Validation,
          defaultValue: ValidationMessagesDefaultValues.Array.Max,
          max,
        }),
    },
  });

  return children;
};
