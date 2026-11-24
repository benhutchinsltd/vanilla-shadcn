import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from '@/components/ui/textarea'


const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Textarea className="w-full max-w-sm" placeholder="Type your message here." />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea className="w-full max-w-sm" disabled placeholder="Disabled" />
  ),
}
