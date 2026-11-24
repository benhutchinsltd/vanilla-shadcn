import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from 'lucide-react'
import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'


const meta = {
  title: 'UI/Marker',
  component: Marker,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Marker><MarkerIcon><Calendar /></MarkerIcon><MarkerContent>Today</MarkerContent></Marker>
  ),
}

export const WithBorder: Story = {
  render: () => (
    <Marker variant="border" className="w-72"><MarkerContent>Yesterday</MarkerContent></Marker>
  ),
}
