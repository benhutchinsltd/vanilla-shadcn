import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic, Underline } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'


const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ToggleGroup multiple variant="outline"><ToggleGroupItem value="bold" aria-label="Bold"><Bold /></ToggleGroupItem><ToggleGroupItem value="italic" aria-label="Italic"><Italic /></ToggleGroupItem><ToggleGroupItem value="underline" aria-label="Underline"><Underline /></ToggleGroupItem></ToggleGroup>
  ),
}
