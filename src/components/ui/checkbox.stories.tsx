import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'


const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2"><Checkbox id="terms" /><Label htmlFor="terms">Accept terms and conditions</Label></div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2"><Checkbox id="c" defaultChecked /><Label htmlFor="c">Checked</Label></div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2"><Checkbox id="d" disabled /><Label htmlFor="d">Disabled</Label></div>
  ),
}
