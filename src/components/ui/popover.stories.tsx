import type { Meta, StoryObj } from '@storybook/react-vite'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Popover><PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger><PopoverContent className="w-72"><p className="text-sm">Place content for the popover here.</p></PopoverContent></Popover>
  ),
}
