import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import NFTCard from '../components/modules/NFTCard/NFTCard';

export default {
  title: 'NFTCard',
  component: NFTCard,
} as ComponentMeta<typeof NFTCard>;

export const NFTStory: ComponentStory<typeof NFTCard> = ({ ...args }) => <NFTCard {...args} />;
