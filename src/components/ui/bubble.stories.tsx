import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleContent, BubbleGroup } from '@/components/ui/bubble'


const meta = {
  title: 'UI/Bubble',
  component: Bubble,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <BubbleGroup className="w-full max-w-sm"><Bubble align="start"><BubbleContent>Hi there, how can I help?</BubbleContent></Bubble><Bubble align="end" variant="default"><BubbleContent>I would like to try the new components.</BubbleContent></Bubble></BubbleGroup>
  ),
}
