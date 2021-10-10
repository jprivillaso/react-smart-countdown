import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import Title from '.';

export default {
  title: 'Components/Title',
  component: Title,
} as Meta;

const Template: Story = (args) => <Title {...args}> My Title </Title>;

export const Default = Template.bind({});
Default.args = {};
