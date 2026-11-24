import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'


const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-3"><InputGroup><InputGroupInput placeholder="Search..." /><InputGroupAddon><Search /></InputGroupAddon></InputGroup><InputGroup><InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon><InputGroupInput placeholder="example.com" /></InputGroup></div>
  ),
}
