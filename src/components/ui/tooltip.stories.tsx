import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <TooltipProvider><Tooltip><TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger><TooltipContent>Add to library</TooltipContent></Tooltip></TooltipProvider>
  ),
}
