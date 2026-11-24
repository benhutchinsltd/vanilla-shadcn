import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'


const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Select><SelectTrigger className="w-56"><SelectValue placeholder="Select a fruit" /></SelectTrigger><SelectContent><SelectGroup><SelectLabel>Fruits</SelectLabel><SelectItem value="apple">Apple</SelectItem><SelectItem value="banana">Banana</SelectItem><SelectItem value="blueberry">Blueberry</SelectItem></SelectGroup></SelectContent></Select>
  ),
}
