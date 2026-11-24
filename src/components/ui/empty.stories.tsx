import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inbox } from 'lucide-react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Empty',
  component: Empty,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Empty className="w-full max-w-sm border"><EmptyHeader><EmptyMedia variant="icon"><Inbox /></EmptyMedia><EmptyTitle>No messages</EmptyTitle><EmptyDescription>You are all caught up. New messages will appear here.</EmptyDescription></EmptyHeader><EmptyContent><Button>Compose</Button></EmptyContent></Empty>
  ),
}
