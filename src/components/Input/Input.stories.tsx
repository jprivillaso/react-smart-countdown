/* eslint-disable no-useless-escape */
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '01:00',
};

export const WithPredefinedValue = Template.bind({});
WithPredefinedValue.args = {
  value: '01:45',
};
