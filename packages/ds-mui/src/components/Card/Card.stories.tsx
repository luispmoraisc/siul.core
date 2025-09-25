import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { action } from 'storybook/actions';
import Card from './Card';

const meta = {
  component: Card,
  title: 'Components/Card',
  parameters: {
    layout: 'centered',
  },
  args: {
    onBtnClick: action('button-click'),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    id: '1',
    title: 'Card Title',
    subTitle: 'Card Subtitle',
    description:
      'This is a description of the card content that explains what this card is about.',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    id: '2',
    title: 'Card Title',
    description: 'This card has no subtitle, just a title and description.',
  },
};

export const LongContent: Story = {
  args: {
    id: '3',
    title: 'Card with Long Content',
    subTitle: 'This is a longer subtitle for testing purposes',
    description:
      'This is a much longer description that tests how the card handles larger amounts of text content. It should wrap appropriately and maintain good readability even with multiple lines of text.',
  },
};

export const Interactive: Story = {
  args: {
    id: '4',
    title: 'Interactive Card',
    subTitle: 'Click the heart button',
    description:
      'This card demonstrates the interactive functionality. Click the heart button to see the action in the browser console.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heartButton = canvas.getByRole('button');
    await userEvent.click(heartButton);
  },
};
