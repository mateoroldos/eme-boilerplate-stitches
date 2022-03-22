import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFTGrid from '../components/modules/NFTGrid/NFTGrid';

export default {
  title: 'NFTGrid',
  component: NFTGrid,
} as ComponentMeta<typeof NFTGrid>;

export const NFTGridStory: ComponentStory<typeof NFTGrid> = ({ ...args }) => <NFTGrid {...args} />;
