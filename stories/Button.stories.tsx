import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/modules/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonStory: ComponentStory<typeof Button> = ({ ...args }) => <Button {...args} />;
