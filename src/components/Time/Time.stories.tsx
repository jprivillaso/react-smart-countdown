import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { TimeProps } from './Time.types';

import Time from '.';

export default {
  title: 'Components/Time',
  component: Time,
} as Meta;

const Template: Story<TimeProps> = (args) => <Time {...args}>My Text</Time>;

export const Default = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
};

export const Blinking = Template.bind({});
Blinking.args = {
  blink: true,
  blinkSpeed: 0.5,
};

export const WarningBlinking = Template.bind({});
WarningBlinking.args = {
  warning: true,
  blink: true,
  blinkSpeed: 0.5,
};
