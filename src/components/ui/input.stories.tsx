import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Input className="w-full max-w-sm" placeholder="Email" />
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@example.com" /></div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Input className="w-full max-w-sm" disabled placeholder="Disabled" />
  ),
}

export const File: Story = {
  render: () => (
    <Input className="w-full max-w-sm" type="file" />
  ),
}
