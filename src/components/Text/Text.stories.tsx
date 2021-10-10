import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import Text from '.';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story = (args) => <Text {...args}> My Text </Text>;

export const Default = Template.bind({});
Default.args = {};
