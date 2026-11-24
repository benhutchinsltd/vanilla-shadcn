import type { Meta, StoryObj } from '@storybook/react-vite'
import { Message, MessageContent, MessageGroup, MessageHeader, MessageFooter } from '@/components/ui/message'


const meta = {
  title: 'UI/Message',
  component: Message,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <MessageGroup className="w-96"><Message align="start"><MessageHeader>Assistant</MessageHeader><MessageContent>Here is a summary of your document.</MessageContent><MessageFooter>10:42</MessageFooter></Message><Message align="end"><MessageContent>Thanks, that is great.</MessageContent><MessageFooter>10:43</MessageFooter></Message></MessageGroup>
  ),
}
