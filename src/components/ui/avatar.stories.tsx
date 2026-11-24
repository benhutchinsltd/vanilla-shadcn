import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar'


const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Avatar><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /><AvatarFallback>CN</AvatarFallback></Avatar>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Avatar><AvatarImage src="/broken.png" alt="" /><AvatarFallback>BH</AvatarFallback></Avatar>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup><Avatar><AvatarFallback>AB</AvatarFallback></Avatar><Avatar><AvatarFallback>CD</AvatarFallback></Avatar><Avatar><AvatarFallback>EF</AvatarFallback></Avatar></AvatarGroup>
  ),
}
