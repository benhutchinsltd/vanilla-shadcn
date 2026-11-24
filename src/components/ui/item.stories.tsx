import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inbox } from 'lucide-react'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Item',
  component: Item,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Item variant="outline" className="w-96"><ItemMedia variant="icon"><Inbox /></ItemMedia><ItemContent><ItemTitle>Inbox</ItemTitle><ItemDescription>You have 3 unread messages.</ItemDescription></ItemContent><ItemActions><Button size="sm" variant="outline">Open</Button></ItemActions></Item>
  ),
}
