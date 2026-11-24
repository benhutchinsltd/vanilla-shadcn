import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from '@/components/ui/aspect-ratio'


const meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-96"><AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-lg bg-muted text-muted-foreground">16 / 9</AspectRatio></div>
  ),
}
