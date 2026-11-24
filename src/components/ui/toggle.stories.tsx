import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'


const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold"><Bold /></Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle bold"><Bold /> Bold</Toggle>
  ),
}
