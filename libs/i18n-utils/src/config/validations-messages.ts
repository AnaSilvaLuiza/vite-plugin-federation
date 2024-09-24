export const ValidationMessages = {
  Mixed: {
    Default: 'validation_mixed_default',
  },
  String: {
    Required: 'validation_string_required',
    Length: 'validation_string_length',
    Min: 'validation_string_min',
    Max: 'validation_string_max',
    Email: 'validation_string_email',
    Url: 'validation_string_url',
    Uuid: 'validation_string_uuid',
    Trim: 'validation_string_regex_trim',
    Lowercase: 'validation_string_regex_lowercase',
    Uppercase: 'validation_string_regex_uppercase',
  },
  Number: {
    Min: 'validation_number_min',
    Max: 'validation_number_max',
    LessThan: 'validation_number_less_than',
    MoreThan: 'validation_number_more_than',
    Positive: 'validation_number_positive',
    Negative: 'validation_number_negative',
    Integer: 'validation_number_integer',
  },
  Date: {
    Min: 'validation_date_min',
    Max: 'validation_date_max',
  },
  Array: {
    Length: 'validation_array_length',
    Min: 'validation_array_min',
    Max: 'validation_array_max',
  },
};

/* eslint-disable no-template-curly-in-string */
export const ValidationMessagesDefaultValues = {
  Mixed: {
    Default: 'Invalid field',
  },
  String: {
    Required: 'This field is required',
    Length: 'Must be exactly ${length} characters',
    Min: 'Must be at least ${min} characters',
    Max: 'Must be at most ${max} characters',
    Email: 'Must be a valid email',
    Url: 'Must be a valid URL',
    Uuid: 'Must be a valid UUID',
    Trim: 'Must not have leading or trailing spaces',
    Lowercase: 'Must be in lowercase',
    Uppercase: 'Must be in uppercase',
  },
  Number: {
    Min: 'Must be greater than or equal to ${min}',
    Max: 'Must be less than or equal to ${max}',
    LessThan: 'Must be less than ${less}',
    MoreThan: 'Must be greater than ${more}',
    Positive: 'Must be a positive number',
    Negative: 'Must be a negative number',
    Integer: 'Must be an integer',
  },
  Date: {
    Min: 'Must be later than ${min}',
    Max: 'Must be earlier than ${max}',
  },
  Array: {
    Length: 'Must have exactly ${length} items',
    Min: 'Must have at least ${min} items',
    Max: 'Must have at most ${max} items',
  },
};
