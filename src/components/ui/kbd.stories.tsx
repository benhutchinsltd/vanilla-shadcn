import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd, KbdGroup } from '@/components/ui/kbd'


const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
  ),
}
