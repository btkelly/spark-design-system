import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';

export default {
  title: 'Components/Input/Helper Text',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const helperText = () => (
  <SprkTextInput
    label="Text Input"
    name="helper-text-example"
    helperText="This is my helper text."
  />
);

helperText.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const invalidHelperText = () => (
  <SprkTextInput
    label="Text Input"
    name="helper-text-example"
    helperText="This is my helper text."
    errorMessage="There is an error with this field."
    valid={false}
  />
);

invalidHelperText.story = {
  name: 'With Error Text',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
