import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'


const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2"><Checkbox id="l" /><Label htmlFor="l">Accept terms</Label></div>
  ),
}
