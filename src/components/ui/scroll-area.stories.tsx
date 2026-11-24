import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'


const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-56 w-48 rounded-md border"><div className="p-4"><h4 className="mb-4 text-sm font-medium">Tags</h4>{Array.from({ length: 30 }, (_, i) => (<div key={i}><div className="text-sm">v1.2.0-beta.{30 - i}</div><Separator className="my-2" /></div>))}</div></ScrollArea>
  ),
}
