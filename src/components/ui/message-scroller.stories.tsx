import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport } from '@/components/ui/message-scroller'


const meta = {
  title: 'UI/MessageScroller',
  component: MessageScrollerProvider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageScrollerProvider>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider><MessageScroller className="h-64 w-80 rounded-md border"><MessageScrollerViewport><MessageScrollerContent>{Array.from({ length: 20 }, (_, i) => (<MessageScrollerItem key={i} className="px-3 py-1 text-sm">Message {i + 1}</MessageScrollerItem>))}</MessageScrollerContent></MessageScrollerViewport><MessageScrollerButton /></MessageScroller></MessageScrollerProvider>
  ),
}
