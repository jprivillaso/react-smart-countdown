import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<HTMLButtonElement>> = (args) => (
  <Button {...args}> Button </Button>
);

export const Default = Template.bind({});
Default.args = {};
