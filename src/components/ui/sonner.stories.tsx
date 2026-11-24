import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div><Toaster /><Button variant="outline" onClick={() => toast('Event has been created', { description: 'Sunday, December 03, 2023 at 9:00 AM' })}>Show toast</Button></div>
  ),
}
