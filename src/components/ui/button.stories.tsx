import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2"><Button>Default</Button><Button variant="secondary">Secondary</Button><Button variant="destructive">Destructive</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button></div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2"><Button size="sm">Small</Button><Button>Default</Button><Button size="lg">Large</Button><Button size="icon" aria-label="Mail"><Mail /></Button></div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Button><Mail /> Login with Email</Button>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Button disabled>Disabled</Button>
  ),
}
