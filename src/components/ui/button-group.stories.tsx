import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ButtonGroup><Button variant="outline">Archive</Button><Button variant="outline">Report</Button><ButtonGroupSeparator /><Button variant="outline">Snooze</Button></ButtonGroup>
  ),
}
