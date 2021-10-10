import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SpeedControlProps } from './SpeedControl.types';

import SpeedControl from '.';

export default {
  title: 'Components/SpeedControl',
  component: SpeedControl,
} as Meta;

const Template: Story<SpeedControlProps> = (args) => <SpeedControl {...args} />;

export const InactiveSlow = Template.bind({});
InactiveSlow.args = {
  active: 600,
  speed: 1000,
};

export const ActiveSlow = Template.bind({});
ActiveSlow.args = {
  active: 1000,
  speed: 1000,
};

export const InactiveMedium = Template.bind({});
InactiveMedium.args = {
  active: 1000,
  speed: 600,
};

export const ActiveMedium = Template.bind({});
ActiveMedium.args = {
  active: 600,
  speed: 600,
};

export const InactiveFast = Template.bind({});
InactiveFast.args = {
  active: 600,
  speed: 400,
};

export const ActiveFast = Template.bind({});
ActiveFast.args = {
  active: 400,
  speed: 400,
};
