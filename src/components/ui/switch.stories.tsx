import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'


const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2"><Switch id="airplane" /><Label htmlFor="airplane">Airplane mode</Label></div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Switch disabled />
  ),
}
