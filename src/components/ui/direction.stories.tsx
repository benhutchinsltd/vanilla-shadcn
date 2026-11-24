import type { Meta, StoryObj } from '@storybook/react-vite'
import { DirectionProvider } from '@/components/ui/direction'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Direction',
  component: DirectionProvider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider direction="rtl"><div dir="rtl" className="flex gap-2"><Button>One</Button><Button variant="outline">Two</Button></div></DirectionProvider>
  ),
}
